import type { Metadata } from "next";
import { docs } from "@/lib/content/docs";
import { Button } from "@/components/ui/Button";
import { SectionPreview } from "@/components/docs/SectionPreview";

export const metadata: Metadata = { title: "Introduction | Trace Documentation" };

export default function DocsPage() {
  return (
    <article>
      <p className="text-sm text-faint">{docs.eyebrow}</p>
      <h1 className="mt-2 text-4xl font-medium tracking-[-0.03em]">{docs.title}</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">{docs.intro}</p>

      <div className="mt-8 flex flex-wrap gap-2">
        {docs.actions.map((a) => (
          <Button key={a.label} href={a.href}>
            {a.label}
          </Button>
        ))}
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        {docs.sections.map((s) => (
          <a
            key={s.title}
            href={s.href}
            className="rounded-xl border border-line bg-surface p-4 transition-colors duration-150 hover:border-line-strong hover:bg-subtle"
          >
            <SectionPreview kind={s.preview} />
            <h2 className="mt-4 font-medium">{s.title}</h2>
            <p className="mt-1 text-sm text-muted">{s.desc}</p>
          </a>
        ))}
      </div>

      <h2 className="mt-16 text-2xl font-medium tracking-[-0.02em]">{docs.fitsTogether.title}</h2>
      <ol className="mt-6 divide-y divide-line border-y border-line">
        {docs.fitsTogether.items.map((item) => (
          <li key={item.num} className="flex gap-6 py-6">
            <span className="font-mono text-sm text-faint">{item.num}</span>
            <div>
              <h3 className="font-medium">{item.title}</h3>
              <p className="mt-1.5 leading-relaxed text-muted">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}
