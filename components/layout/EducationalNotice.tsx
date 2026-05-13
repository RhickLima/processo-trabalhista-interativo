/**
 * EducationalNotice — Aviso educativo obrigatorio em todas as paginas.
 * PRD secao 10: "Material educativo. O fluxo pode variar conforme o caso.
 * Este conteudo nao substitui orientacao juridica."
 */
export function EducationalNotice() {
  return (
    <aside
      role="note"
      aria-label="Aviso educativo"
      className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-900"
    >
      <span aria-hidden="true" className="text-amber-600 text-lg leading-none shrink-0 mt-0.5">
        ⚠
      </span>
      <p className="leading-relaxed">
        <strong>Material educativo.</strong> O fluxo pode variar conforme o
        caso. Este conteudo nao substitui orientacao juridica.
      </p>
    </aside>
  );
}
