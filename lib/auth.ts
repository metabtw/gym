// lib/auth.ts
import jwt, { JwtPayload } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';

// Özel payload tipi tanımlayın
interface CustomJwtPayload extends JwtPayload {
  id: number;
  role: string;
}

export const generateToken = (payload: CustomJwtPayload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
};

export const verifyToken = (token: string): CustomJwtPayload | null => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as CustomJwtPayload;
    return decoded;
  } catch (err) {
    return null;
  }
};