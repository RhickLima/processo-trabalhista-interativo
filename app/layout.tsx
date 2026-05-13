import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/**
 * Fonte Inter carregada via next/font/google.
 * O next/font faz download em build-time e serve da propria infraestrutura —
 * sem requisicoes aos servidores do Google em runtime (PRD secao 32.5).
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Como funciona um processo trabalhista",
    default: "Como funciona um processo trabalhista",
  },
  description:
    "Site educativo interativo do TRT 18°. Entenda o caminho de uma acao trabalhista do inicio ao encerramento, em linguagem simples e acessivel.",
  keywords: [
    "processo trabalhista",
    "reclamacao trabalhista",
    "TRT 18",
    "Justica do Trabalho",
    "educativo",
    "fluxograma",
  ],
  authors: [{ name: "Equipe de Comunicacao do TRT 18°" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Como funciona um processo trabalhista — TRT 18°",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /* lang="pt-BR" obrigatorio conforme PRD secao 30.2 (WCAG 3.1.1 nivel A) */
    <html lang="pt-BR" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
