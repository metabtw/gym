// app/contact/page.tsx
'use client';

import Header from '../../components/Header';
import { Phone, Mail, MapPin, Send, Clock, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.');
  };

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24 bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <MessageSquare className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Bize Ulaşın</h1>
            <p className="text-xl text-gray-600">
              Her türlü soru ve öneri için bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">Adres</h3>
                      <p className="text-gray-600">İstanbul, Şişli - Cumhuriyet Cad. No:187</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">Telefon</h3>
                      <p className="text-gray-600">(0212) 555 55 55</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">E-posta</h3>
                      <p className="text-gray-600">info@fitlifepremium.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">Çalışma Saatleri</h3>
                      <p className="text-gray-600">7/24 Açık (Reçete gerekli hizmetler için 09:00-21:00)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bizi Bulun</h3>
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Harita burada görünecek</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Mesaj Gönderin</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ad Soyad</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Adınız ve Soyadınız"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-posta</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="ornek@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Mesajınızı buraya yazın..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Mesajı Gönder
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Sık Sorulan Sorular</h2>
            <div className="space-y-6">
              {[
                {
                  question: 'Üyeliklerimi nasıl yükseltebilirim?',
                  answer: 'Herhangi bir zaman üyelik planınızı yükseltebilirsiniz. Fark tutarı ödenerek yeni planınız hemen aktif olur.',
                },
                {
                  question: 'İptal politikanız nasıldır?',
                  answer: 'Aylık üyeliklerde herhangi bir taahhüt yoktur. İstediğiniz zaman üyeliğinizi durdurabilirsiniz.',
                },
                {
                  question: 'Misafir getirebilir miyim?',
                  answer: 'Evet, her ay 1 misafiriniz ücretsiz olarak salonumuzdan yararlanabilir.',
                },
              ].map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}