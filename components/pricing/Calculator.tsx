"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { pricing } from "@/lib/content/pricing";
import { links } from "@/lib/content/shared";
import { buttonClass } from "@/components/ui/Button";

const { calculator: calc, summary } = pricing;
const fmt = (n: number) => n.toLocaleString("en-US");

export function Calculator() {
  const [input, setInput] = useState("5");
  const raw = Number(input) || 0;
  const amount = Math.min(calc.max, Math.max(calc.min, Math.floor(raw)));
  const credits = amount * calc.creditsPerDollar;
  const outOfRange = raw < calc.min || raw > calc.max;

  return (
    <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
      {/* Calculator */}
      <div className="rounded-xl border border-line bg-surface p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-medium">{calc.title}</h2>
            <p className="mt-1 text-sm text-muted">{calc.sub}</p>
          </div>
          <span className="rounded-md bg-subtle px-2 py-1 font-mono text-xs text-muted">{calc.rate}</span>
        </div>

        <label htmlFor="amount" className="mt-8 block text-sm text-muted">
          {calc.inputLabel}
        </label>
        <div className="mt-2 flex items-center rounded-lg border border-line bg-bg px-3 focus-within:border-line-strong">
          <span className="text-muted">$</span>
          <input
            id="amount"
            inputMode="numeric"
            value={input}
            onChange={(e) => setInput(e.target.value.replace(/[^\d]/g, ""))}
            className="w-full bg-transparent px-2 py-3 text-lg outline-none"
          />
        </div>
        <p className={`mt-2 text-xs ${outOfRange ? "text-[#b4532a]" : "text-faint"}`}>{calc.limits}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {calc.presets.map((p) => (
            <button
              key={p.label}
              onClick={() => setInput(String(p.value))}
              className={`${buttonClass} py-1.5 ${amount === p.value ? "border-line-strong bg-subtle" : ""}`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <h3 className="mt-10 text-sm text-muted">{calc.popularTitle}</h3>
        <ul className="mt-3 divide-y divide-line border-y border-line">
          {calc.popular.map((usd) => (
            <li key={usd}>
              <button
                onClick={() => setInput(String(usd))}
                className="flex w-full items-center justify-between py-2.5 text-sm transition-colors hover:text-accent"
              >
                <span>${usd}</span>
                <span className="font-mono text-muted">{fmt(usd * calc.creditsPerDollar)} CR</span>
              </button>
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {calc.notes.map((n) => (
            <li key={n} className="flex items-center gap-1.5">
              <Check className="size-4 text-accent" aria-hidden />
              {n}
            </li>
          ))}
        </ul>
      </div>

      {/* Deposit summary */}
      <div className="flex flex-col rounded-xl border border-line bg-subtle p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">{summary.title}</h2>
          <span className="rounded-md border border-line bg-surface px-2 py-0.5 text-xs text-muted">
            {summary.badge}
          </span>
        </div>

        <p className="mt-8 text-sm text-muted">{summary.totalLabel}</p>
        <p className="mt-1 text-5xl font-medium tracking-tight tabular-nums">
          {fmt(credits)} <span className="text-lg text-muted">credits</span>
        </p>
        <p className="mt-2 text-sm text-muted">
          {summary.investment} <span className="text-fg">${fmt(amount)} USD</span>
        </p>

        <ul className="mt-8 space-y-3 text-sm">
          {summary.perks.map(([lead, rest]) => (
            <li key={lead} className="flex gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
              <span className="text-muted">
                <span className="text-fg">{lead}</span>
                {rest}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-8">
          <a href={links.webApp} target="_blank" rel="noreferrer" className={`${buttonClass} w-full py-3`}>
            Top Up ${fmt(amount)} Credits
          </a>
          <p className="mt-3 text-center text-xs text-faint">{summary.checkout}</p>
        </div>
      </div>
    </div>
  );
}
