/**
 * Tipos TypeScript do dominio — Processo Trabalhista Interativo (TRT 18°)
 * Refletem o modelo de dados do PRD secoes 21 e 34.
 */

// ============================================================
// Fluxograma
// ============================================================

/** Status de revisao de conteudo — PRD secao 35.4 */
export type ReviewStatus =
  | "draft"
  | "em revisao juridica"
  | "em revisao editorial"
  | "aprovado"
  | "publicado"
  | "arquivado";

/** Nivel de risco do conteudo — PRD secao 11 */
export type RiskLevel = "low" | "medium" | "high";

/** Tipo de no no fluxograma */
export type NodeType = "step" | "decision" | "final" | "info";

/** Tipo de aresta no fluxograma */
export type EdgeType = "positive" | "negative" | "neutral";

/** No do fluxograma — PRD secao 34 */
export interface FlowNode {
  id: string;
  type: NodeType;
  titleSimple: string;
  titleTechnical?: string;
  summary30s?: string;
  citizenExplanation: string;
  technicalExplanation?: string;
  participants?: string[];
  possibleOutcomes?: string[];
  glossaryTerms?: string[];
  legalReferences?: string[];
  videoRef?: string | null;
  riskLevel?: RiskLevel;
  reviewStatus: ReviewStatus;
  lastReviewedAt: string | null;
  reviewedBy: string | null;
  textAlternative: string;
}

/** Aresta (conexao) do fluxograma — PRD secao 34 */
export interface FlowEdge {
  from: string;
  to: string;
  label: string;
  type: EdgeType;
  explanation: string;
}

/** Subfluxograma — PRD secao 20 */
export interface Subflow {
  id: string;
  slug: string;
  order: number;
  title: string;
  subtitle: string;
  description: string;
  theme: string;
  themeColor: string;
  reviewStatus: ReviewStatus;
  lastReviewedAt: string | null;
  reviewedBy: string | null;
  nodes: FlowNode[];
  edges: FlowEdge[];
  textAlternative: string[];
}

// ============================================================
// Simulacao
// ============================================================

/** Tipo de estado da simulacao — PRD secao 21.3 */
export type SimulationStateType = "decision" | "info" | "final";

/** Opcao de resposta da simulacao */
export interface SimulationOption {
  label: string;
  next: string;
  impact: string;
}

/** Conteudo de ajuda ("Nao sei") — PRD secao 21.3 */
export interface HelpContent {
  title: string;
  explanation: string;
  consequence: string;
  glossaryTerms: string[];
}

/** Estado da simulacao — PRD secao 21.3 */
export interface SimulationState {
  id: string;
  type: SimulationStateType;
  question: string;
  context: string;
  helpContent?: HelpContent;
  outcome?: string;
  outcomeColor?: string;
  explanation?: string;
  options: SimulationOption[];
}

// ============================================================
// Glossario
// ============================================================

/** Termo do glossario — PRD secao 27 */
export interface GlossaryTerm {
  term: string;
  simpleDefinition: string;
  technicalDefinition?: string;
  example?: string;
  relatedTerms: string[];
}

// ============================================================
// Estado local da simulacao (persistencia)
// ============================================================

/**
 * Estado salvo localmente da simulacao.
 * PRD secao 22: persistencia em camadas (localStorage → sessionStorage → memoria)
 */
export interface SimulationProgress {
  currentStateId: string;
  history: Array<{
    stateId: string;
    chosenOption: string;
    impact: string;
  }>;
  startedAt: string;
  completedAt: string | null;
}
