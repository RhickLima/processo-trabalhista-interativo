import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Como funciona um processo trabalhista",
  description:
    "Entenda o caminho de uma acao trabalhista do inicio ao encerramento, em linguagem simples e acessivel.",
};

const phases = [
  {
    number: 1,
    title: "Inicio do processo",
    description:
      "A reclamacao trabalhista pode ser protocolada e distribuida para uma Vara do Trabalho.",
    color: "bg-[#1D4ED8]",
    slug: "inicio-e-peticao-inicial",
  },
  {
    number: 2,
    title: "Audiencia inicial",
    description:
      "As partes comparecem e a Justica pode tentar resolver o conflito por acordo.",
    color: "bg-[#B45309]",
    slug: "audiencia-inicial",
  },
  {
    number: 3,
    title: "Provas e instrucao",
    description:
      "O juiz reune documentos, depoimentos e pericias para entender os fatos.",
    color: "bg-[#0E7490]",
    slug: "provas-e-instrucao",
  },
  {
    number: 4,
    title: "Decisao do juiz",
    description:
      "Se nao houver acordo, o juiz analisa o caso e pode proferir sentenca.",
    color: "bg-[#6D28D9]",
    slug: "sentenca",
  },
  {
    number: 5,
    title: "Depois da sentenca",
    description:
      "A decisao pode ser recorrida e, ao final, deve ser cumprida conforme o caso.",
    color: "bg-[#15803D]",
    slug: "liquidacao-e-execucao",
  },
];

export default function HomePage() {
  return (
    <>
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 bg-[#1D4ED8] text-white px-4 py-2 rounded"
      >
        Ir para o conteudo principal
      </a>

      <SiteHeader />

      <main id="conteudo-principal" className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] leading-tight mb-4">
              Como funciona um processo trabalhista
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Entenda o caminho de uma acao trabalhista do inicio ao
              encerramento, em linguagem simples e acessivel.
            </p>
            <p className="text-sm text-[#C2410C] font-medium mb-8">
              Esta e uma explicacao educativa. O caminho pode variar conforme o caso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/simulacao"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#1D4ED8] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors min-h-[44px]"
              >
                Comecar simulacao
              </Link>
              <Link
                href="/mapa-do-processo"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#1D4ED8] text-[#1D4ED8] font-semibold rounded-lg hover:bg-blue-50 transition-colors min-h-[44px]"
              >
                Ver fluxograma completo
              </Link>
              <Link
                href="/etapas/inicio-e-peticao-inicial"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors min-h-[44px]"
              >
                Explorar por etapas
              </Link>
            </div>
          </div>
        </section>

        {/* Fases resumidas */}
        <section
          className="py-12 px-4 sm:px-6 lg:px-8 bg-white"
          aria-labelledby="fases-titulo"
        >
          <div className="max-w-6xl mx-auto">
            <h2
              id="fases-titulo"
              className="text-2xl font-bold text-[#1F2937] mb-8 text-center"
            >
              As 5 fases do processo
            </h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 list-none m-0 p-0">
              {phases.map((phase) => (
                <li key={phase.number}>
                  <Link
                    href={`/etapas/${phase.slug}`}
                    className="flex flex-col h-full p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover:border-gray-200 group"
                  >
                    <div
                      className={`w-10 h-10 rounded-full ${phase.color} text-white flex items-center justify-center font-bold text-lg mb-3 shrink-0`}
                      aria-hidden="true"
                    >
                      {phase.number}
                    </div>
                    <h3 className="font-semibold text-[#1F2937] mb-2 group-hover:text-[#1D4ED8] transition-colors">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {phase.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Objetivo educativo */}
        <section
          className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50"
          aria-labelledby="objetivo-titulo"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2
              id="objetivo-titulo"
              className="text-2xl font-bold text-[#1F2937] mb-4"
            >
              Para que serve este site?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Este site foi desenvolvido pela Equipe de Comunicacao do TRT 18°
              para ajudar qualquer pessoa a entender como funciona uma reclamacao
              trabalhista, de forma simples, visual e acessivel.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Use o fluxograma para ver o caminho completo, a simulacao para
              aprender por decisoes ou o glossario para entender os termos
              juridicos.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/mapa-do-processo"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-white transition-colors min-h-[44px]"
              >
                Ver mapa do processo
              </Link>
              <Link
                href="/glossario"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-white transition-colors min-h-[44px]"
              >
                Glossario juridico
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
