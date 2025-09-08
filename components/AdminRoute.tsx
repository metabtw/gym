'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }
    // JWT doğrulama (sunucuda değil, sadece yönlendirme)
    // Gerçek projede sunucu tarafında middleware ile yapılmalı
  }, []);

  return <>{children}</>;
}