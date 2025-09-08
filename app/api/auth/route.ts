import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { generateToken } from '@/lib/auth';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email, password, role } = await request.json();

  if (role === 'admin') {
    const admin = await prisma.admin.findUnique({ where: { email } });
    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      return NextResponse.json({ error: 'Geçersiz admin bilgileri' }, { status: 401 });
    }
    const token = generateToken({ id: admin.id, role: 'admin' });
    return NextResponse.json({ token });
  } else {
    // Kullanıcı girişi (şimdilik sadece admin var, kullanıcı girişi yok)
    return NextResponse.json({ error: 'Kullanıcı girişi henüz desteklenmiyor' }, { status: 400 });
  }
}