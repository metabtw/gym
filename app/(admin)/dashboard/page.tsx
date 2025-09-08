// app/(admin)/dashboard/page.tsx

import prisma from '@/lib/db';

// 👇 async ekleyin
export default async function DashboardPage() {
  // Artık await kullanabilirsiniz
  const userCount = await prisma.user.count();
  const trainerCount = await prisma.trainer.count();
  const classCount = await prisma.class.count();

  // MembershipPlan üzerinden gelir hesaplama
  const plans = await prisma.membershipPlan.findMany();
  let totalRevenue = 0;

  for (const plan of plans) {
    const userCountForPlan = await prisma.user.count({
      where: { membershipPlan: plan.name },
    });
    totalRevenue += plan.price * userCountForPlan;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Paneli - Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Toplam Üye</h3>
          <p className="text-3xl font-bold">{userCount}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Antrenör Sayısı</h3>
          <p className="text-3xl font-bold">{trainerCount}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Aktif Dersler</h3>
          <p className="text-3xl font-bold">{classCount}</p>
        </div>
        <div className="bg-purple-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Tahmini Gelir</h3>
          <p className="text-3xl font-bold">{totalRevenue.toFixed(2)} ₺</p>
        </div>
      </div>
    </div>
  );
}