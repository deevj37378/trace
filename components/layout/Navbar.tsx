"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { links, nav } from "@/lib/content/shared";
import { Logo } from "@/components/ui/Logo";
import { buttonClass } from "@/components/ui/Button";

function NewBadge() {
  return (
    <span className="rounded border border-accent/25 px-1 font-mono text-[10px] leading-4 text-accent">new</span>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => href !== "/" && pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-bg/95 px-6 transition-colors duration-200 ${
        scrolled || open ? "border-line" : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between">
        <div className="flex items-center gap-8">
          <a href={links.home} aria-label="Trace home">
            <Logo />
          </a>
          <ul className="hidden items-center gap-6 md:flex">
            {nav.items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`flex items-center gap-1.5 text-sm transition-colors hover:text-fg ${
                    isActive(item.href) ? "text-fg" : "text-muted"
                  }`}
                >
                  {item.label}
                  {item.isNew && <NewBadge />}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <a href={nav.login.href} className="text-sm text-muted transition-colors hover:text-fg">
            {nav.login.label}
          </a>
          <a href={nav.cta.href} target="_blank" rel="noreferrer" className={`${buttonClass} py-1.5`}>
            {nav.cta.label}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={open}
          className="-mr-2 p-2 text-fg md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden md:hidden"
          >
            <ul className="pb-4">
              {[...nav.items, nav.login].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 border-b border-line py-3 text-fg"
                  >
                    {item.label}
                    {"isNew" in item && item.isNew && <NewBadge />}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a href={nav.cta.href} className={`${buttonClass} w-full`}>
                  {nav.cta.label}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
