import Link from "next/link";
import { EducationalNotice } from "./EducationalNotice";

export function SiteFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <EducationalNotice />
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>Tribunal Regional do Trabalho da 18a Regiao (Goias)</p>
          <nav aria-label="Links do rodape">
            <ul className="flex gap-4 list-none m-0 p-0">
              <li>
                <Link href="/sobre" className="hover:text-gray-700 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/sobre#acessibilidade" className="hover:text-gray-700 transition-colors">
                  Acessibilidade
                </Link>
              </li>
              <li>
                <Link href="/sobre#privacidade" className="hover:text-gray-700 transition-colors">
                  Privacidade
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
