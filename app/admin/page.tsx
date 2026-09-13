import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session || session.user?.role !== "admin") redirect("/admin/login");

  const products = await prisma.product.findMany();
  const stockCritical = products.filter((p) => p.quantity < p.minQuantity);

  return (
    <main className="min-h-screen bg-jb-black p-8 text-white font-inter">
      <h1 className="text-3xl font-extrabold mb-6">Painel Administrativo JB Prado</h1>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-jb-darkGray rounded-2xl p-6 border border-white/10"><h2 className="font-bold text-xl">Produtos</h2><p className="text-3xl text-jb-yellow font-extrabold">{products.length}</p></div>
        <div className="bg-jb-darkGray rounded-2xl p-6 border border-white/10"><h2 className="font-bold text-xl">Estoque Crítico</h2><p className="text-3xl text-jb-red font-extrabold">{stockCritical.length}</p></div>
        <div className="bg-jb-darkGray rounded-2xl p-6 border border-white/10"><h2 className="font-bold text-xl">Contas a Vencer (7d)</h2><p className="text-3xl text-white font-extrabold">3</p></div>
      </div>
      <section className="bg-jb-darkGray rounded-2xl p-6 border border-white/10">
        <h3 className="font-bold text-xl mb-4">Produtos</h3>
        <table className="w-full text-left text-sm">
          <thead className="text-gray-400"><tr><th>Nome</th><th>Cat</th><th>Estoque</th><th>Preço</th></tr></thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t border-white/5"><td>{p.name}</td><td>{p.category}</td><td className={p.quantity < p.minQuantity ? "text-jb-red font-bold" : ""}>{p.quantity}</td><td>R$ {Number(p.price).toFixed(2)}</td></tr>
            ))}
          </tbody>
        </table>
      </section>
      <a href="/admin/login" className="inline-block mt-6 text-jb-yellow hover:underline">Sair</a>
    </main>
  );
}
