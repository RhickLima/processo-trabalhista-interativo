"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";

interface Block {
  id: string;
  number: number;
  title: string;
  message: string;
  color: string;
  badgeColor: string;
  textColor: string;
  borderColor: string;
  steps: string[];
  slug: string;
  details: string;
}

const blocks: Block[] = [
  {
    id: "inicio",
    number: 1,
    title: "Inicio do processo",
    message: "Aqui o processo comeca e a outra parte e avisada.",
    color: "bg-blue-50",
    badgeColor: "bg-[#1D4ED8]",
    textColor: "text-[#1D4ED8]",
    borderColor: "border-[#1D4ED8]",
    steps: [
      "Problema trabalhista identificado",
      "Peticao inicial elaborada e protocolada",
      "Distribuicao para Vara do Trabalho",
      "Notificacao do reclamado",
    ],
    slug: "inicio-e-peticao-inicial",
    details:
      "O processo pode comecar quando o trabalhador, em geral assistido por advogado, protocola a peticao inicial na Justica do Trabalho. O processo e distribuido por sorteio entre as Varas e o reclamado recebe uma notificacao com a data da audiencia.",
  },
  {
    id: "audiencia",
    number: 2,
    title: "Audiencia inicial",
    message: "Aqui a Justica pode tentar resolver o conflito logo no comeco.",
    color: "bg-amber-50",
    badgeColor: "bg-[#B45309]",
    textColor: "text-[#B45309]",
    borderColor: "border-[#B45309]",
    steps: [
      "Comparecimento das partes",
      "Tentativa de acordo (conciliacao)",
      "Apresentacao de defesa se nao houver acordo",
    ],
    slug: "audiencia-inicial",
    details:
      "Na audiencia, as partes podem comparecer. O juiz propoe tentativa de acordo. Se as partes chegarem a um acordo, o processo pode ser encerrado. Se nao houver acordo, o reclamado apresenta sua defesa e o processo segue.",
  },
  {
    id: "provas",
    number: 3,
    title: "Provas e instrucao",
    message:
      "O juiz pode reunir informacoes para entender melhor o que aconteceu.",
    color: "bg-teal-50",
    badgeColor: "bg-[#0E7490]",
    textColor: "text-[#0E7490]",
    borderColor: "border-[#0E7490]",
    steps: [
      "Depoimentos das partes",
      "Analise de documentos",
      "Oitiva de testemunhas",
      "Pericia tecnica, quando necessaria",
      "Alegacoes finais",
    ],
    slug: "provas-e-instrucao",
    details:
      "Nesta fase, as partes podem apresentar provas: documentos, depoimentos, testemunhas e, quando necessario, pericia tecnica. Ao final, as partes apresentam suas alegacoes finais antes da decisao do juiz.",
  },
  {
    id: "sentenca",
    number: 4,
    title: "Decisao do juiz",
    message: "Se nao houver acordo, o juiz pode proferir sentenca.",
    color: "bg-purple-50",
    badgeColor: "bg-[#6D28D9]",
    textColor: "text-[#6D28D9]",
    borderColor: "border-[#6D28D9]",
    steps: [
      "Nova tentativa de acordo",
      "Analise do processo pelo juiz",
      "Prolacao da sentenca",
      "Intimacao das partes",
    ],
    slug: "sentenca",
    details:
      "Antes de decidir, o juiz pode propor nova tentativa de acordo. Se nao houver acordo, o juiz analisa todo o processo e profere a sentenca, decidindo cada pedido. A sentenca pode ser procedente, improcedente ou parcialmente procedente, conforme o caso.",
  },
  {
    id: "pos-sentenca",
    number: 5,
    title: "Depois da sentenca",
    message:
      "Depois da decisao, o processo pode continuar ate que a obrigacao seja cumprida.",
    color: "bg-green-50",
    badgeColor: "bg-[#15803D]",
    textColor: "text-[#15803D]",
    borderColor: "border-[#15803D]",
    steps: [
      "Recurso ao Tribunal (se houver discordancia)",
      "Transito em julgado (decisao definitiva)",
      "Liquidacao dos valores",
      "Execucao",
      "Encerramento do processo",
    ],
    slug: "liquidacao-e-execucao",
    details:
      "As partes podem recorrer da sentenca ao Tribunal Regional do Trabalho. Se nao houver recurso ou apos o julgamento, a decisao se torna definitiva (transito em julgado). Em seguida, os valores sao calculados e a fase de execucao garante o cumprimento da obrigacao.",
  },
];

