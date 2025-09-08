// app/page.tsx — TAMAMEN SERVER COMPONENT

import Link from 'next/link';
import { Dumbbell, Calendar, Users, Heart } from 'lucide-react';
import ClientWrapper from '../components/ClientWrapper';
import Header from '../components/Header';

export const metadata = {
  title: 'FitLife Premium | Kişisel Antrenörlük & Grup Dersleri',
  description: 'İstanbul’un en lüks fitness merkezi. VIP üyelik, kişisel antrenör ve 7/24 açık salon ile hedeflerinize ulaşın.',
};

export default function HomePage() {
  const features = [
    {
      icon: Dumbbell,
      title: 'Premium Ekipman',
      desc: 'En son nesil Technogym cihazları ile antrenman keyfi.',
    },
    {
      icon: Calendar,
      title: '7/24 Açık',
      desc: 'İş yoğunluğuna bakmadan istediğiniz saatte gelin.',
    },
    {
      icon: Users,
      title: 'Kişisel Antrenör',
      desc: 'Size özel programlarla maksimum verim alın.',
    },
    {
      icon: Heart,
      title: 'Sağlık Odaklı',
      desc: 'Beslenme danışmanlığı ve sağlık taramaları dahil.',
    },
  ];

  return (
    <>
      {/* 👇 Header bileşeni */}
      <Header />

      {/* 👇 pt-24: Header yüksekliği + sabit pozisyon nedeniyle içerik kaymaması için */}
      <div className="min-h-screen pt-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* 🎬 Hero Section */}
        <ClientWrapper />

        {/* ✅ Features Section */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 📣 CTA Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50"></div>
          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bugün Başla, <br />
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                Yarını Kazan
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              İlk 50 üyeye özel %30 indirim ve ücretsiz sağlık taraması fırsatı! Hemen harekete geçin.
            </p>
            <Link
              href="/plans"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Planları İncele
            </Link>
          </div>
        </section>

        {/* 🏁 Footer */}
        <footer className="bg-black/50 py-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">FitLife Premium</h3>
              <p className="text-gray-400 mb-6">
                İstanbul, Şişli - Cumhuriyet Cad. No:187
              </p>
              <div className="flex justify-center space-x-6 mb-8">
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  İletişim
                </Link>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition">
                  Gizlilik
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition">
                  Şartlar
                </Link>
              </div>
              <p className="text-gray-500">
                &copy; {new Date().getFullYear()} FitLife Premium. Tüm hakları saklıdır.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}