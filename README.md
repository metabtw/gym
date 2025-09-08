#🏋️‍♂️ FitLife Premium Spor Salonu Üyelik Sistemi
Modern, tam özellikli ve kullanıcı dostu bir spor salonu üyelik yönetim sistemi. Next.js 15+, Tailwind CSS, Prisma ORM ve SQLite ile geliştirilmiştir.

🌟 Özellikler
👥 Kullanıcı Tarafı
✅ Ana Sayfa — Modern hero section, özellikler, CTA
✅ Antrenörler — Detaylı profiller, değerlendirme yıldızları, seans sayısı
✅ Ders Programı — Haftalık filtreleme, seviye etiketleri, saat bazlı gösterim
✅ Üyelik Planları — Karşılaştırma tablosu, popüler plan vurgusu, detaylı özellik listesi
✅ Üye Kaydı — Form doğrulama, avantajlar bölümü
✅ İletişim — Form, harita alanı, SSS bölümü
✅ Karanlık/Aydınlık Mod — Sistem temasına saygı duyan toggle butonu
✅ Responsive Tasarım — Mobil, tablet ve masaüstü uyumlu
👨‍💼 Admin Paneli (Yakında)
✅ Üye Yönetimi (CRUD)
✅ Antrenör Yönetimi (CRUD)
✅ Ders Programı Yönetimi (CRUD)
✅ Üyelik Planı Yönetimi (CRUD)
✅ Dashboard (İstatistikler, gelir raporu)
⚙️ Teknik Özellikler
Frontend: Next.js 15+ App Router, Tailwind CSS, Framer Motion (animasyonlar)
Backend: Next.js API Routes
Veritabanı: SQLite (Prisma ORM ile)
Authentication: JWT tabanlı (admin girişi için)
Image Optimization: next/image ile
Temalar: next-themes ile dark/light mode desteği
🚀 Kurulum
1. Projeyi Klonlayın
bash


1
2
git clone https://github.com/your-username/sporsalon.git
cd sporsalon
2. Bağımlılıkları Yükleyin
bash


1
npm install
3. Ortam Değişkenlerini Ayarlayın
Proje kök dizininde .env dosyası oluşturun:

env


1
2
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
4. Prisma ile Veritabanını Kurun
bash


1
npx prisma migrate dev --name init
Bu komut, prisma/schema.prisma dosyasına göre SQLite veritabanı (dev.db) oluşturur ve tabloları kurar. 

5. Geliştirme Sunucusunu Başlatın
bash


1
npm run dev
Uygulama http://localhost:3000 adresinde çalışacaktır.

📂 Proje Yapısı


1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
sporsalon/
├── app/
│   ├── (auth)/          # Giriş/çıkış sayfaları
│   ├── (user)/          # Kullanıcı sayfaları
│   │   ├── page.tsx     # Ana sayfa
│   │   ├── trainers/
│   │   ├── schedule/
│   │   ├── plans/
│   │   ├── register/
│   │   └── contact/
│   ├── (admin)/         # Admin paneli (yakında)
│   ├── api/             # API route'ları
│   └── layout.tsx       # Tema sağlayıcı
├── components/
│   ├── Header.tsx       # Global header (dark/light mode desteği)
│   └── ui/              # Reusable UI bileşenleri
├── lib/
│   ├── db.ts            # Prisma Client
│   └── auth.ts          # JWT yardımcı fonksiyonlar
├── prisma/
│   ├── schema.prisma    # Veri modelleri
│   └── dev.db           # SQLite veritabanı dosyası
├── public/
│   └── images/          # Statik görseller
├── tailwind.config.js
├── next.config.js       # next/image remotePatterns ayarı
└── package.json
🔧 Yapılandırmalar
next.config.js — Dış Görsel Kaynakları Yapılandırma
js


1
2
3
4
5
6
7
8
9
10
11
12
⌄
⌄
⌄
⌄
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
tailwind.config.js — Dark Mode Desteği
js


1
2
3
4
⌄
module.exports = {
  darkMode: 'class', // 'class' strategy for next-themes
  // ... other config
}

🛡️ Güvenlik
JWT Authentication: Admin girişi için token tabanlı kimlik doğrulama.
Environment Variables: Hassas veriler .env dosyasında saklanır.
Prisma ORM: SQL injection saldırılarına karşı koruma sağlar.
📈 Geliştirme Yol Haritası
Admin Paneli Tamamlanması
Kullanıcı Girişi ve Paneli
Online Ödeme Entegrasyonu (Stripe)
SMS/Email Bildirim Sistemi
Mobil Uygulama (React Native)
🤝 Katkıda Bulunma
Katkıda bulunmak isterseniz:

Bu repoyu forklayın
Yeni bir branch oluşturun (git checkout -b feature/your-feature)
Değişikliklerinizi yapın ve commitleyin (git commit -m 'Add some feature')
Branchinizi pushlayın (git push origin feature/your-feature)
Bir Pull Request açın

🙏 Teşekkürler
Next.js, Tailwind CSS, Prisma ve open-source topluluğuna teşekkürler!

FitLife Premium — Sağlıklı yaşamın adresi. 💪
