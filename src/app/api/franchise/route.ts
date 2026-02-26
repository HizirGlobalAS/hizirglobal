import { NextRequest, NextResponse } from "next/server";
import { transporter, baseMailOptions } from "@/lib/email";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        const firstName = formData.get("firstName") as string;
        const lastName = formData.get("lastName") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const tc = formData.get("tc") as string;
        const city = formData.get("city") as string;
        const district = formData.get("district") as string;
        const investment = formData.get("investment") as string;
        const message = formData.get("message") as string;
        const brands = formData.get("brands") as string; // Will come as JSON string or comma separated

        // Handle multiple files
        const files = formData.getAll("files") as File[];
        const attachments = [];

        for (const file of files) {
            if (file && file.size > 0) {
                const bytes = await file.arrayBuffer();
                const buffer = Buffer.from(bytes);
                attachments.push({
                    filename: file.name,
                    content: buffer,
                    contentType: file.type,
                });
            }
        }

        const htmlContent = `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                <h2 style="color: #1a1a1a; margin-bottom: 20px; border-bottom: 2px solid #1EAB7F; padding-bottom: 10px;">Yeni Franchise Başvurusu</h2>
                
                <h3 style="color: #444; margin-bottom: 10px;">1. Marka Tercihi</h3>
                <p><strong>Seçilen Markalar:</strong> ${brands || "Belirtilmedi"}</p>

                <h3 style="color: #444; margin-top: 20px; margin-bottom: 10px;">2. Kişisel Bilgiler</h3>
                <div style="display: grid; gap: 8px; color: #333;">
                    <p><strong>Ad Soyad:</strong> ${firstName} ${lastName}</p>
                    <p><strong>T.C. Kimlik / Vergi No:</strong> ${tc}</p>
                    <p><strong>E-posta:</strong> ${email}</p>
                    <p><strong>Telefon:</strong> ${phone}</p>
                </div>

                <h3 style="color: #444; margin-top: 20px; margin-bottom: 10px;">3. Lokasyon ve Finansman</h3>
                <div style="display: grid; gap: 8px; color: #333;">
                    <p><strong>Şehir:</strong> ${city}</p>
                    <p><strong>İlçe:</strong> ${district}</p>
                    <p><strong>Yatırım Bütçesi:</strong> ${investment}</p>
                </div>

                <h3 style="color: #444; margin-top: 20px; margin-bottom: 10px;">4. Ek Mesaj</h3>
                <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px;">
                    <p style="white-space: pre-wrap; color: #444; line-height: 1.5; margin: 0;">${message || "Belirtilmedi"}</p>
                </div>
                
                <p style="margin-top: 20px; font-size: 13px; color: #777;">
                    <em>Bu e-posta Hızır Global Franchise Başvuru sisteminden otomatik gönderilmiştir. Ekli dosyalar adayın ilettiği dokümanları içerir.</em>
                </p>
            </div>
        `;

        await transporter.sendMail({
            ...baseMailOptions,
            to: process.env.FRANCHISE_TO_EMAIL || process.env.SMTP_TO_EMAIL, // Fallback to general if not set
            subject: `Yeni Franchise Başvurusu: ${firstName} ${lastName} - ${city}`,
            html: htmlContent,
            attachments,
        });

        return NextResponse.json({ success: true, message: "Franchise başvurusu başarıyla iletildi." }, { status: 200 });

    } catch (error: any) {
        console.error("Nodemailer Hatası (Franchise):", error);
        return NextResponse.json({ message: "Sistemsel bir hata oluştu." }, { status: 500 });
    }
}
