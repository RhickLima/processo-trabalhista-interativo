/**
 * Testes de transicoes de estado da simulacao.
 * PRD secao 49.6: cobertura obrigatoria de todos os caminhos da arvore de decisao.
 *
 * Cobertura minima obrigatoria:
 * - cada transicao "next" referencia um estado que existe
 * - todos os 7 finais sao alcancaveis a partir de sim_inicio
 * - nenhum estado de decisao tem "options" vazio
 * - estados com helpContent tem todos os campos obrigatorios
 */

import { describe, it, expect } from "vitest";
import simulationData from "../content/simulation.json";

type SimState = (typeof simulationData.states)[number];

const states = simulationData.states;
const stateIds = new Set(states.map((s) => s.id));

// IDs dos 7 finais obrigatorios — PRD secao 23
const REQUIRED_FINALS = [
  "final_arquivamento",
  "final_acordo_inicial",
  "final_acordo_final",
  "final_sentenca_sem_recurso",
  "final_sentenca_com_recurso",
  "final_execucao_espontanea",
  "final_execucao_forcada",
] as const;

// Constroi grafo de transicoes
function buildGraph(states: SimState[]): Map<string, string[]> {
  const graph = new Map<string, string[]>();
  for (const state of states) {
    const nexts = state.options.map((o) => o.next);
    graph.set(state.id, nexts);
  }
  return graph;
}

// BFS a partir de um no de origem
function reachableFrom(graph: Map<string, string[]>, startId: string): Set<string> {
  const visited = new Set<string>();
  const queue = [startId];
  while (queue.length > 0) {
    const current = queue.shift()!;
    if (visited.has(current)) continue;
    visited.add(current);
    const nexts = graph.get(current) ?? [];
    for (const next of nexts) {
      if (!visited.has(next)) {
        queue.push(next);
      }
    }
  }
  return visited;
}

describe("Simulacao — validacao de schema e estrutura", () => {
  it("deve ter pelo menos um estado", () => {
    expect(states.length).toBeGreaterThan(0);
  });

  it("deve conter o estado inicial sim_inicio", () => {
    expect(stateIds.has("sim_inicio")).toBe(true);
  });

  it("cada estado deve ter id, type, question e options (PRD secao 49.6)", () => {
    for (const state of states) {
      expect(state.id, `Estado sem id`).toBeTruthy();
      expect(state.type, `Estado ${state.id} sem type`).toBeTruthy();
      expect(state.question, `Estado ${state.id} sem question`).toBeTruthy();
      expect(
        Array.isArray(state.options),
        `Estado ${state.id} sem options`
      ).toBe(true);
    }
  });

  it("nenhum estado de decisao deve ter options vazio (PRD secao 49.6)", () => {
    const decisionStates = states.filter((s) => s.type === "decision");
    for (const state of decisionStates) {
      expect(
        state.options.length,
        `Estado de decisao ${state.id} tem options vazio`
      ).toBeGreaterThan(0);
    }
  });

  it("IDs devem ser unicos dentro do arquivo (PRD secao 49.6)", () => {
    const ids = states.map((s) => s.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});

describe("Simulacao — transicoes de estado (PRD secao 49.6)", () => {
  it("cada transicao 'next' deve referenciar um estado existente", () => {
    for (const state of states) {
      for (const option of state.options) {
        expect(
          stateIds.has(option.next),
          `Estado ${state.id}: opcao '${option.label}' aponta para '${option.next}' que nao existe`
        ).toBe(true);
      }
    }
  });

  it("cada opcao deve ter label e impact definidos", () => {
    for (const state of states) {
      for (const option of state.options) {
        expect(
          option.label,
          `Estado ${state.id}: opcao sem label`
        ).toBeTruthy();
        expect(
          option.impact,
          `Estado ${state.id}: opcao '${option.label}' sem impact`
        ).toBeTruthy();
      }
    }
  });
});

describe("Simulacao — alcancabilidade dos 7 finais (PRD secao 49.6)", () => {
  const graph = buildGraph(states);
  const reachable = reachableFrom(graph, "sim_inicio");

  it.each(REQUIRED_FINALS)(
    "final '%s' deve ser alcancavel a partir de sim_inicio",
    (finalId) => {
      expect(
        reachable.has(finalId),
        `Final '${finalId}' nao e alcancavel a partir de sim_inicio`
      ).toBe(true);
    }
  );

  it("todos os estados finais devem ter type 'final'", () => {
    for (const finalId of REQUIRED_FINALS) {
      const state = states.find((s) => s.id === finalId);
      expect(state, `Estado final '${finalId}' nao encontrado`).toBeDefined();
      expect(
        state?.type,
        `Estado '${finalId}' deveria ter type 'final'`
      ).toBe("final");
    }
  });
});

describe("Simulacao — helpContent (PRD secao 49.6)", () => {
  const statesWithHelp = states.filter(
    (s): s is SimState & { helpContent: NonNullable<SimState["helpContent"]> } =>
      "helpContent" in s && s.helpContent != null
  );

  it("estados com helpContent devem ter title, explanation e consequence", () => {
    for (const state of statesWithHelp) {
      const help = state.helpContent;
      expect(
        help.title,
        `Estado ${state.id}: helpContent sem title`
      ).toBeTruthy();
      expect(
        help.explanation,
        `Estado ${state.id}: helpContent sem explanation`
      ).toBeTruthy();
      expect(
        help.consequence,
        `Estado ${state.id}: helpContent sem consequence`
      ).toBeTruthy();
    }
  });

  it("estados com helpContent devem ter glossaryTerms como array", () => {
    for (const state of statesWithHelp) {
      expect(
        Array.isArray(state.helpContent.glossaryTerms),
        `Estado ${state.id}: helpContent.glossaryTerms nao e array`
      ).toBe(true);
    }
  });
});
