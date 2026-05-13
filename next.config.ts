import type { NextConfig } from "next";

/**
 * Configuracao Next.js — Processo Trabalhista Interativo (TRT 18°)
 *
 * output: "export" habilita SSG (Static Site Generation) completo.
 * O resultado e um conjunto de arquivos estaticos (HTML, JS, CSS, JSON)
 * servivel por qualquer servidor web — requisito do TRT 18° (PRD secao RNF06).
 */
// Em GitHub Pages o site fica em /processo-trabalhista-interativo/
// A variavel NEXT_PUBLIC_BASE_PATH e injetada pelo workflow de CI.
// Em desenvolvimento local fica vazia e o site roda em /.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,

  // Imagens: desabilitar otimizacao dinamica para SSG puro
  images: {
    unoptimized: true,
  },

  // Trailing slash para compatibilidade com servidores estaticos
  trailingSlash: true,
};

export default nextConfig;
