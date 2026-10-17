import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { docs, docsPaths } from "@/lib/content/docs";
import { links } from "@/lib/content/shared";

// Subpages aren't part of this demo yet; each shows a placeholder.
export function generateStaticParams() {
  return Object.values(docsPaths).map((path) => ({ slug: path.replace("/docs/", "").split("/") }));
}

export const metadata: Metadata = { title: "Trace Documentation" };

export default async function DocsSubpage({ params }: PageProps<"/docs/[...slug]">) {
  const { slug } = await params;
  const href = `/docs/${slug.join("/")}`;
  const page = docs.sidebar.find((s) => s.href === href);
  if (!page) notFound();
  const title = page.label;

  return (
    <article>
      <p className="text-sm text-faint">{docs.eyebrow}</p>
      <h1 className="mt-2 text-4xl font-medium tracking-[-0.03em]">{title}</h1>
      <p className="mt-4 text-lg text-muted">Coming soon in this demo.</p>
      <a href={links.docs} className="mt-8 inline-block text-sm text-accent hover:underline">
        ← Back to Overview
      </a>
    </article>
  );
}
