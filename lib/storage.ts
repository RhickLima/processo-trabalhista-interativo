/**
 * Wrapper de storage com fallback em camadas.
 * PRD secao 22.1: localStorage → sessionStorage → memoria (melhor esforco)
 *
 * Todo acesso a localStorage e sessionStorage deve ser feito por este modulo.
 * Nunca acessar diretamente nos componentes.
 */

import type { SimulationProgress } from "./types";

const SIMULATION_KEY = "trt18-sim-progress";

// Storage em memoria como fallback final
const memoryStore: Record<string, string> = {};

/** Tenta gravar em localStorage, depois sessionStorage, depois memoria. */
function safeSet(key: string, value: string): void {
  // Camada 1: localStorage
  try {
    localStorage.setItem(key, value);
    return;
  } catch {
    // QuotaExceededError em iOS Safari modo privado, ou storage desabilitado
  }

  // Camada 2: sessionStorage
  try {
    sessionStorage.setItem(key, value);
    return;
  } catch {
    // sessionStorage tambem indisponivel
  }

  // Camada 3: memoria (sem persistencia entre sessoes)
  memoryStore[key] = value;
}

/** Tenta ler de localStorage, depois sessionStorage, depois memoria. Retorna null se nao encontrar. */
function safeGet(key: string): string | null {
  // Camada 1: localStorage
  try {
    const value = localStorage.getItem(key);
    if (value !== null) return value;
  } catch {
    // ignorar
  }

  // Camada 2: sessionStorage
  try {
    const value = sessionStorage.getItem(key);
    if (value !== null) return value;
  } catch {
    // ignorar
  }

  // Camada 3: memoria
  return memoryStore[key] ?? null;
}

/** Remove de todas as camadas. */
function safeRemove(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch {
    // ignorar
  }

  try {
    sessionStorage.removeItem(key);
  } catch {
    // ignorar
  }

  delete memoryStore[key];
}

// ============================================================
// API publica — Progresso da simulacao
// ============================================================

/** Salva o progresso atual da simulacao. */
export function saveSimulationProgress(progress: SimulationProgress): void {
  try {
    safeSet(SIMULATION_KEY, JSON.stringify(progress));
  } catch {
    // Se a serializacao falhar, nao interrompe a simulacao
  }
}

/** Recupera o progresso salvo. Retorna null se nao houver ou se estiver corrompido. */
export function loadSimulationProgress(): SimulationProgress | null {
  const raw = safeGet(SIMULATION_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as SimulationProgress;
  } catch {
    // JSON corrompido — descarta silenciosamente
    safeRemove(SIMULATION_KEY);
    return null;
  }
}

/** Remove o progresso salvo (ao reiniciar ou concluir). */
export function clearSimulationProgress(): void {
  safeRemove(SIMULATION_KEY);
}

/** Verifica se ha progresso recuperavel (para exibir prompt "continuar de onde parou" — PRD secao 33.7). */
export function hasRecoverableProgress(): boolean {
  return loadSimulationProgress() !== null;
}
