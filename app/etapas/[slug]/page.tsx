import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { EducationalNotice } from "@/components/layout/EducationalNotice";
import { StepCard } from "@/components/cards/StepCard";
import subflowsData from "@/content/flows/subflows.json";

/**
 * Gera rotas estaticas para todos os subfluxogramas.
 * PRD secao 17: /etapas/[slug]
 */
export async function generateStaticParams() {
  return subflowsData.subflows.map((flow) => ({
    slug: flow.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const flow = subflowsData.subflows.find((f) => f.slug === slug);

  if (!flow) {
    return { title: "Etapa nao encontrada" };
  }

  return {
    title: flow.title,
    description: flow.description,
    openGraph: {
      title: `${flow.title} | Como funciona um processo trabalhista`,
      description: flow.description,
    },
  };
}

export default async function EtapaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const flow = subflowsData.subflows.find((f) => f.slug === slug);

  if (!flow) {
    notFound();
  }

  // Encontra etapa anterior e proxima para navegacao
  const allSlugs = subflowsData.subflows.map((f) => f.slug);
  const currentIndex = allSlugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug =
    currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;
  const prevFlow = prevSlug
    ? subflowsData.subflows.find((f) => f.slug === prevSlug)
    : null;
  const nextFlow = nextSlug
    ? subflowsData.subflows.find((f) => f.slug === nextSlug)
    : null;

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
            <ol className="flex items-center gap-2 text-sm list-none m-0 p-0 flex-wrap">
              <li>
                <Link href="/" className="text-[#1D4ED8] hover:underline">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-400">/</li>
              <li>
                <Link
                  href="/mapa-do-processo"
                  className="text-[#1D4ED8] hover:underline"
                >
                  Mapa do processo
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-400">/</li>
              <li className="text-gray-700 font-medium" aria-current="page">
                {flow.title}
              </li>
            </ol>
          </nav>

          <div className="mb-6">
            <EducationalNotice />
          </div>

          {/* Cabecalho da etapa */}
          <div className="mb-8">
            <p
              className="text-sm font-medium mb-1"
              style={{ color: flow.themeColor }}
            >
              Etapa {flow.order} de {subflowsData.subflows.length}
            </p>
            <h1 className="text-3xl font-bold text-[#1F2937] mb-2">
              {flow.title}
            </h1>
            <p className="text-gray-600">{flow.subtitle}</p>
          </div>

          {/* Botoes de acao */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Link
              href="/mapa-do-processo"
              className="inline-flex items-center gap-1 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors min-h-[44px]"
            >
              <span aria-hidden="true">←</span> Voltar ao mapa
            </Link>
            <Link
              href="/simulacao"
              className="inline-flex items-center px-4 py-2 bg-[#1D4ED8] text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors min-h-[44px]"
            >
              Iniciar simulacao
            </Link>
          </div>

          {/* Secao principal */}
          <section aria-labelledby="fluxo-etapa-titulo">
            <h2 id="fluxo-etapa-titulo" className="text-xl font-bold text-[#1F2937] mb-2">
              Como funciona esta etapa
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Voce esta aqui. Clique em cada passo para ver mais detalhes.
            </p>

            {/* Versao textual — SEMPRE no DOM (PRD secao 30.3) */}
            <div className="sr-only">
              <h3>Versao textual acessivel</h3>
              <ol>
                {flow.textAlternative.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>

            {/* Cards interativos (clicaveis) */}
            <ol className="space-y-3 list-none m-0 p-0 mb-8">
              {flow.nodes.map((node, idx) => (
                <li key={node.id}>
                  <StepCard
                    node={{
                      ...node,
                      type: (node.type as import("@/lib/types").NodeType),
                      reviewStatus: ((node as Record<string, unknown>).reviewStatus as import("@/lib/types").ReviewStatus | undefined) ?? "draft",
                      lastReviewedAt: ((node as Record<string, unknown>).lastReviewedAt as string | null | undefined) ?? null,
                      reviewedBy: ((node as Record<string, unknown>).reviewedBy as string | null | undefined) ?? null,
                    }}
                    index={idx}
                    themeColor={flow.themeColor}
                  />
                </li>
              ))}
            </ol>

            {/* Caminhos possiveis */}
            {flow.edges && flow.edges.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-[#1F2937] mb-3">
                  Caminhos possiveis nesta etapa
                </h3>
                <ul className="space-y-2 list-none m-0 p-0">
                  {flow.edges.map((edge) => (
                    <li
                      key={`${edge.from}-${edge.to}`}
                      className={`p-3 rounded-lg text-sm ${
                        edge.type === "negative"
                          ? "bg-red-50 border border-red-100 text-red-800"
                          : edge.type === "positive"
                          ? "bg-green-50 border border-green-100 text-green-800"
                          : "bg-gray-50 border border-gray-100 text-gray-700"
                      }`}
                    >
                      <span className="font-medium">{edge.label}: </span>
                      {edge.explanation}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Texto alternativo completo — versao lista */}
            <details className="mb-8 border border-gray-200 rounded-xl overflow-hidden">
              <summary className="px-4 py-3 bg-gray-50 text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors list-none flex items-center justify-between min-h-[44px]">
                <span>Ver como lista</span>
                <span aria-hidden="true" className="text-gray-400">▼</span>
              </summary>
              <ol className="p-4 space-y-2 list-decimal list-inside text-sm text-gray-700">
                {flow.textAlternative.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </details>
          </section>

          {/* Navegacao entre etapas */}
          <nav
            aria-label="Navegar entre etapas"
            className="flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t border-gray-200"
          >
            {prevFlow ? (
              <Link
                href={`/etapas/${prevFlow.slug}`}
                className="inline-flex items-center gap-2 px-5 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors min-h-[44px]"
              >
                <span aria-hidden="true">←</span>
                <span>
                  <span className="block text-xs text-gray-500">
                    Ver etapa anterior
                  </span>
                  {prevFlow.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextFlow ? (
              <Link
                href={`/etapas/${nextFlow.slug}`}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#1D4ED8] text-white font-medium rounded-lg hover:bg-blue-700 transition-colors min-h-[44px] sm:ml-auto"
              >
                <span>
                  <span className="block text-xs text-blue-200">
                    Proxima etapa
                  </span>
                  {nextFlow.title}
                </span>
                <span aria-hidden="true">→</span>
              </Link>
            ) : (
              <Link
                href="/mapa-do-processo"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#15803D] text-white font-medium rounded-lg hover:bg-green-700 transition-colors min-h-[44px] sm:ml-auto"
              >
                Voltar ao mapa
                <span aria-hidden="true">→</span>
              </Link>
            )}
          </nav>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
