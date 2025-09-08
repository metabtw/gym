Tabii 👍 Aşağıya tek parça halinde tam bir `README.md` dosyası veriyorum:

````markdown
# 🏋️‍♂️ FitLife Premium Spor Salonu Üyelik Sistemi

Modern, tam özellikli ve kullanıcı dostu bir spor salonu üyelik yönetim sistemi.  
Next.js 15+, Tailwind CSS, Prisma ORM ve SQLite ile geliştirilmiştir.

---

## 🌟 Özellikler

### 👥 Kullanıcı Tarafı
- ✅ **Ana Sayfa** — Modern hero section, özellikler, CTA  
- ✅ **Antrenörler** — Detaylı profiller, değerlendirme yıldızları, seans sayısı  
- ✅ **Ders Programı** — Haftalık filtreleme, seviye etiketleri, saat bazlı gösterim  
- ✅ **Üyelik Planları** — Karşılaştırma tablosu, popüler plan vurgusu, detaylı özellik listesi  
- ✅ **Üye Kaydı** — Form doğrulama, avantajlar bölümü  
- ✅ **İletişim** — Form, harita alanı, SSS bölümü  
- ✅ **Karanlık/Aydınlık Mod** — Sistem temasına saygı duyan toggle butonu  
- ✅ **Responsive Tasarım** — Mobil, tablet ve masaüstü uyumlu  

### 👨‍💼 Admin Paneli (Yakında)
- ✅ Üye Yönetimi (CRUD)  
- ✅ Antrenör Yönetimi (CRUD)  
- ✅ Ders Programı Yönetimi (CRUD)  
- ✅ Üyelik Planı Yönetimi (CRUD)  
- ✅ Dashboard (İstatistikler, gelir raporu)  

---

## ⚙️ Teknik Özellikler
- **Frontend:** Next.js 15+ (App Router), Tailwind CSS, Framer Motion (animasyonlar)  
- **Backend:** Next.js API Routes  
- **Veritabanı:** SQLite (Prisma ORM ile)  
- **Authentication:** JWT tabanlı (admin girişi için)  
- **Görseller:** `next/image` ile optimizasyon  
- **Tema:** `next-themes` ile dark/light mode desteği  

---

## 🚀 Kurulum

1. **Projeyi Klonlayın**
   ```bash
   git clone https://github.com/your-username/sporsalon.git
   cd sporsalon
````

2. **Bağımlılıkları Yükleyin**

   ```bash
   npm install
   ```

3. **Ortam Değişkenlerini Ayarlayın**
   Proje kök dizininde `.env` dosyası oluşturun:

   ```env
   DATABASE_URL="file:./dev.db"
   JWT_SECRET="your-super-secret-jwt-key-change-in-production"
   ```

4. **Prisma ile Veritabanını Kurun**

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Geliştirme Sunucusunu Başlatın**

   ```bash
   npm run dev
   ```

   Uygulama [http://localhost:3000](http://localhost:3000) adresinde çalışacaktır.

---

## 📂 Proje Yapısı

```bash
sporsalon/
├── app/
│   ├── (auth)/         # Giriş/çıkış sayfaları
│   ├── (user)/         # Kullanıcı sayfaları
│   │   ├── page.tsx    # Ana sayfa
│   │   ├── trainers/
│   │   ├── schedule/
│   │   ├── plans/
│   │   ├── register/
│   │   └── contact/
│   ├── (admin)/        # Admin paneli (yakında)
│   ├── api/            # API route'ları
│   └── layout.tsx      # Tema sağlayıcı
├── components/
│   ├── Header.tsx      # Global header (dark/light mode desteği)
│   └── ui/             # Reusable UI bileşenleri
├── lib/
│   ├── db.ts           # Prisma Client
│   └── auth.ts         # JWT yardımcı fonksiyonlar
├── prisma/
│   ├── schema.prisma   # Veri modelleri
│   └── dev.db          # SQLite veritabanı dosyası
├── public/
│   └── images/         # Statik görseller
├── tailwind.config.js
├── next.config.js      # next/image remotePatterns ayarı
└── package.json
```

---

## 🔧 Yapılandırmalar

**next.config.js — Dış Görsel Kaynakları**

```js
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
```

**tailwind.config.js — Dark Mode Desteği**

```js
module.exports = {
  darkMode: 'class', // next-themes için 'class' stratejisi
  // ... diğer config
}
```

---

## 🛡️ Güvenlik

* 🔐 **JWT Authentication** — Admin girişi için token tabanlı kimlik doğrulama
* 🔒 **Environment Variables** — Hassas veriler `.env` dosyasında saklanır
* 🛡️ **Prisma ORM** — SQL injection saldırılarına karşı koruma sağlar

---

## 📈 Geliştirme Yol Haritası

* [ ] Admin Paneli Tamamlanması
* [ ] Kullanıcı Girişi ve Paneli
* [ ] Online Ödeme Entegrasyonu (Stripe)
* [ ] SMS/Email Bildirim Sistemi
* [ ] Mobil Uygulama (React Native)

---

## 🤝 Katkıda Bulunma

Katkıda bulunmak isterseniz:

1. Bu repoyu **fork**layın
2. Yeni bir branch oluşturun

   ```bash
   git checkout -b feature/your-feature
   ```
3. Değişikliklerinizi yapın ve commitleyin

   ```bash
   git commit -m "Add some feature"
   ```
4. Branchinizi pushlayın

   ```bash
   git push origin feature/your-feature
   ```
5. Bir **Pull Request** açın 🚀

---

## 🙏 Teşekkürler

Next.js, Tailwind CSS, Prisma ve open-source topluluğuna teşekkürler!

**FitLife Premium — Sağlıklı yaşamın adresi. 💪**

<img width="1367" height="1884" alt="image" src="https://github.com/user-attachments/assets/9426b2a2-9657-4cd4-bf96-047197062113" />
