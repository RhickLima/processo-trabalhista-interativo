"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type { SimulationState, SimulationProgress } from "@/lib/types";
import {
  saveSimulationProgress,
  loadSimulationProgress,
  clearSimulationProgress,
  hasRecoverableProgress,
} from "@/lib/storage";

interface SimulationEngineProps {
  states: SimulationState[];
  initialStateId: string;
}

const TOTAL_DECISION_STATES = 8; // numero aproximado de estados de decisao

const outcomeLabels: Record<string, string> = {
  arquivamento: "Arquivamento",
  "acordo-inicial": "Acordo na audiencia inicial",
  "acordo-final": "Acordo antes da sentenca",
  "sentenca-sem-recurso": "Sentenca sem recurso",
  "sentenca-com-recurso": "Sentenca com recurso",
  "execucao-espontanea": "Execucao com cumprimento voluntario",
  "execucao-forcada": "Execucao com medidas forcadas",
};

const outcomeDescriptions: Record<string, string> = {
  arquivamento:
    "O processo foi arquivado porque o reclamante nao compareceu a audiencia. Em geral, o processo pode ser reapresentado dentro do prazo legal, conforme o caso.",
  "acordo-inicial":
    "O processo foi encerrado por acordo logo na audiencia inicial. O acordo homologado encerra o processo sem necessidade de sentenca.",
  "acordo-final":
    "As partes chegaram a um acordo antes da sentenca. A lei trabalhista incentiva a resolucao do conflito por acordo em qualquer fase do processo.",
  "sentenca-sem-recurso":
    "O juiz proferiu sentenca e nenhuma parte recorreu. A decisao transitou em julgado e foi cumprida.",
  "sentenca-com-recurso":
    "O processo passou pelo Tribunal apos recurso. A decisao foi analisada e o processo chegou a um resultado definitivo.",
  "execucao-espontanea":
    "A parte obrigada cumpriu a decisao voluntariamente. Este e o desfecho mais rapido da fase de execucao.",
  "execucao-forcada":
    "A parte obrigada nao cumpriu voluntariamente e medidas de execucao foram adotadas para garantir o cumprimento.",
};

