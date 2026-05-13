/**
 * Testes do modulo de persistencia local.
 * PRD secao 22: estrategia de fallback em camadas.
 */

import { describe, it, expect, beforeEach, vi } from "vitest";

// Simula o ambiente do browser com localStorage mock
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] ?? null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key];
    }),
    clear: () => {
      store = {};
    },
  };
})();

// Substitui o global localStorage antes de importar o modulo
Object.defineProperty(globalThis, "localStorage", {
  value: localStorageMock,
  writable: true,
});

Object.defineProperty(globalThis, "sessionStorage", {
  value: localStorageMock,
  writable: true,
});

import {
  saveSimulationProgress,
  loadSimulationProgress,
  clearSimulationProgress,
  hasRecoverableProgress,
} from "../lib/storage";

import type { SimulationProgress } from "../lib/types";

const mockProgress: SimulationProgress = {
  currentStateId: "sim_reclamante_compareceu",
  history: [
    {
      stateId: "sim_inicio",
      chosenOption: "Comecar",
      impact: "A simulacao comeca.",
    },
  ],
  startedAt: "2025-05-13T10:00:00.000Z",
  completedAt: null,
};

describe("storage — saveSimulationProgress e loadSimulationProgress", () => {
  beforeEach(() => {
    localStorageMock.clear();
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
    localStorageMock.removeItem.mockClear();
  });

  it("deve salvar e recuperar o progresso corretamente", () => {
    saveSimulationProgress(mockProgress);
    const loaded = loadSimulationProgress();
    expect(loaded).toEqual(mockProgress);
  });

  it("deve retornar null quando nao ha progresso salvo", () => {
    const loaded = loadSimulationProgress();
    expect(loaded).toBeNull();
  });

  it("deve retornar null e limpar quando o JSON esta corrompido", () => {
    localStorageMock.setItem("trt18-sim-progress", "INVALID_JSON{{{");
    const loaded = loadSimulationProgress();
    expect(loaded).toBeNull();
  });
});

describe("storage — clearSimulationProgress", () => {
  beforeEach(() => {
    localStorageMock.clear();
  });

  it("deve remover o progresso salvo", () => {
    saveSimulationProgress(mockProgress);
    clearSimulationProgress();
    const loaded = loadSimulationProgress();
    expect(loaded).toBeNull();
  });
});

describe("storage — hasRecoverableProgress", () => {
  beforeEach(() => {
    localStorageMock.clear();
  });

  it("deve retornar false quando nao ha progresso", () => {
    expect(hasRecoverableProgress()).toBe(false);
  });

  it("deve retornar true quando ha progresso salvo", () => {
    saveSimulationProgress(mockProgress);
    expect(hasRecoverableProgress()).toBe(true);
  });
});
