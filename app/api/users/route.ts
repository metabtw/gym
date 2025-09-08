// app/api/users/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { verifyToken } from '@/lib/auth';

function isAdmin(request: Request) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader) return false;

  const token = authHeader.split(' ')[1]; // "Bearer <token>"
  const decoded = verifyToken(token);

  return decoded?.role === 'admin';
}

export async function GET(request: Request) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 403 });
  }

  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

// Diğer metodlar (POST, PUT, DELETE) benzer şekilde...