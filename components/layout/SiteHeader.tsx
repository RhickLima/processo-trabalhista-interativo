"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/mapa-do-processo", label: "Mapa" },
  { href: "/simulacao", label: "Simulacao" },
  { href: "/glossario", label: "Glossario" },
  { href: "/sobre", label: "Sobre" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-[#1D4ED8] font-bold text-lg leading-tight">
              TRT 18°
            </span>
            <span className="hidden sm:block text-gray-400" aria-hidden="true">|</span>
            <span className="hidden sm:block text-gray-700 text-sm font-medium">
              Processo Trabalhista
            </span>
          </Link>
          <nav aria-label="Navegacao principal">
            <ul className="flex items-center gap-1 sm:gap-2 list-none m-0 p-0">
              {navItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`px-3 py-2 rounded text-sm transition-colors min-h-[44px] inline-flex items-center ${
                        isActive
                          ? "bg-blue-50 text-[#1D4ED8] font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
