// app/trainers/page.tsx
'use client';

import Header from '../../components/Header';
import Image from 'next/image';
import { Star, Calendar, MessageSquare } from 'lucide-react';
import { useState } from 'react';

// 👇 Trainer tipini tanımlayın
interface Trainer {
  id: number;
  name: string;
  specialty: string;
  photo: string;
  bio: string;
  rating: number;
  sessions: number;
}

const trainers: Trainer[] = [
  {
    id: 1,
    name: 'Ayşe Yılmaz',
    specialty: 'Kişisel Antrenörlük & Pilates',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', // ✅ Boşluk kaldırıldı
    bio: '10+ yıllık deneyim. Vücut geliştirme ve fonksiyonel antrenman uzmanı. Size özel programlarla hedeflerinize ulaşmanızı sağlar.',
    rating: 4.9,
    sessions: 1200,
  },
  {
    id: 2,
    name: 'Mehmet Kaya',
    specialty: 'CrossFit & Fonksiyonel Antrenman',
    photo: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', // ✅ Boşluk kaldırıldı
    bio: 'CrossFit Level 2 sertifikalı. Motivasyonunuzun kilidini açacak enerjik antrenör. Takım çalışması uzmanı.',
    rating: 4.8,
    sessions: 950,
  },
  {
    id: 3,
    name: 'Elif Demir',
    specialty: 'Yoga & Mindfulness',
    photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', // ✅ Boşluk kaldırıldı
    bio: 'Hatha ve Vinyasa Yoga eğitmeni. Zihin-beden dengesi için ideal rehber. Meditasyon ve nefes teknikleri konusunda uzman.',
    rating: 5.0,
    sessions: 800,
  },
];

export default function TrainersPage() {
  // 👇 Tip güvenli state
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24 bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Profesyonel Antrenör Ekibimiz</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Size en uygun antrenörü seçin, hedeflerinize birlikte ulaşalım.
            </p>
          </div>
        </section>

        {/* Trainers Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trainers.map((trainer) => (
                <div
                  key={trainer.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                  onClick={() => setSelectedTrainer(trainer)} // ✅ Artık hata yok!
                >
                  <div className="relative h-64">
                    <Image
                      src={trainer.photo}
                      alt={trainer.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium text-gray-800">{trainer.rating}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{trainer.name}</h3>
                    <p className="text-purple-600 font-medium mb-3">{trainer.specialty}</p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{trainer.bio}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{trainer.sessions}+ Seans</span>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300">
                      Detaylı Profil
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hala Kararsız mısınız?</h2>
            <p className="text-lg text-gray-600 mb-8">
              İlk danışmanlık seansımız ücretsiz! Uzman antrenörlerimiz size en uygun programı belirlesin.
            </p>
            <button className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <MessageSquare className="h-5 w-5 mr-2" />
              Ücretsiz Danışmanlık Al
            </button>
          </div>
        </section>
      </div>
    </>
  );
}