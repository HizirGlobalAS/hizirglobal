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

        // CV dosyasını belleğe (Buffer) alma
        const bytes = await cvFile.arrayBuffer();
        const buffer = Buffer.from(bytes);

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

        await transporter.sendMail({
            ...baseMailOptions,
            to: process.env.CAREERS_TO_EMAIL || process.env.SMTP_TO_EMAIL, // Fallback to general if not set
            subject: `Yeni İş Başvurusu: ${firstName} ${lastName} - ${department}`,
            html: htmlContent,
            attachments: [
                {
                    filename: cvFile.name,
                    content: buffer,
                    contentType: cvFile.type,
                },
            ],
        });

        return NextResponse.json({ success: true, message: "Başvuru başarıyla iletildi." }, { status: 200 });

    } catch (error: any) {
        console.error("Nodemailer Hatası (Kariyer):", error);
        return NextResponse.json({ message: "Sistemsel bir hata oluştu. Lütfen daha sonra tekrar deneyin." }, { status: 500 });
    }
}