type ViewMode = "lista" | "mapa";

export function MapaDoProcesso() {
  const [viewMode, setViewMode] = useState<ViewMode>("lista");
  const [selectedBlock, setSelectedBlock] = useState<Block | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);

  const handleBlockClick = useCallback((block: Block) => {
    setSelectedBlock(block);
    setPanelOpen(true);
  }, []);

  const closePanel = useCallback(() => {
    setPanelOpen(false);
  }, []);

  // Fecha painel com Esc
  useEffect(() => {
    if (!panelOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePanel();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [panelOpen, closePanel]);

  return (
    <div>
      {/* Controle de visualizacao */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-sm text-gray-600 font-medium">Visualizar como:</span>
        <div role="group" aria-label="Modo de visualizacao" className="flex gap-2">
          <button
            type="button"
            onClick={() => setViewMode("lista")}
            aria-pressed={viewMode === "lista"}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors min-h-[44px] ${
              viewMode === "lista"
                ? "bg-[#1D4ED8] text-white"
                : "border border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            Ver como lista
          </button>
          <button
            type="button"
            onClick={() => setViewMode("mapa")}
            aria-pressed={viewMode === "mapa"}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors min-h-[44px] ${
              viewMode === "mapa"
                ? "bg-[#1D4ED8] text-white"
                : "border border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            Ver como mapa
          </button>
        </div>
      </div>

      <div className={viewMode === "mapa" ? "flex gap-6" : ""}>
        {/* Versao textual (sempre no DOM — PRD secao 30.3) */}
        <section
          aria-labelledby="fluxo-titulo"
          aria-hidden={viewMode === "mapa" ? "true" : "false"}
          className={viewMode === "mapa" ? "hidden" : ""}
        >
          <h2 id="fluxo-titulo" className="sr-only">
            Fases do processo trabalhista
          </h2>
          <ol className="space-y-4 list-none m-0 p-0">
            {blocks.map((block, idx) => (
              <li key={block.id} className="relative">
                {idx < blocks.length - 1 && (
                  <div
                    className="absolute left-5 top-full w-0.5 h-4 bg-gray-300 z-10"
                    aria-hidden="true"
                  />
                )}
                <article
                  className={`border-2 ${block.borderColor} ${block.color} rounded-xl p-5`}
                  aria-labelledby={`lista-bloco-${block.id}-titulo`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-full ${block.badgeColor} text-white flex items-center justify-center font-bold text-lg shrink-0`}
                      aria-hidden="true"
                    >
                      {block.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        id={`lista-bloco-${block.id}-titulo`}
                        className="font-bold text-[#1F2937] text-lg mb-1"
                      >
                        Fase {block.number}: {block.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 italic">
                        {block.message}
                      </p>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700 mb-4">
                        {block.steps.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ol>
                      <Link
                        href={`/etapas/${block.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-medium text-[#1D4ED8] hover:underline"
                      >
                        Ver subfluxograma desta fase
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>

        {/* Versao visual/mapa — Progressive Enhancement */}
        {viewMode === "mapa" && (
          <>
            <section
              aria-label="Mapa visual do processo trabalhista"
              className="flex-1 min-w-0"
            >
              {/* Mobile: timeline vertical expandivel */}
              <div className="sm:hidden space-y-3">
                {blocks.map((block, idx) => (
                  <MobileBlock
                    key={block.id}
                    block={block}
                    isLast={idx === blocks.length - 1}
                    isSelected={selectedBlock?.id === block.id && panelOpen}
                    onSelect={handleBlockClick}
                  />
                ))}
              </div>

              {/* Desktop: fluxo visual com 5 blocos clicaveis */}
              <div
                className="hidden sm:flex flex-col items-center gap-0"
                aria-hidden="true"
              >
                {blocks.map((block, idx) => (
                  <div key={block.id} className="flex flex-col items-center w-full">
                    <button
                      type="button"
                      onClick={() => handleBlockClick(block)}
                      aria-expanded={
                        selectedBlock?.id === block.id && panelOpen
                      }
                      className={`w-full text-left border-2 ${block.borderColor} ${block.color} rounded-xl p-4 transition-all hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1D4ED8] ${
                        selectedBlock?.id === block.id && panelOpen
                          ? "ring-4 ring-[#1D4ED8] shadow-md"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-full ${block.badgeColor} text-white flex items-center justify-center font-bold shrink-0`}
                        >
                          {block.number}
                        </div>
                        <div>
                          <p className="font-bold text-[#1F2937]">{block.title}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{block.message}</p>
                        </div>
                        <span className="ml-auto text-gray-400" aria-hidden="true">
                          {selectedBlock?.id === block.id && panelOpen ? "▲" : "▼"}
                        </span>
                      </div>
                    </button>
                    {idx < blocks.length - 1 && (
                      <div className="w-0.5 h-6 bg-gray-300" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Painel lateral — desktop */}
            {panelOpen && selectedBlock && (
              <aside
                aria-label={`Resumo: ${selectedBlock.title}`}
                className="hidden sm:block w-80 shrink-0"
              >
                <div className={`border-2 ${selectedBlock.borderColor} ${selectedBlock.color} rounded-xl p-5 sticky top-4`}>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h2 className={`font-bold text-lg ${selectedBlock.textColor}`}>
                      Fase {selectedBlock.number}: {selectedBlock.title}
                    </h2>
                    <button
                      type="button"
                      onClick={closePanel}
                      aria-label="Fechar painel"
                      className="text-gray-400 hover:text-gray-700 shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-white/60"
                    >
                      <span aria-hidden="true" className="text-xl">×</span>
                    </button>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {selectedBlock.details}
                  </p>
                  <p className="text-xs text-[#C2410C] font-medium mb-4">
                    Este caminho pode variar conforme o caso.
                  </p>
                  <div className="flex flex-col gap-2">
                    <Link
                      href={`/etapas/${selectedBlock.slug}`}
                      className={`inline-flex items-center justify-center px-4 py-2 ${selectedBlock.badgeColor} text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity min-h-[44px]`}
                    >
                      Ver subfluxograma desta fase
                    </Link>
                    <Link
                      href="/simulacao"
                      className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors min-h-[44px]"
                    >
                      Iniciar simulacao
                    </Link>
                  </div>
                </div>
              </aside>
            )}
          </>
        )}
      </div>
    </div>
  );
}

/** Bloco expansivel para mobile na visao de mapa */
function MobileBlock({
  block,
  isLast,
  isSelected,
  onSelect,
}: {
  block: Block;
  isLast: boolean;
  isSelected: boolean;
  onSelect: (b: Block) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    setExpanded((v) => !v);
    onSelect(block);
  };

  return (
    <div className="relative">
      <div
        className={`border-2 ${block.borderColor} ${block.color} rounded-xl overflow-hidden`}
      >
        <button
          type="button"
          onClick={toggle}
          aria-expanded={expanded}
          className="w-full text-left p-4 flex items-center gap-3 min-h-[60px]"
        >
          <div
            className={`w-9 h-9 rounded-full ${block.badgeColor} text-white flex items-center justify-center font-bold shrink-0`}
            aria-hidden="true"
          >
            {block.number}
          </div>
          <span className="font-bold text-[#1F2937] flex-1">{block.title}</span>
          <span className="text-gray-400 shrink-0" aria-hidden="true">
            {expanded ? "▲" : "▼"}
          </span>
        </button>

        {expanded && (
          <div className="px-4 pb-4 border-t border-current border-opacity-20">
            <p className="text-sm text-gray-600 italic mb-3 pt-3">{block.message}</p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">{block.details}</p>
            <p className="text-xs text-[#C2410C] font-medium mb-3">
              Este caminho pode variar conforme o caso.
            </p>
            <Link
              href={`/etapas/${block.slug}`}
              className={`inline-flex items-center justify-center px-4 py-2 ${block.badgeColor} text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity min-h-[44px]`}
            >
              Ver subfluxograma
            </Link>
          </div>
        )}
      </div>
      {!isLast && (
        <div
          className="w-0.5 h-4 bg-gray-300 mx-auto"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
