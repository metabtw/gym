// app/plans/page.tsx
'use client';

import Header from '../../components/Header';
import { Crown, Star, CheckCircle, Zap } from 'lucide-react';
import { useState } from 'react';

// 👇 Plan tipini tanımlayın
interface Plan {
  name: string;
  price: number;
  duration: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: React.ForwardRefExoticComponent<any>;
  color: string;
}

const plans: Plan[] = [
  {
    name: 'Basic',
    price: 299,
    duration: 'Aylık',
    description: 'Temel ihtiyaçlar için ideal başlangıç paketi',
    features: [
      'Haftada 3 gün erişim',
      'Grup derslerine katılım',
      'Spor salonu ekipmanları',
      'Temel sağlık taraması',
      'Sporcu soyunma odaları',
    ],
    popular: false,
    icon: Star,
    color: 'from-gray-500 to-gray-600',
  },
  {
    name: 'Premium',
    price: 499,
    duration: 'Aylık',
    description: 'En çok tercih edilen paket',
    features: [
      'Haftada 7 gün erişim',
      'Tüm grup dersler',
      'Aylık 2 kişisel antrenör seansı',
      'Detaylı sağlık taraması',
      'Kişisel beslenme programı',
      'Spa ve sauna erişimi',
    ],
    popular: true,
    icon: Crown,
    color: 'from-purple-600 to-blue-600',
  },
  {
    name: 'VIP',
    price: 899,
    duration: 'Aylık',
    description: 'Lüks ve özel deneyim için',
    features: [
      '7/24 erişim',
      'Tüm grup dersler',
      'Haftalık kişisel antrenör',
      'Premium sağlık taraması',
      'Kişisel beslenme programı',
      'Spa ve sauna erişimi',
      'Özel VIP soyunma odası',
      'Antrenöre özel ulaşım',
    ],
    popular: false,
    icon: Crown,
    color: 'from-amber-500 to-orange-600',
  },
];

export default function PlansPage() {
  // 👇 Tip güvenli state tanımı
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24 bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-6">
              <Zap className="h-8 w-8 text-purple-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Üyelik Planlarımız</h1>
            <p className="text-xl text-gray-600">
              Size en uygun planı seçin, bütçenize ve hedeflerinize göre antrenman yapın.
            </p>
          </div>
        </section>

        {/* Plans Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl p-8 transition-all duration-300 hover:shadow-xl ${
                    plan.popular
                      ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-2xl transform scale-105'
                      : 'bg-white text-gray-900 shadow-lg'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                        EN POPÜLER
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                        plan.popular ? 'bg-white/20' : 'bg-purple-100'
                      }`}
                    >
                      <plan.icon
                        className={`h-8 w-8 ${
                          plan.popular ? 'text-white' : 'text-purple-600'
                        }`}
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm opacity-90 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-extrabold">
                        {plan.price}
                      </span>
                      <span className="ml-2 text-lg">₺/{plan.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle
                          className={`h-5 w-5 mt-1 mr-3 flex-shrink-0 ${
                            plan.popular ? 'text-white' : 'text-green-500'
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedPlan(plan)} // ✅ Artık hata yok!
                    className={`w-full py-3 px-6 rounded-lg font-bold transition-colors duration-300 ${
                      plan.popular
                        ? 'bg-white text-purple-600 hover:bg-white/90'
                        : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                    }`}
                  >
                    Şimdi Satın Al
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Plan Karşılaştırması
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left font-semibold text-gray-900">Özellikler</th>
                    {plans.map((plan) => (
                      <th key={plan.name} className="p-4 text-center font-semibold text-gray-900">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Haftalık Erişim', basic: '3 gün', premium: '7 gün', vip: '7/24' },
                    { feature: 'Kişisel Antrenör', basic: '❌', premium: '✅ Aylık 2 seans', vip: '✅ Haftalık' },
                    { feature: 'Sağlık Taraması', basic: 'Temel', premium: 'Detaylı', vip: 'Premium' },
                    { feature: 'Spa & Sauna', basic: '❌', premium: '✅', vip: '✅' },
                    { feature: 'VIP Soyunma Odası', basic: '❌', premium: '❌', vip: '✅' },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-medium text-gray-900">{row.feature}</td>
                      <td className="p-4 text-center text-gray-700">{row.basic}</td>
                      <td className="p-4 text-center text-gray-700">{row.premium}</td>
                      <td className="p-4 text-center text-gray-700">{row.vip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}