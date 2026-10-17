// Small illustrations for the docs section cards, using the original's own text.
export function SectionPreview({ kind }: { kind: "install" | "swarm" | "tree" | "status" }) {
  const box = "flex h-28 flex-col justify-center rounded-lg border border-line bg-subtle px-4 font-mono text-xs";

  if (kind === "install")
    return (
      <div className={box}>
        <p className="text-muted">$ curl -fsSL .../install.sh | bash</p>
        <p className="mt-1.5 text-accent">✓ Agent installed</p>
      </div>
    );

  if (kind === "swarm")
    return (
      <div className={`${box} items-center gap-3`}>
        <div className="flex gap-2">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="size-2.5 rounded-full border border-line-strong bg-surface" />
          ))}
        </div>
        <p className="text-muted">Swarm Fleet</p>
      </div>
    );

  if (kind === "tree")
    return (
      <div className={box}>
        <p className="text-muted">greenfield</p>
        <p className="pl-4 text-muted">landing-page</p>
        <p className="pl-8 text-fg">src</p>
      </div>
    );

  return (
    <div className={box}>
      <p className="text-faint line-through">High demand — retrying…</p>
      <p className="mt-1.5 flex items-center gap-1.5 text-accent">
        <span className="size-1.5 rounded-full bg-accent" />
        Connected
      </p>
    </div>
  );
}
