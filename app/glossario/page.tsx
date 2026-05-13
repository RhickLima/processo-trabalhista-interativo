import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { EducationalNotice } from "@/components/layout/EducationalNotice";
import { GlossarySearch } from "@/components/glossary/GlossarySearch";
import { getAllGlossaryTerms } from "@/lib/content";

export const metadata: Metadata = {
  title: "Glossario",
  description:
    "Termos do processo trabalhista explicados em linguagem simples, para qualquer pessoa entender.",
};

export default function GlossarioPage() {
  const terms = getAllGlossaryTerms();

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
        <div className="max-w-4xl mx-auto">
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
                Glossario
              </li>
            </ol>
          </nav>

          <div className="mb-6">
            <EducationalNotice />
          </div>

          <h1 className="text-3xl font-bold text-[#1F2937] mb-2">
            Glossario
          </h1>
          <p className="text-gray-600 mb-8">
            Termos do processo trabalhista explicados em linguagem simples.{" "}
            <strong>{terms.length} termos</strong> disponíveis.
          </p>

          <GlossarySearch terms={terms} />

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/mapa-do-processo"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors min-h-[44px]"
            >
              Voltar ao mapa
            </Link>
            <Link
              href="/simulacao"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#1D4ED8] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors min-h-[44px]"
            >
              Iniciar simulacao
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
