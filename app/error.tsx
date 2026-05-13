"use client";

import { useEffect } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

/**
 * Error boundary global — PRD secao 33.4
 * Nao exibe mensagens tecnicas ao usuario.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Registra no console para depuracao — nunca exibe ao usuario (PRD secao 33.4)
    console.error("[App Error]", error);
  }, [error]);

  return (
    <>
      <SiteHeader />

      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="max-w-md text-center">
          <p className="text-5xl mb-4 text-[#C2410C] font-bold" aria-hidden="true">
            !
          </p>
          <h1 className="text-2xl font-bold text-[#1F2937] mb-3">
            Algo deu errado
          </h1>
          <p className="text-gray-600 mb-8">
            Tente novamente ou volte ao inicio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center px-6 py-3 bg-[#1D4ED8] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors min-h-[44px]"
            >
              Tentar novamente
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors min-h-[44px]"
            >
              Voltar ao inicio
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
