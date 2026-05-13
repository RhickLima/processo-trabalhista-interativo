import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Pagina nao encontrada",
};

/**
 * Pagina 404 — PRD secao 33.3
 */
export default function NotFound() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="max-w-md text-center">
          <p className="text-6xl font-bold text-[#1D4ED8] mb-4" aria-hidden="true">
            404
          </p>
          <h1 className="text-2xl font-bold text-[#1F2937] mb-3">
            Pagina nao encontrada
          </h1>
          <p className="text-gray-600 mb-8">
            O endereco que voce acessou nao existe ou foi movido.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#1D4ED8] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors min-h-[44px]"
            >
              Voltar ao inicio
            </Link>
            <Link
              href="/mapa-do-processo"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors min-h-[44px]"
            >
              Ver mapa do processo
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
