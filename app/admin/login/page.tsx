import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/admin");

  return (
    <main className="min-h-screen bg-jb-black flex items-center justify-center p-6 font-inter">
      <form action="/api/auth/signin/credentials" method="post" className="bg-jb-darkGray rounded-3xl p-8 w-full max-w-md border border-white/10 shadow-2xl">
        <h1 className="text-3xl font-extrabold mb-2">Login Admin</h1>
        <p className="text-gray-400 mb-8">Acesso restrito ao painel de gestão.</p>
        <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
        <input id="email" name="email" type="email" defaultValue="admin@jbprado.com.br" className="w-full px-4 py-3 mb-4 rounded-xl bg-black border border-white/10 text-white focus:outline-none focus:border-jb-yellow" />
        <label htmlFor="password" className="block text-sm font-semibold mb-1">Senha</label>
        <input id="password" name="password" type="password" defaultValue="admin123" className="w-full px-4 py-3 mb-6 rounded-xl bg-black border border-white/10 text-white focus:outline-none focus:border-jb-yellow" />
        <button type="submit" className="w-full py-4 bg-jb-yellow text-jb-black rounded-xl font-bold hover:bg-yellow-400 transition">Entrar</button>
      </form>
    </main>
  );
}
