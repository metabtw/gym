// app/register/page.tsx
'use client';

import { useState } from 'react';
import { User, Mail, Phone, CreditCard, CheckCircle } from 'lucide-react';
import Header from '../../components/Header';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'Basic',
  });

  const plans = [
    { value: 'Basic', label: 'Temel', price: '299 ₺/ay' },
    { value: 'Premium', label: 'Premium', price: '499 ₺/ay' },
    { value: 'VIP', label: 'VIP', price: '899 ₺/ay' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Kayıt başarılı! Kısa süre içinde sizinle iletişime geçeceğiz.');
  };

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24 bg-gradient-to-br from-purple-50 to-blue-50">
        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-6">
              <User className="h-8 w-8 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Üyelik Kaydı</h1>
            <p className="text-xl text-gray-600">
              Hemen kayıt olun, fitness yolculuğunuza başlayın!
            </p>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-12">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-8 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-100">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">Kayıt Avantajları</h3>
                    <ul className="text-sm text-gray-600 mt-1 space-y-1">
                      <li>• Ücretsiz sağlık taraması</li>
                      <li>• Kişisel antrenöre tanışma seansı</li>
                      <li>• 7 gün boyunca ücretsiz deneme</li>
                    </ul>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ad Soyad</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Adınız ve Soyadınız"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-posta</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="ornek@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="(555) 555-5555"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Üyelik Planı</label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      name="plan"
                      value={formData.plan}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white"
                    >
                      {plans.map((plan) => (
                        <option key={plan.value} value={plan.value}>
                          {plan.label} - {plan.price}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl text-lg"
                >
                  Kaydı Tamamla
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-600">
                <p>
                  Zaten üyey misiniz?{' '}
                  <a href="#" className="text-purple-600 hover:text-purple-800 font-medium">
                    Giriş yapın
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}