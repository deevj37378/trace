import { DocsShell } from "@/components/docs/DocsShell";

export default function DocsLayout({ children }: LayoutProps<"/docs">) {
  return (
    <div className="px-6">
      <DocsShell>{children}</DocsShell>
    </div>
  );
}
