"use client";

import { useState, useRef, useId, useCallback } from "react";
import type { GlossaryTerm } from "@/lib/types";

interface GlossaryTooltipProps {
  term: string;
  glossaryTerm?: GlossaryTerm;
  children: React.ReactNode;
}

/**
 * Tooltip de glossario inline — PRD secao 27.
 * Abre por clique ou foco (nao hover, conforme PRD).
 * Fecha ao pressionar Esc ou clicar fora.
 * Retorna o foco ao elemento que abriu.
 */
export function GlossaryTooltip({ term, glossaryTerm, children }: GlossaryTooltipProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const tooltipId = useId();

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        e.preventDefault();
        close();
      }
    },
    [open, close]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent) => {
      // Fecha quando o foco sai completamente do conjunto trigger+panel
      if (
        !triggerRef.current?.contains(e.relatedTarget as Node) &&
        !panelRef.current?.contains(e.relatedTarget as Node)
      ) {
        setOpen(false);
      }
    },
    []
  );

  if (!glossaryTerm) {
    return <>{children}</>;
  }

  return (
    <span className="relative inline">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={tooltipId}
        aria-label={`Definicao: ${term}`}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        className="inline underline decoration-dotted decoration-[#1D4ED8] text-[#1D4ED8] cursor-pointer bg-transparent border-0 p-0 font-inherit text-inherit"
      >
        {children}
      </button>

      {open && (
        <div
          ref={panelRef}
          id={tooltipId}
          role="tooltip"
          aria-label={`Definicao de ${term}`}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          className="absolute z-50 bottom-full left-0 mb-2 w-72 max-w-[90vw] p-4 bg-white border border-gray-200 rounded-xl shadow-lg text-sm"
        >
          <div className="flex items-start justify-between gap-2 mb-2">
            <strong className="font-bold text-[#1F2937]">{glossaryTerm.term}</strong>
            <button
              type="button"
              onClick={close}
              aria-label="Fechar definicao"
              className="text-gray-400 hover:text-gray-700 shrink-0 min-h-[24px] min-w-[24px] flex items-center justify-center rounded"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <p className="text-gray-700 leading-relaxed">{glossaryTerm.simpleDefinition}</p>
          {glossaryTerm.example && (
            <p className="text-gray-500 italic mt-2 text-xs">{glossaryTerm.example}</p>
          )}
        </div>
      )}
    </span>
  );
}
