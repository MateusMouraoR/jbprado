import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "JB Prado - Poste Padrão e Painel Solar",
  description: "Instalação de postes padrão de energia e sistemas solares em Atibaia-SP.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-inter bg-jb-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
