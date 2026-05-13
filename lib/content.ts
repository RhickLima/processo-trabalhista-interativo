/**
 * Funcoes auxiliares para carregar e consultar o conteudo JSON.
 * PRD secao 43 (RNF03): conteudo separado do codigo visual.
 */

import type { Subflow, SimulationState, GlossaryTerm } from "./types";
import subflowsData from "@/content/flows/subflows.json";
import simulationData from "@/content/simulation.json";
import glossaryData from "@/content/glossary.json";

// ============================================================
// Subfluxogramas
// ============================================================

/** Retorna todos os subfluxogramas em ordem. */
export function getAllSubflows(): Subflow[] {
  return [...subflowsData.subflows].sort((a, b) => a.order - b.order) as Subflow[];
}

/** Retorna um subfluxograma pelo slug. */
export function getSubflowBySlug(slug: string): Subflow | undefined {
  return subflowsData.subflows.find((f) => f.slug === slug) as Subflow | undefined;
}

/** Retorna os slugs de todos os subfluxogramas (usado em generateStaticParams). */
export function getAllSubflowSlugs(): string[] {
  return subflowsData.subflows.map((f) => f.slug);
}

// ============================================================
// Simulacao
// ============================================================

/** Retorna todos os estados da simulacao. */
export function getAllSimulationStates(): SimulationState[] {
  return simulationData.states as SimulationState[];
}

/** Retorna um estado pelo id. */
export function getSimulationStateById(id: string): SimulationState | undefined {
  return (simulationData.states as SimulationState[]).find((s) => s.id === id);
}

/** Retorna o estado inicial da simulacao. */
export function getInitialSimulationState(): SimulationState {
  const initial = getSimulationStateById("sim_inicio");
  if (!initial) throw new Error("Estado inicial da simulacao nao encontrado");
  return initial;
}

// ============================================================
// Glossario
// ============================================================

/** Retorna todos os termos do glossario em ordem alfabetica. */
export function getAllGlossaryTerms(): GlossaryTerm[] {
  return [...(glossaryData.terms as GlossaryTerm[])].sort((a, b) =>
    a.term.localeCompare(b.term, "pt-BR")
  );
}

/** Retorna um termo do glossario pelo nome exato. */
export function getGlossaryTermByName(term: string): GlossaryTerm | undefined {
  return (glossaryData.terms as GlossaryTerm[]).find(
    (t) => t.term.toLowerCase() === term.toLowerCase()
  );
}