export function SimulationEngine({ states, initialStateId }: SimulationEngineProps) {
  const [currentStateId, setCurrentStateId] = useState(initialStateId);
  const [history, setHistory] = useState<SimulationProgress["history"]>([]);
  const [helpOpen, setHelpOpen] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [savedProgress, setSavedProgress] = useState<SimulationProgress | null>(null);
  const helpCloseRef = useRef<HTMLButtonElement | null>(null);
  const helpTriggerRef = useRef<HTMLButtonElement | null>(null);

  // Verifica progresso salvo na primeira carga
  useEffect(() => {
    if (hasRecoverableProgress()) {
      const prog = loadSimulationProgress();
      if (prog && prog.currentStateId !== initialStateId) {
        setSavedProgress(prog);
        setShowResume(true);
      }
    }
  }, [initialStateId]);

  const currentState = states.find((s) => s.id === currentStateId);

  // Calcula progresso para a barra
  const decisionStateIds = states
    .filter((s) => s.type === "decision")
    .map((s) => s.id);
  const decisionsAnswered = history.filter((h) =>
    decisionStateIds.includes(h.stateId)
  ).length;
  const progressPct = Math.min(
    Math.round((decisionsAnswered / TOTAL_DECISION_STATES) * 100),
    100
  );
  const isFinal = currentState?.type === "final";

  // Persiste progresso
  useEffect(() => {
    if (isFinal) {
      clearSimulationProgress();
      return;
    }
    saveSimulationProgress({
      currentStateId,
      history,
      startedAt: history.length === 0 ? new Date().toISOString() : (loadSimulationProgress()?.startedAt ?? new Date().toISOString()),
      completedAt: null,
    });
  }, [currentStateId, history, isFinal]);

  const handleOption = useCallback(
    (option: { label: string; next: string; impact: string }) => {
      setHistory((prev) => [
        ...prev,
        {
          stateId: currentStateId,
          chosenOption: option.label,
          impact: option.impact,
        },
      ]);
      setCurrentStateId(option.next);
      setHelpOpen(false);
      // Scroll para o topo da simulacao ao avancar
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [currentStateId]
  );

  const handleBack = useCallback(() => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setHistory((h) => h.slice(0, -1));
    setCurrentStateId(prev.stateId);
    setHelpOpen(false);
  }, [history]);

  const handleRestart = useCallback(() => {
    clearSimulationProgress();
    setCurrentStateId(initialStateId);
    setHistory([]);
    setHelpOpen(false);
    setShowResume(false);
  }, [initialStateId]);

  const handleResume = useCallback(() => {
    if (savedProgress) {
      setCurrentStateId(savedProgress.currentStateId);
      setHistory(savedProgress.history);
    }
    setShowResume(false);
  }, [savedProgress]);

  // Fecha help com Esc
  useEffect(() => {
    if (!helpOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setHelpOpen(false);
        helpTriggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handler);
    helpCloseRef.current?.focus();
    return () => document.removeEventListener("keydown", handler);
  }, [helpOpen]);

  if (!currentState) {
    return (
      <div className="p-8 text-center text-gray-500">
        Estado da simulacao nao encontrado.
      </div>
    );
  }

  // Prompt de retomada
  if (showResume) {
    return (
      <div className="max-w-xl mx-auto">
        <div className="p-6 bg-blue-50 border-2 border-[#1D4ED8] rounded-2xl text-center">
          <h2 className="text-xl font-bold text-[#1F2937] mb-3">
            Continuar de onde parou?
          </h2>
          <p className="text-gray-600 mb-6">
            Voce tem uma simulacao em andamento. Deseja continuar ou comecar
            uma nova?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={handleResume}
              className="inline-flex items-center justify-center px-6 py-3 bg-[#1D4ED8] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors min-h-[44px]"
            >
              Continuar
            </button>
            <button
              type="button"
              onClick={() => { clearSimulationProgress(); setShowResume(false); }}
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors min-h-[44px]"
            >
              Comecar nova simulacao
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      {/* Barra de progresso */}
      {!isFinal && currentState.type !== "info" && (
        <div className="mb-6" role="progressbar" aria-valuenow={progressPct} aria-valuemin={0} aria-valuemax={100} aria-label="Progresso da simulacao">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Progresso</span>
            <span>{progressPct}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#1D4ED8] rounded-full transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      )}

      {/* Card principal */}
      <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden">
        {/* Header do card */}
        <div
          className={`px-6 pt-6 pb-4 ${
            isFinal
              ? ""
              : currentState.type === "info"
              ? "bg-blue-50"
              : "bg-white"
          }`}
          style={
            isFinal && currentState.outcomeColor
              ? { borderTop: `6px solid ${currentState.outcomeColor}` }
              : {}
          }
        >
          {isFinal && currentState.outcome && (
            <p
              className="text-sm font-semibold uppercase tracking-wide mb-2"
              style={{ color: currentState.outcomeColor ?? "#4B5563" }}
            >
              Desfecho: {outcomeLabels[currentState.outcome] ?? currentState.outcome}
            </p>
          )}
          {currentState.type === "decision" && (
            <p className="text-xs font-semibold text-[#B45309] uppercase tracking-wide mb-2">
              Decisao
            </p>
          )}
          <h2 className="text-xl font-bold text-[#1F2937] leading-snug">
            {currentState.question}
          </h2>
        </div>

        {/* Contexto */}
        <div className="px-6 py-4 border-t border-gray-100">
          <p className="text-gray-700 leading-relaxed text-sm">
            {currentState.context}
          </p>
          {isFinal && currentState.explanation && (
            <p className="text-gray-700 leading-relaxed text-sm mt-3">
              {outcomeDescriptions[currentState.outcome ?? ""] ??
                currentState.explanation}
            </p>
          )}
          {isFinal && (
            <p className="text-xs text-[#C2410C] font-medium mt-3">
              Esta e uma explicacao educativa. O fluxo pode variar conforme o caso.
            </p>
          )}
        </div>

        {/* Opcoes */}
        <div className="px-6 pb-6 space-y-3">
          {currentState.options.map((option) => (
            <button
              key={option.label}
              type="button"
              onClick={() => handleOption(option)}
              className={`w-full text-left px-5 py-3 rounded-xl font-medium transition-all min-h-[52px] ${
                isFinal
                  ? "bg-[#1D4ED8] text-white hover:bg-blue-700"
                  : currentState.type === "info"
                  ? "bg-[#1D4ED8] text-white hover:bg-blue-700"
                  : "bg-gray-50 text-[#1F2937] border-2 border-gray-200 hover:border-[#1D4ED8] hover:bg-blue-50"
              }`}
            >
              {option.label}
            </button>
          ))}

          {/* Botao "Nao sei" — so aparece quando ha helpContent */}
          {currentState.helpContent && !helpOpen && (
            <button
              ref={helpTriggerRef}
              type="button"
              onClick={() => setHelpOpen(true)}
              className="w-full text-center text-sm text-gray-500 hover:text-[#1D4ED8] py-2 underline min-h-[44px] transition-colors"
            >
              Nao sei
            </button>
          )}
        </div>
      </div>

      {/* Painel "Nao sei" / Help */}
      {helpOpen && currentState.helpContent && (
        <div
          role="region"
          aria-label="Explicacao: nao sei"
          className="mt-4 p-5 bg-amber-50 border border-amber-200 rounded-2xl"
        >
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="font-bold text-[#1F2937]">
              {currentState.helpContent.title}
            </h3>
            <button
              ref={helpCloseRef}
              type="button"
              onClick={() => {
                setHelpOpen(false);
                helpTriggerRef.current?.focus();
              }}
              aria-label="Fechar explicacao"
              className="text-gray-400 hover:text-gray-700 min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0 rounded -mr-2 -mt-1"
            >
              <span aria-hidden="true" className="text-xl">×</span>
            </button>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            {currentState.helpContent.explanation}
          </p>
          {currentState.helpContent.consequence && (
            <p className="text-sm text-[#B45309] font-medium leading-relaxed mb-3">
              {currentState.helpContent.consequence}
            </p>
          )}
          {currentState.helpContent.glossaryTerms.length > 0 && (
            <p className="text-xs text-gray-500">
              Termos do glossario:{" "}
              {currentState.helpContent.glossaryTerms.join(", ")}
            </p>
          )}
        </div>
      )}

      {/* Historico e controles de navegacao */}
      {!isFinal && (
        <div className="flex gap-3 mt-4">
          {history.length > 0 && (
            <button
              type="button"
              onClick={handleBack}
              className="flex-1 sm:flex-none px-5 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors min-h-[44px]"
            >
              Voltar
            </button>
          )}
          <button
            type="button"
            onClick={handleRestart}
            className="flex-1 sm:flex-none px-5 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors min-h-[44px]"
          >
            Reiniciar simulacao
          </button>
        </div>
      )}

      {/* Historico de decisoes */}
      {history.length > 0 && !isFinal && (
        <details className="mt-4 border border-gray-200 rounded-xl overflow-hidden">
          <summary className="px-4 py-3 bg-gray-50 text-sm font-medium text-gray-600 cursor-pointer hover:bg-gray-100 transition-colors list-none flex items-center justify-between min-h-[44px]">
            <span>Decisoes tomadas ({history.length})</span>
            <span aria-hidden="true" className="text-gray-400">▼</span>
          </summary>
          <ol className="p-4 space-y-2 text-sm text-gray-600">
            {history.map((h, i) => (
              <li key={i} className="flex gap-2">
                <span className="font-medium text-gray-400 shrink-0">{i + 1}.</span>
                <span>
                  <span className="font-medium text-gray-700">{h.chosenOption}</span>
                  {" — "}
                  <span className="text-gray-500">{h.impact}</span>
                </span>
              </li>
            ))}
          </ol>
        </details>
      )}
    </div>
  );
}
