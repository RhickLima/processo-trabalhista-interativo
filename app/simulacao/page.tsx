import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { EducationalNotice } from "@/components/layout/EducationalNotice";
import { SimulationEngine } from "@/components/simulation/SimulationEngine";
import simulationData from "@/content/simulation.json";
import type { SimulationState } from "@/lib/types";

export const metadata: Metadata = {
  title: "Simulacao guiada",
  description:
    "Aprenda como funciona um processo trabalhista tomando decisoes em uma simulacao educativa com situacoes ficticias.",
};

export default function SimulacaoPage() {
  const states = simulationData.states as SimulationState[];
  const initialStateId = "sim_inicio";

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
        <div className="max-w-2xl mx-auto">
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
                Simulacao
              </li>
            </ol>
          </nav>

          <div className="mb-6">
            <EducationalNotice />
          </div>

          <h1 className="text-3xl font-bold text-[#1F2937] mb-3">
            Simulacao guiada
          </h1>
          <p className="text-gray-600 mb-8">
            Aprenda como funciona um processo trabalhista tomando decisoes em
            uma historia ficticia. Esta simulacao e exclusivamente educativa e
            nao usa dados reais.
          </p>

          <SimulationEngine
            states={states}
            initialStateId={initialStateId}
          />

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/mapa-do-processo"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors min-h-[44px]"
              >
                Ver mapa do processo
              </Link>
              <Link
                href="/glossario"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors min-h-[44px]"
              >
                Ver glossario
              </Link>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
