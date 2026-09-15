import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "JB Prado - Poste Padrão e Painel Solar | Atibaia-SP",
  description: "Instalação certificada de postes padrão e sistemas solares em Atibaia-SP. Rod. Fernão Dias, Km 50 • WhatsApp +55 11 95432-9628.",
  keywords: ["poste padrão", "energia solar", "instalação certificada", "Atibaia-SP", "JB Prado"],
  authors: [{ name: "JB Prado", url: "https://wa.me/5511954329628" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://jbprado.com.br",
    siteName: "JB Prado",
    title: "JB Prado - Poste Padrão e Energia Solar",
    description: "Instalação de postes padrão de energia e sistemas solares em Atibaia-SP.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-inter bg-jb-black text-white antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
