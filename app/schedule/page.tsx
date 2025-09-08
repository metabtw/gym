// app/schedule/page.tsx
'use client';

import Header from '../../components/Header';
import { Calendar, Clock, User } from 'lucide-react';
import { useState } from 'react';

// 👇 Tipleri tanımlayın
type Day = 'Pazartesi' | 'Salı' | 'Çarşamba' | 'Perşembe' | 'Cuma' | 'Cumartesi' | 'Pazar';

interface ScheduleItem {
  id: number;
  time: string;
  class: string;
  trainer: string;
  level: string;
  color: string;
}

const weeklySchedule: Record<Day, ScheduleItem[]> = {
  Pazartesi: [
    { id: 1, time: '09:00 - 10:00', class: 'Pilates', trainer: 'Ayşe Yılmaz', level: 'Başlangıç', color: 'bg-purple-100 text-purple-800' },
    { id: 2, time: '18:00 - 19:00', class: 'CrossFit', trainer: 'Mehmet Kaya', level: 'İleri', color: 'bg-red-100 text-red-800' },
  ],
  Salı: [
    { id: 3, time: '10:00 - 11:00', class: 'Yoga', trainer: 'Elif Demir', level: 'Tüm Seviyeler', color: 'bg-green-100 text-green-800' },
    { id: 4, time: '19:00 - 20:00', class: 'Fonksiyonel Antrenman', trainer: 'Mehmet Kaya', level: 'Orta', color: 'bg-blue-100 text-blue-800' },
  ],
  // ... diğer günler aynı yapıda
  Çarşamba: [
    { id: 5, time: '09:00 - 10:00', class: 'Pilates', trainer: 'Ayşe Yılmaz', level: 'Başlangıç', color: 'bg-purple-100 text-purple-800' },
    { id: 6, time: '18:00 - 19:00', class: 'CrossFit', trainer: 'Mehmet Kaya', level: 'İleri', color: 'bg-red-100 text-red-800' },
  ],
  Perşembe: [
    { id: 7, time: '10:00 - 11:00', class: 'Yoga', trainer: 'Elif Demir', level: 'Tüm Seviyeler', color: 'bg-green-100 text-green-800' },
    { id: 8, time: '19:00 - 20:00', class: 'Fonksiyonel Antrenman', trainer: 'Mehmet Kaya', level: 'Orta', color: 'bg-blue-100 text-blue-800' },
  ],
  Cuma: [
    { id: 9, time: '09:00 - 10:00', class: 'Pilates', trainer: 'Ayşe Yılmaz', level: 'Başlangıç', color: 'bg-purple-100 text-purple-800' },
    { id: 10, time: '18:00 - 19:00', class: 'CrossFit', trainer: 'Mehmet Kaya', level: 'İleri', color: 'bg-red-100 text-red-800' },
  ],
  Cumartesi: [
    { id: 11, time: '10:00 - 11:00', class: 'Yoga', trainer: 'Elif Demir', level: 'Tüm Seviyeler', color: 'bg-green-100 text-green-800' },
    { id: 12, time: '12:00 - 13:00', class: 'Açık Salon', trainer: 'Takım Antrenörü', level: 'Serbest', color: 'bg-gray-100 text-gray-800' },
  ],
  Pazar: [
    { id: 13, time: '10:00 - 11:00', class: 'Yoga', trainer: 'Elif Demir', level: 'Tüm Seviyeler', color: 'bg-green-100 text-green-800' },
    { id: 14, time: '12:00 - 13:00', class: 'Açık Salon', trainer: 'Takım Antrenörü', level: 'Serbest', color: 'bg-gray-100 text-gray-800' },
  ],
};

const days: Day[] = [
  'Pazartesi',
  'Salı',
  'Çarşamba',
  'Perşembe',
  'Cuma',
  'Cumartesi',
  'Pazar',
];

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState<Day>('Pazartesi');

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24 bg-gradient-to-br from-blue-50 to-purple-50">
        {/* ... diğer içerik ... */}

        {/* Schedule Grid */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              {weeklySchedule[selectedDay].length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">Bu gün için ders programı bulunmamaktadır.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {weeklySchedule[selectedDay].map((item: ScheduleItem) => (
                    <div
                      key={item.id}
                      className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                        {item.time.split(' - ')[0]}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-gray-900">{item.class}</h3>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <User className="h-4 w-4 mr-1" />
                          <span>{item.trainer}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{item.time}</span>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${item.color}`}>
                        {item.level}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ... diğer içerik ... */}
      </div>
    </>
  );
}