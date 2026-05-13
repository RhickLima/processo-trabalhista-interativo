/**
 * Testes de validacao de schema dos JSONs de conteudo.
 * PRD secao 49.6: campos ausentes ou com tipo errado quebram componentes em runtime.
 *
 * Cobertura minima obrigatoria:
 * - todo no em master.json e subflows.json tem id, titleSimple, citizenExplanation e textAlternative
 * - todo termo em glossary.json tem term, simpleDefinition e relatedTerms
 * - todo estado em simulation.json tem id, type, question e options com ao menos uma entrada
 * - IDs sao unicos dentro de cada arquivo
 */

import { describe, it, expect } from "vitest";
import masterData from "../content/flows/master.json";
import subflowsData from "../content/flows/subflows.json";
import simulationData from "../content/simulation.json";
import glossaryData from "../content/glossary.json";

// ============================================================
// master.json
// ============================================================

describe("master.json — validacao de schema (PRD secao 49.6)", () => {
  const allNodes = masterData.blocks.flatMap((b) => b.nodes);

  it("deve ter pelo menos um bloco", () => {
    expect(masterData.blocks.length).toBeGreaterThan(0);
  });

  it("cada bloco deve ter id, order e title", () => {
    for (const block of masterData.blocks) {
      expect(block.id, `Bloco sem id`).toBeTruthy();
      expect(block.order, `Bloco ${block.id} sem order`).toBeDefined();
      expect(block.title, `Bloco ${block.id} sem title`).toBeTruthy();
    }
  });

  it("todo no em master.json deve ter id, titleSimple, citizenExplanation e textAlternative", () => {
    for (const node of allNodes) {
      expect(node.id, `No sem id`).toBeTruthy();
      expect(
        node.titleSimple,
        `No ${node.id} sem titleSimple`
      ).toBeTruthy();
      expect(
        node.citizenExplanation,
        `No ${node.id} sem citizenExplanation`
      ).toBeTruthy();
      expect(
        node.textAlternative,
        `No ${node.id} sem textAlternative`
      ).toBeTruthy();
    }
  });

  it("IDs de nos em master.json devem ser unicos", () => {
    const ids = allNodes.map((n) => n.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});

// ============================================================
// subflows.json
// ============================================================

describe("subflows.json — validacao de schema (PRD secao 49.6)", () => {
  const subflows = subflowsData.subflows;
  const allNodes = subflows.flatMap((sf) => sf.nodes);

  it("deve ter exatamente 8 subfluxogramas (PRD secao 20)", () => {
    expect(subflows.length).toBe(8);
  });

  it("cada subfluxograma deve ter id, slug, order, title e subtitle", () => {
    for (const sf of subflows) {
      expect(sf.id, `Subflow sem id`).toBeTruthy();
      expect(sf.slug, `Subflow ${sf.id} sem slug`).toBeTruthy();
      expect(sf.order, `Subflow ${sf.id} sem order`).toBeDefined();
      expect(sf.title, `Subflow ${sf.id} sem title`).toBeTruthy();
      expect(sf.subtitle, `Subflow ${sf.id} sem subtitle`).toBeTruthy();
    }
  });

  it("todo no em subflows.json deve ter id, titleSimple, citizenExplanation e textAlternative", () => {
    for (const node of allNodes) {
      expect(node.id, `No sem id`).toBeTruthy();
      expect(
        node.titleSimple,
        `No ${node.id} sem titleSimple`
      ).toBeTruthy();
      expect(
        node.citizenExplanation,
        `No ${node.id} sem citizenExplanation`
      ).toBeTruthy();
      expect(
        node.textAlternative,
        `No ${node.id} sem textAlternative`
      ).toBeTruthy();
    }
  });

  it("IDs de nos em subflows.json devem ser unicos por subfluxograma", () => {
    for (const sf of subflows) {
      const ids = sf.nodes.map((n) => n.id);
      const uniqueIds = new Set(ids);
      expect(
        uniqueIds.size,
        `Subfluxograma ${sf.id} tem IDs duplicados nos nos`
      ).toBe(ids.length);
    }
  });

  it("os slugs devem ser unicos entre subfluxogramas", () => {
    const slugs = subflows.map((sf) => sf.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it("os 8 slugs obrigatorios devem estar presentes (PRD secao 17)", () => {
    const expectedSlugs = [
      "inicio-e-peticao-inicial",
      "notificacao-do-reclamado",
      "audiencia-inicial",
      "defesa-e-contestacao",
      "provas-e-instrucao",
      "sentenca",
      "recurso-trabalhista",
      "liquidacao-e-execucao",
    ];
    const actualSlugs = subflows.map((sf) => sf.slug);
    for (const slug of expectedSlugs) {
      expect(
        actualSlugs,
        `Slug obrigatorio '${slug}' nao encontrado em subflows.json`
      ).toContain(slug);
    }
  });

  it("cada subfluxograma deve ter textAlternative como array", () => {
    for (const sf of subflows) {
      expect(
        Array.isArray(sf.textAlternative),
        `Subfluxograma ${sf.id}: textAlternative nao e array`
      ).toBe(true);
      expect(
        sf.textAlternative.length,
        `Subfluxograma ${sf.id}: textAlternative vazio`
      ).toBeGreaterThan(0);
    }
  });
});

// ============================================================
// glossary.json
// ============================================================

describe("glossary.json — validacao de schema (PRD secao 49.6)", () => {
  const terms = glossaryData.terms;

  it("deve ter os termos obrigatorios do PRD secao 27", () => {
    const requiredTerms = [
      "Reclamacao trabalhista",
      "Reclamante",
      "Reclamado",
      "Peticao inicial",
      "Distribuicao",
      "Notificacao",
      "Audiencia",
      "Conciliacao",
      "Acordo homologado",
      "Arquivamento",
      "Revelia",
      "Defesa",
      "Contestacao",
      "Instrucao",
      "Provas",
      "Testemunha",
      "Pericia",
      "Laudo pericial",
      "Alegacoes finais",
      "Sentenca",
      "Procedente",
      "Improcedente",
      "Parcialmente procedente",
      "Recurso",
      "Contrarrazoes",
      "Tribunal",
      "Transito em julgado",
      "Liquidacao",
      "Execucao",
      "Pagamento espontaneo",
      "Medidas de execucao",
      "Encerramento",
    ];

    const actualTerms = terms.map((t) => t.term);
    for (const required of requiredTerms) {
      expect(
        actualTerms,
        `Termo obrigatorio '${required}' nao encontrado no glossario`
      ).toContain(required);
    }
  });

  it("todo termo deve ter term, simpleDefinition e relatedTerms (PRD secao 49.6)", () => {
    for (const term of terms) {
      expect(term.term, `Termo sem 'term'`).toBeTruthy();
      expect(
        term.simpleDefinition,
        `Termo '${term.term}' sem simpleDefinition`
      ).toBeTruthy();
      expect(
        Array.isArray(term.relatedTerms),
        `Termo '${term.term}' sem relatedTerms como array`
      ).toBe(true);
    }
  });

  it("IDs (terms) devem ser unicos no glossario", () => {
    const termNames = terms.map((t) => t.term);
    const uniqueTerms = new Set(termNames);
    expect(uniqueTerms.size).toBe(termNames.length);
  });
});

// ============================================================
// simulation.json
// ============================================================

describe("simulation.json — validacao de schema (PRD secao 49.6)", () => {
  const states = simulationData.states;

  it("todo estado deve ter id, type, question e options com ao menos uma entrada", () => {
    for (const state of states) {
      expect(state.id, `Estado sem id`).toBeTruthy();
      expect(state.type, `Estado ${state.id} sem type`).toBeTruthy();
      expect(state.question, `Estado ${state.id} sem question`).toBeTruthy();
      expect(
        Array.isArray(state.options) && state.options.length >= 1,
        `Estado ${state.id} deve ter options com ao menos uma entrada`
      ).toBe(true);
    }
  });

  it("IDs devem ser unicos em simulation.json", () => {
    const ids = states.map((s) => s.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});
