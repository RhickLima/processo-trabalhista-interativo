"use client";

import { useState, useEffect, useRef, useId, useCallback } from "react";
import type { FlowNode } from "@/lib/types";

type DepthLevel = "simple" | "citizen" | "technical";

interface StepCardProps {
  node: FlowNode;
  index: number;
  themeColor: string;
  openTriggerRef?: React.RefObject<HTMLButtonElement | null>;
}

const depthLabels: Record<DepthLevel, string> = {
  simple: "Ver explicacao simples",
  citizen: "Ver explicacao para cidadao",
  technical: "Ver detalhe tecnico",
};

const depthOrder: DepthLevel[] = ["simple", "citizen", "technical"];

/**
 * Card de etapa do subfluxograma.
 * 3 niveis de profundidade (PRD secao 25).
 * Fecha com Esc, retorna foco ao elemento que abriu.
 */
export function StepCard({ node, index, themeColor, openTriggerRef }: StepCardProps) {
  const [open, setOpen] = useState(false);
  const [depth, setDepth] = useState<DepthLevel>("simple");
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();
  const descId = useId();

  const close = useCallback(() => {
    setOpen(false);
    setDepth("simple");
    // Retorna foco ao trigger que abriu o card
    if (openTriggerRef?.current) {
      openTriggerRef.current.focus();
    } else {
      triggerRef.current?.focus();
    }
  }, [openTriggerRef]);

  // Tecla Esc fecha o modal
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    // Move o foco para dentro do modal ao abrir
    modalRef.current?.focus();
    return () => document.removeEventListener("keydown", handler);
  }, [open, close]);

  // Trap focus no modal
  useEffect(() => {
    if (!open || !modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [open]);

  const nodeTypeColor = (() => {
    if (node.type === "decision") return "#B45309";
    if (node.type === "final") return "#15803D";
    return themeColor;
  })();

  const depthIdx = depthOrder.indexOf(depth);
  const nextDepth = depthOrder[depthIdx + 1];
  const prevDepth = depthOrder[depthIdx - 1];

  return (
    <>
      {/* Card fechado — listado no fluxo */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-label={`Ver detalhes: ${node.titleSimple}`}
        className="w-full text-left p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1D4ED8] group"
      >
        <div className="flex items-start gap-3">
          <span
            className="flex items-center justify-center w-7 h-7 rounded-full text-white text-sm font-bold shrink-0 mt-0.5"
            style={{ backgroundColor: nodeTypeColor }}
            aria-hidden="true"
          >
            {index + 1}
          </span>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-[#1F2937] group-hover:text-[#1D4ED8] transition-colors">
              {node.titleSimple}
            </p>
            <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
              {node.summary30s || node.citizenExplanation}
            </p>
          </div>
          <span
            className="shrink-0 text-gray-400 group-hover:text-[#1D4ED8]"
            aria-hidden="true"
          >
            +
          </span>
        </div>
      </button>

      {/* Modal */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descId}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

          {/* Painel */}
          <div
            ref={modalRef}
            tabIndex={-1}
            className="relative w-full sm:max-w-2xl max-h-[90dvh] overflow-y-auto bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl outline-none"
          >
            {/* Header do modal */}
            <div
              className="sticky top-0 z-10 flex items-start justify-between gap-3 p-5 pb-4 border-b border-gray-100 bg-white"
              style={{ borderTop: `4px solid ${nodeTypeColor}` }}
            >
              <div>
                {node.type === "decision" && (
                  <p className="text-xs font-semibold text-[#B45309] mb-1 uppercase tracking-wide">
                    Decisao
                  </p>
                )}
                <h2 id={titleId} className="font-bold text-[#1F2937] text-lg">
                  {node.titleSimple}
                </h2>
                {node.titleTechnical && node.titleTechnical !== node.titleSimple && (
                  <p className="text-sm text-gray-500 mt-0.5">{node.titleTechnical}</p>
                )}
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Fechar"
                className="shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors -mr-1 -mt-1"
              >
                <span aria-hidden="true" className="text-2xl leading-none">×</span>
              </button>
            </div>

            {/* Seletor de nivel de profundidade */}
            <div className="px-5 pt-4 pb-2">
              <div role="group" aria-label="Nivel de detalhe" className="flex gap-2 flex-wrap">
                {depthOrder.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDepth(d)}
                    aria-pressed={depth === d}
                    className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors min-h-[32px] ${
                      depth === d
                        ? "text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                    style={depth === d ? { backgroundColor: nodeTypeColor } : {}}
                  >
                    {d === "simple" ? "30 segundos" : d === "citizen" ? "Explicacao cidada" : "Detalhe tecnico"}
                  </button>
                ))}
              </div>
            </div>

            {/* Conteudo por nivel */}
            <div id={descId} className="px-5 pb-5">
              {depth === "simple" && (
                <div>
                  <p className="text-base text-[#1F2937] leading-relaxed py-4">
                    {node.summary30s || node.citizenExplanation}
                  </p>
                  <p className="text-xs text-[#C2410C] font-medium">
                    Esta e uma explicacao educativa.
                  </p>
                </div>
              )}

              {depth === "citizen" && (
                <div className="py-4 space-y-4">
                  <p className="text-base text-[#1F2937] leading-relaxed">
                    {node.citizenExplanation}
                  </p>

                  {node.participants && node.participants.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700 mb-1">
                        Quem participa:
                      </h3>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-0.5">
                        {node.participants.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {node.possibleOutcomes && node.possibleOutcomes.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700 mb-1">
                        Proximos caminhos possiveis:
                      </h3>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-0.5">
                        {node.possibleOutcomes.map((o) => (
                          <li key={o}>{o}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {node.glossaryTerms && node.glossaryTerms.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700 mb-1">
                        Termos relacionados:
                      </h3>
                      <p className="text-sm text-gray-600">
                        {node.glossaryTerms.join(", ")}
                      </p>
                    </div>
                  )}
                  <p className="text-xs text-[#C2410C] font-medium">
                    Este caminho pode variar conforme o caso.
                  </p>
                </div>
              )}

              {depth === "technical" && (
                <div className="py-4 space-y-4">
                  <p className="text-base text-[#1F2937] leading-relaxed">
                    {node.technicalExplanation || node.citizenExplanation}
                  </p>
                  {node.legalReferences && node.legalReferences.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700 mb-1">
                        Referencias legais:
                      </h3>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-0.5">
                        {node.legalReferences.map((ref) => (
                          <li key={ref}>{ref}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <p className="text-xs text-[#C2410C] font-medium">
                    Este conteudo e educativo e pode variar conforme o caso.
                  </p>
                </div>
              )}

              {/* Navegacao entre niveis */}
              <div className="flex gap-2 pt-2 border-t border-gray-100 mt-4">
                {prevDepth && (
                  <button
                    type="button"
                    onClick={() => setDepth(prevDepth)}
                    className="text-sm text-gray-600 hover:text-[#1D4ED8] flex items-center gap-1 min-h-[44px] px-2"
                  >
                    <span aria-hidden="true">←</span>
                    {depthLabels[prevDepth].replace("Ver ", "")}
                  </button>
                )}
                <div className="flex-1" />
                {nextDepth && (
                  <button
                    type="button"
                    onClick={() => setDepth(nextDepth)}
                    className="text-sm font-medium hover:opacity-80 flex items-center gap-1 min-h-[44px] px-3 rounded-lg transition-colors"
                    style={{ color: nodeTypeColor }}
                  >
                    {depthLabels[nextDepth]}
                    <span aria-hidden="true">→</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
