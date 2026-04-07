import { NextRequest, NextResponse } from "next/server";
import { transporter, baseMailOptions } from "@/lib/email";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        const firstName = formData.get("firstName") as string;
        const lastName = formData.get("lastName") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const department = formData.get("department") as string;
        const coverLetter = formData.get("coverLetter") as string;
        const cvFile = formData.get("cv") as File | null;

        if (!firstName || !lastName || !email || !phone || !department || !cvFile) {
            return NextResponse.json({ message: "Lütfen gerekli tüm alanları (ve CV dosyasını) eksiksiz doldurun." }, { status: 400 });
        }

        // 4 MB Limit Kontrolü
        const MAX_SIZE = 4 * 1024 * 1024;
        if (cvFile.size > MAX_SIZE) {
            return NextResponse.json({ message: "Yüklediğiniz CV dosyası 4 MB'ı geçemez." }, { status: 400 });
        }

        // CV dosyasını belleğe (Buffer) alma
        let buffer: Buffer;
        let contentType = cvFile.type || "application/octet-stream";
        let filename = cvFile.name || "cv_dosyasi";
        
        try {
            const bytes = await (cvFile as any).arrayBuffer();
            buffer = Buffer.from(bytes);
        } catch (fileError) {
            console.error("Kariyer CV okuma hatası:", fileError);
            return NextResponse.json({ message: "CV dosyası okunamadı veya formatı geçersiz." }, { status: 400 });
        }

        // Gönderilecek Email İçeriği
        const htmlContent = `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                <h2 style="color: #1a1a1a; margin-bottom: 20px; border-bottom: 2px solid #1EAB7F; padding-bottom: 10px;">Yeni Kariyer Başvurusu</h2>
                <div style="display: grid; gap: 10px; margin-bottom: 20px; color: #333;">
                    <p><strong>Ad Soyad:</strong> ${firstName} ${lastName}</p>
                    <p><strong>E-posta:</strong> ${email}</p>
                    <p><strong>Telefon:</strong> ${phone}</p>
                    <p><strong>Departman:</strong> ${department}</p>
                </div>
                <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px;">
                    <h3 style="margin-top:0; color:#555;">Ön Yazı:</h3>
                    <p style="white-space: pre-wrap; color: #444; line-height: 1.5;">${coverLetter || "Belirtilmedi"}</p>
                </div>
                <p style="margin-top: 20px; font-size: 13px; color: #777;"><em>Bu e-posta Hızır Global Kariyer sayfasından otomatik gönderilmiştir. Adayın özgeçmiş (CV) dosyası ektedir.</em></p>
            </div>
        `;

        try {
            await transporter.sendMail({
                ...baseMailOptions,
                to: process.env.CAREERS_TO_EMAIL || process.env.SMTP_TO_EMAIL, // Fallback to general if not set
                subject: `Yeni İş Başvurusu: ${firstName} ${lastName} - ${department}`,
                html: htmlContent,
                attachments: [
                    {
                        filename,
                        content: buffer,
                        contentType,
                    },
                ],
            });
        } catch (mailError: any) {
            console.error("Nodemailer Hatası (SMTP - Kariyer):", mailError);
            return NextResponse.json({ message: `Mail gönderilemedi: ${mailError.message || "Bilinmeyen hata"}` }, { status: 500 });
        }

        return NextResponse.json({ success: true, message: "Başvuru başarıyla iletildi." }, { status: 200 });

    } catch (error: any) {
        console.error("Kariyer Form İşleme Hatası:", error);
        return NextResponse.json({ message: `Sistemsel bir hata oluştu: ${error.message || ""}` }, { status: 500 });
    }
}
