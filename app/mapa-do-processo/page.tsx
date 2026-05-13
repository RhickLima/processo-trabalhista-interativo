import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { EducationalNotice } from "@/components/layout/EducationalNotice";
import { MapaDoProcesso } from "@/components/mapa/MapaDoProcesso";

export const metadata: Metadata = {
  title: "Mapa do processo",
  description:
    "Veja o fluxograma completo de um processo trabalhista, do inicio ao encerramento, em linguagem simples.",
};

export default function MapaDoProcessoPage() {
  return (
    <>
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 bg-[#1D4ED8] text-white px-4 py-2 rounded"
      >
        Ir para o conteudo principal
      </a>

      <SiteHeader />

      <main id="conteudo-principal" className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm list-none m-0 p-0">
              <li>
                <Link href="/" className="text-[#1D4ED8] hover:underline">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-400">/</li>
              <li className="text-gray-700 font-medium" aria-current="page">
                Mapa do processo
              </li>
            </ol>
          </nav>

          <div className="mb-6">
            <EducationalNotice />
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#1F2937] mb-2">
              Mapa do processo trabalhista
            </h1>
            <p className="text-gray-600">
              Veja o caminho geral de uma reclamacao trabalhista individual,
              dividido em 5 grandes fases. Clique em cada fase para ver mais detalhes.
            </p>
          </div>

          {/* Legenda */}
          <section aria-labelledby="legenda-titulo" className="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <h2 id="legenda-titulo" className="text-sm font-semibold text-gray-700 mb-3">
              Legenda de cores
            </h2>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 list-none m-0 p-0 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#1D4ED8] shrink-0" aria-hidden="true" />
                <span>Inicio e etapas comuns</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#B45309] shrink-0" aria-hidden="true" />
                <span>Audiencia e decisoes</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#0E7490] shrink-0" aria-hidden="true" />
                <span>Instrucao e recurso</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#6D28D9] shrink-0" aria-hidden="true" />
                <span>Sentenca</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#15803D] shrink-0" aria-hidden="true" />
                <span>Acordo e encerramento</span>
              </li>
            </ul>
          </section>

          {/* Componente principal interativo */}
          <MapaDoProcesso />

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/simulacao"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#1D4ED8] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors min-h-[44px]"
            >
              Iniciar simulacao
            </Link>
            <Link
              href="/glossario"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors min-h-[44px]"
            >
              Ver glossario
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
