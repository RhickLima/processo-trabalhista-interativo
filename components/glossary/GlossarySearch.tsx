"use client";

import { useState, useId } from "react";
import type { GlossaryTerm } from "@/lib/types";

interface GlossarySearchProps {
  terms: GlossaryTerm[];
}

function termSlug(term: string) {
  return term
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, "-");
}

/**
 * Glossario interativo com busca acessivel, navegacao por letra,
 * definicao tecnica expansivel e termos relacionados como links.
 * PRD secao 27.
 */
export function GlossarySearch({ terms }: GlossarySearchProps) {
  const [query, setQuery] = useState("");
  const [expandedTerms, setExpandedTerms] = useState<Set<string>>(new Set());
  const searchId = useId();
  const resultsId = useId();

  const filtered =
    query.trim().length >= 2
      ? terms.filter(
          (t) =>
            t.term.toLowerCase().includes(query.toLowerCase()) ||
            t.simpleDefinition.toLowerCase().includes(query.toLowerCase())
        )
      : terms;

  // Agrupa por letra inicial (da lista filtrada)
  const byLetter = filtered.reduce<Record<string, GlossaryTerm[]>>(
    (acc, term) => {
      const letter = term.term.charAt(0).toUpperCase();
      if (!acc[letter]) acc[letter] = [];
      acc[letter].push(term);
      return acc;
    },
    {}
  );
  const sortedLetters = Object.keys(byLetter).sort();

  const toggleExpand = (term: string) => {
    setExpandedTerms((prev) => {
      const next = new Set(prev);
      if (next.has(term)) {
        next.delete(term);
      } else {
        next.add(term);
      }
      return next;
    });
  };

  return (
    <div>
      {/* Campo de busca com label visivel */}
      <div className="mb-8">
        <label
          htmlFor={searchId}
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Buscar termo juridico
        </label>
        <div className="relative">
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-controls={resultsId}
            aria-label="Buscar no glossario"
            placeholder="Ex: audiencia, recurso, sentenca"
            className="w-full px-4 py-3 pl-10 border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:border-[#1D4ED8] focus:outline-none transition-colors min-h-[48px]"
          />
          <span
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            aria-hidden="true"
          >
            &#x2315;
          </span>
        </div>
        {query.trim().length >= 2 && (
          <p
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="text-sm text-gray-500 mt-2"
          >
            {filtered.length === 0
              ? "Nenhum termo encontrado."
              : `${filtered.length} ${filtered.length === 1 ? "termo encontrado" : "termos encontrados"}.`}
          </p>
        )}
      </div>

      {/* Navegacao por letra — oculta durante busca */}
      {query.trim().length < 2 && (
        <nav aria-label="Navegar pelo glossario por letra" className="mb-8">
          <ul className="flex flex-wrap gap-2 list-none m-0 p-0">
            {sortedLetters.map((letter) => (
              <li key={letter}>
                <a
                  href={`#letra-${letter}`}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-[#1D4ED8] hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
                  aria-label={`Ir para letra ${letter}`}
                >
                  {letter}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Lista de termos */}
      <div id={resultsId} aria-label="Resultados do glossario">
        {filtered.length === 0 ? (
          <p className="text-gray-500 py-8 text-center">
            Nenhum termo encontrado para "{query}".
          </p>
        ) : (
          <div className="space-y-10">
            {sortedLetters.map((letter) => (
              <section
                key={letter}
                aria-labelledby={`letra-${letter}`}
              >
                {query.trim().length < 2 && (
                  <h2
                    id={`letra-${letter}`}
                    className="text-xl font-bold text-[#1D4ED8] mb-4 pb-2 border-b-2 border-blue-100"
                  >
                    {letter}
                  </h2>
                )}
                <dl className="space-y-4">
                  {byLetter[letter].map((term) => {
                    const slug = termSlug(term.term);
                    const isExpanded = expandedTerms.has(term.term);
                    return (
                      <div
                        key={term.term}
                        id={slug}
                        className="p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-colors"
                      >
                        <dt className="font-bold text-[#1F2937] text-lg mb-1">
                          {term.term}
                        </dt>
                        <dd className="text-gray-700 mb-2 leading-relaxed">
                          {term.simpleDefinition}
                        </dd>
                        {term.example && (
                          <dd className="text-sm text-gray-500 italic mb-2">
                            {term.example}
                          </dd>
                        )}

                        {/* Definicao tecnica expansivel */}
                        {term.technicalDefinition && (
                          <dd className="mb-2">
                            <button
                              type="button"
                              onClick={() => toggleExpand(term.term)}
                              aria-expanded={isExpanded}
                              aria-controls={`tech-${slug}`}
                              className="text-sm font-medium text-[#1D4ED8] hover:underline flex items-center gap-1 min-h-[36px]"
                            >
                              {isExpanded
                                ? "Ocultar definicao tecnica"
                                : "Ver definicao tecnica"}
                              <span aria-hidden="true">
                                {isExpanded ? "▲" : "▼"}
                              </span>
                            </button>
                            {isExpanded && (
                              <div
                                id={`tech-${slug}`}
                                className="mt-2 p-3 bg-gray-50 rounded-lg border border-gray-100"
                              >
                                <p className="text-sm text-gray-700 leading-relaxed">
                                  {term.technicalDefinition}
                                </p>
                              </div>
                            )}
                          </dd>
                        )}

                        {/* Termos relacionados como links */}
                        {term.relatedTerms && term.relatedTerms.length > 0 && (
                          <dd className="text-sm text-gray-500 flex flex-wrap items-center gap-1">
                            <span className="font-medium text-gray-600">
                              Termos relacionados:
                            </span>
                            {term.relatedTerms.map((related, i) => (
                              <span key={related}>
                                <a
                                  href={`#${termSlug(related)}`}
                                  className="text-[#1D4ED8] hover:underline"
                                >
                                  {related}
                                </a>
                                {i < term.relatedTerms.length - 1 && (
                                  <span aria-hidden="true">, </span>
                                )}
                              </span>
                            ))}
                          </dd>
                        )}
                      </div>
                    );
                  })}
                </dl>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
