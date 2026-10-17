"use client";

import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { docs } from "@/lib/content/docs";

// Sidebar + reading column shared by every /docs route.
export function DocsShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="mx-auto flex max-w-6xl gap-12 py-12 sm:py-16">
      <aside className="hidden w-52 shrink-0 md:block">
        <div className="sticky top-24">
          <div className="flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 text-sm text-faint">
            <Search className="size-4" aria-hidden />
            <span className="flex-1">{docs.search}</span>
            <kbd className="font-mono text-[11px]">⌘K</kbd>
          </div>
          <ul className="mt-6 space-y-0.5">
            {docs.sidebar.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`block rounded-md px-3 py-1.5 text-sm transition-colors ${
                    pathname === item.href ? "bg-subtle text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <div className="min-w-0 max-w-3xl flex-1">{children}</div>
    </div>
  );
}
