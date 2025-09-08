// app/components/ClientWrapper.tsx
'use client';

import dynamic from 'next/dynamic';

// 👇 Gerçek Hero bileşenini ssr: false ile yükle
const DynamicHero = dynamic(
  () => import('./HeroSection'),
  {
    ssr: false,
    loading: () => (
      <div className="py-32 text-center text-white">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Yükleniyor...</span>
        </div>
      </div>
    ),
  }
);

export default function ClientWrapper() {
  return <DynamicHero />;
}