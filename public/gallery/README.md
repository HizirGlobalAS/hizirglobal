# Hızır Global - Galeri Görsel Yönetimi

Bu dizin (`public/gallery`), sitedeki "Galeri" sayfasında gösterilecek görsellerin düzenli bir şekilde barındırılması için oluşturulmuştur.

## 📂 Klasör Yapısı
Mevcut kategori ve alt kategori mantığına göre görsellerinizi aşağıdaki ilgili klasörlere ekleyebilirsiniz:

- `events/` (Kurumsal Etkinlikler, Lansmanlar vs.)
- `office/` (Genel Merkez, Ofis içi görüntüler)
- `field/`
  - `santiye/` (Şantiye ve inşaat faaliyetleri)
  - `tesis/` (Fabrika, depo vb. tesis alanları)
- `brands/`
  - `hizir-lojistik/` (Lojistik iştirak filoları vb.)
  - `hizir-tarim/` (Tarım tesisleri vb.)
  - `hizir-teknoloji/` (Teknoloji ofisleri vb.)

## 💡 Görsel Yüklerken Dikkat Edilmesi Gerekenler
1. **İsimlendirme (SEO & Düzen):** Boşluk, Türkçe karakter ve büyük harf **KULLANMAYINIZ**.  
   * Örnek Doğru Adlandırma: `kuresel-lojistik-fuari-01.jpg`
   * Yanlış Adlandırma: `küresel lojistik Fuarı 1.jpg` VEYA `IMG_2039.jpeg`
2. **Fotoğraf Kalitesi:** Mümkünse `.webp` veya `.jpg` formatlı görseller yükleyin. Sitenin hızını korumak için tek bir dosya **500kb'ı açmamalıdır**.
3. **Data Entegrasyonu:** Buraya eklediğiniz resimlerin gösterime girmesi için adreslerini (`/gallery/events/kuresel-fuari-1.webp` şeklinde) `src/data/mock-gallery.ts` dosyanızdaki (veya ileride kurulacak olan içerik yönetim sistemindeki) listeye kaydetmeniz gerekir.
