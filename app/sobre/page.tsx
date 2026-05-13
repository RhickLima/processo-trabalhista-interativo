import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { EducationalNotice } from "@/components/layout/EducationalNotice";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Saiba mais sobre o site educativo de processo trabalhista do TRT 18°, sua finalidade, acessibilidade e politica de privacidade.",
};

export default function SobrePage() {
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
        <div className="max-w-3xl mx-auto">
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
                Sobre
              </li>
            </ol>
          </nav>

          <div className="mb-6">
            <EducationalNotice />
          </div>

          <h1 className="text-3xl font-bold text-[#1F2937] mb-2">
            Sobre este site
          </h1>
          <p className="text-gray-600 mb-10">
            Informacoes sobre o projeto, quem fez, acessibilidade e privacidade.
          </p>

          <div className="space-y-8">
            <section aria-labelledby="o-que-e" className="p-6 bg-white border border-gray-200 rounded-xl">
              <h2 id="o-que-e" className="text-xl font-bold text-[#1F2937] mb-3">
                O que e este site
              </h2>
              <p className="text-gray-700 mb-3">
                Este e um site educativo e interativo desenvolvido para explicar,
                em linguagem simples, como pode funcionar uma reclamacao trabalhista
                individual na Justica do Trabalho.
              </p>
              <p className="text-gray-700 mb-3">
                O objetivo e permitir que qualquer pessoa entenda o caminho geral
                de um processo trabalhista, por meio de fluxogramas, simulacao
                guiada e glossario.
              </p>
              <p className="text-gray-700 font-medium">
                Este site nao substitui orientacao juridica, atendimento da
                Justica do Trabalho, advogado, sindicato ou Defensoria Publica.
              </p>
            </section>

            <section aria-labelledby="quem-fez" className="p-6 bg-white border border-gray-200 rounded-xl">
              <h2 id="quem-fez" className="text-xl font-bold text-[#1F2937] mb-3">
                Quem fez
              </h2>
              <p className="text-gray-700 mb-2">
                Este site foi desenvolvido pela{" "}
                <strong>Equipe de Comunicacao do Tribunal Regional do Trabalho da 18a Regiao (TRT 18°)</strong>.
              </p>
              <p className="text-gray-700">
                O TRT 18° e o tribunal da Justica do Trabalho responsavel pelo
                Estado de Goias.{" "}
                <a
                  href="https://www.trt18.jus.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1D4ED8] hover:underline"
                >
                  Acesse o site institucional do TRT 18°
                </a>
                .
              </p>
            </section>

            <section
              id="acessibilidade"
              aria-labelledby="acessibilidade-titulo"
              className="p-6 bg-white border border-gray-200 rounded-xl"
            >
              <h2 id="acessibilidade-titulo" className="text-xl font-bold text-[#1F2937] mb-3">
                Acessibilidade
              </h2>
              <p className="text-gray-700 mb-3">
                Este site busca conformidade com as{" "}
                <strong>Diretrizes de Acessibilidade para Conteudo Web (WCAG) 2.2, nivel AA</strong>.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                <li>Navegacao completa por teclado</li>
                <li>Foco visivel em todos os elementos interativos</li>
                <li>Versao textual de todos os fluxogramas</li>
                <li>Contraste minimo 4.5:1 para texto normal</li>
                <li>Respeito a preferencia de reducao de movimento</li>
                <li>Linguagem do documento declarada (pt-BR)</li>
                <li>Botoes com area minima de 44x44px</li>
              </ul>
              <p className="text-gray-700">
                Encontrou um problema de acessibilidade?{" "}
                <a
                  href="mailto:comunicacao@trt18.jus.br"
                  className="text-[#1D4ED8] hover:underline"
                >
                  Entre em contato com a Comunicacao do TRT 18°
                </a>
                .
              </p>
            </section>

            <section
              id="privacidade"
              aria-labelledby="privacidade-titulo"
              className="p-6 bg-white border border-gray-200 rounded-xl"
            >
              <h2 id="privacidade-titulo" className="text-xl font-bold text-[#1F2937] mb-3">
                Privacidade
              </h2>
              <p className="text-gray-700 mb-3">
                Este site nao coleta dados pessoais identificaveis como CPF, nome
                ou numero de processo.
              </p>
              <p className="text-gray-700 mb-3">
                A politica de privacidade completa sera publicada antes do
                lancamento publico do site, conforme exigido pela Lei Geral de
                Protecao de Dados (LGPD).
              </p>
            </section>

            <section aria-labelledby="contato-titulo" className="p-6 bg-white border border-gray-200 rounded-xl">
              <h2 id="contato-titulo" className="text-xl font-bold text-[#1F2937] mb-3">
                Contato e feedback
              </h2>
              <p className="text-gray-700 mb-3">
                Para duvidas, sugestoes ou problemas com este site:
              </p>
              <p className="text-gray-700">
                <a
                  href="mailto:comunicacao@trt18.jus.br"
                  className="text-[#1D4ED8] hover:underline"
                >
                  comunicacao@trt18.jus.br
                </a>
              </p>
              <p className="text-sm text-gray-500 mt-3">
                Nao compartilhe dados pessoais, relatos de casos reais ou
                informacoes processuais por este canal.
              </p>
            </section>
          </div>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#1D4ED8] hover:underline font-medium"
            >
              <span aria-hidden="true">←</span> Voltar ao inicio
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
