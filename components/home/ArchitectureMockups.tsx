// Light-theme rebuilds of the original site's architecture mock-ups. All text is verbatim.
import { Zap } from "lucide-react";
import { media } from "@/lib/content/shared";

function Window({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-line bg-surface font-mono text-xs">
      <div className="flex h-10 items-center justify-between border-b border-line bg-subtle px-4">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
        </div>
        <span className="truncate px-3 text-[11px] text-muted">{title}</span>
        <span className="w-10" />
      </div>
      <div className="space-y-4 p-5">{children}</div>
    </div>
  );
}

const ok = "text-accent";
const tile = "rounded-lg border border-line bg-subtle";

function WhyTrace() {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- remote image from the original site
    <img
      src={`${media}/whytrace.webp`}
      alt="Why Trace - Unified browser tab agent workspace"
      className="w-full rounded-xl border border-line"
    />
  );
}

function RustHarness() {
  return (
    <Window title="Trace Rust Runtime · Benchmarks">
      <div className="space-y-2">
        <div className="flex justify-between text-muted">
          <span>Traditional Electron AI IDEs</span>
          <span className="font-medium text-[#b4532a]">1,850 MB</span>
        </div>
        <div className="h-2.5 overflow-hidden rounded-full bg-subtle">
          <div className="h-full w-[94%] rounded-full bg-[#d9a48c]" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-fg">
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-accent" />
            Trace (Native Rust Harness)
          </span>
          <span className={`font-medium ${ok}`}>42 MB</span>
        </div>
        <div className="h-2.5 overflow-hidden rounded-full bg-subtle">
          <div className="h-full w-[5%] rounded-full bg-accent" />
        </div>
      </div>
      <div className={`${tile} flex items-center justify-between gap-4 p-3 font-sans text-muted`}>
        <span>Runs local on Apple Silicon, Windows & Linux with zero battery drain.</span>
        <span className={`shrink-0 font-mono text-[10px] font-medium ${ok}`}>42MB ACTIVE</span>
      </div>
    </Window>
  );
}

function BlazingSpeed() {
  return (
    <Window title="Trace Efficiency & Execution · Telemetry">
      <div className="space-y-2 rounded-lg border border-accent/25 bg-accent/5 p-4">
        <div className="flex items-center justify-between">
          <span className={`flex items-center gap-2 font-medium ${ok}`}>
            <Zap className="size-4" aria-hidden />
            Prompt-to-Output Latency
          </span>
          <span className={`rounded bg-accent/10 px-2 py-0.5 text-[10px] font-medium ${ok}`}>~10ms</span>
        </div>
        <p className="font-sans text-muted">
          Lean core instructions, minimal context overhead, and concurrent agent execution.
        </p>
      </div>
      <div className={`${tile} space-y-1.5 p-3.5`}>
        <div className="flex justify-between text-fg">
          <span>$ trace bench --eval efficiency</span>
          <span className={`font-medium ${ok}`}>PASS</span>
        </div>
        <p className="text-muted">✓ Core instruction overhead: &lt; 1.2kb</p>
        <p className="text-muted">✓ Swarm process latency: 0.4ms</p>
        <p className={ok}>⚡ Total prompt-to-output cycle: ~10ms</p>
      </div>
    </Window>
  );
}

function DevTools() {
  const observers = ["Console Observer", "Network Interceptor", "DOM Tree Observer", "Memory Heap Watch"];
  return (
    <Window title="Trace DevTools Observer · Live Session">
      <div className="grid grid-cols-2 gap-2.5">
        {observers.map((o) => (
          <div key={o} className={`${tile} flex items-center justify-between gap-2 p-3`}>
            <span className="text-fg">{o}</span>
            <span className={`rounded bg-accent/10 px-1.5 py-0.5 text-[10px] font-medium ${ok}`}>Active</span>
          </div>
        ))}
      </div>
      <div className="space-y-1.5 rounded-lg border border-[#b4532a]/25 bg-[#b4532a]/5 p-3.5">
        <div className="flex justify-between">
          <span className="font-medium text-[#b4532a]">Auto-Correlated & Patched</span>
          <span className={`font-medium ${ok}`}>Verified in DOM</span>
        </div>
        <p className="font-sans text-muted">
          TypeError: Cannot read property &apos;pricing&apos; of undefined at Cart.tsx:32
        </p>
      </div>
    </Window>
  );
}

function MiniIde() {
  return (
    <Window title="trace-term · zsh & in-DOM editor">
      <div className={`${tile} space-y-2 p-4`}>
        <div className="flex items-center justify-between border-b border-line pb-2">
          <span className="flex items-center gap-2 text-fg">
            <span className="size-2 rounded-full bg-accent" />
            src/components/Checkout.tsx
          </span>
          <span className={`text-[10px] ${ok}`}>live in DOM</span>
        </div>
        <div className="space-y-1 pt-1 text-[12px] leading-relaxed">
          <p className="text-faint">18 | const handlePay = async () =&gt; {"{"}</p>
          <p className={`-mx-1.5 rounded bg-accent/10 px-1.5 py-0.5 ${ok}`}>
            + const result = await trace.dispatch({"{"} intent: &apos;charge&apos; {"}"});
          </p>
          <p className="text-faint">20 | setOrderComplete(true);</p>
        </div>
      </div>
      <div className={`${tile} space-y-1.5 p-4`}>
        <p className="flex gap-2">
          <span className={ok}>➜</span>
          <span className="font-medium text-fg">trace-term</span>
          <span className="text-muted">pnpm build &amp;&amp; pnpm test</span>
        </p>
        <p className={ok}>✓ 12 tests passed in 68ms</p>
        <p className="text-muted">Ready on http://localhost:3000 (hot reload active)</p>
      </div>
    </Window>
  );
}

function VisualEditor() {
  return (
    <Window title="Trace Visual Canvas · DOM Inspector">
      <div className="flex items-center justify-between rounded-lg border-2 border-accent/40 bg-accent/5 p-4 font-sans">
        <div>
          <p className="text-sm font-medium text-fg">Checkout CTA Banner</p>
          <p className="text-[11px] text-muted">Selected element: HeroCTA.tsx</p>
        </div>
        <span className="rounded bg-accent px-2.5 py-1 text-[11px] font-medium text-white">Auto Layout</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className={`${tile} p-2.5`}>
          <span className="block text-[9px] text-faint">Padding</span>
          <span className="font-medium text-fg">24px</span>
        </div>
        <div className={`${tile} p-2.5`}>
          <span className="block text-[9px] text-faint">Fill Color</span>
          <span className={`font-medium ${ok}`}>#059669</span>
        </div>
      </div>
      <code className={`block ${tile} p-2.5 ${ok}`}>+ p-6 rounded-xl bg-emerald-600 transition-all</code>
    </Window>
  );
}

function AnyModel() {
  const models = [
    { name: "GLM 5.3", desc: "High-Velocity Reasoning", active: true },
    { name: "Deepseek V4.1", desc: "Deep Code Intelligence" },
    { name: "Fable 5.1", desc: "Full-Stack Synthesis" },
    { name: "GPT Astra", desc: "Frontier Autonomy" },
  ];
  return (
    <Window title="Model Engine Selector · Trace Multi-Model">
      <div className="grid grid-cols-2 gap-3">
        {models.map((m) => (
          <div
            key={m.name}
            className={`space-y-1 rounded-lg border p-3.5 ${
              m.active ? "border-accent/40 bg-accent/5" : "border-line bg-subtle"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-fg">{m.name}</span>
              <span className={`text-[9px] ${m.active ? ok : "text-faint"}`}>{m.active ? "Active" : "Ready"}</span>
            </div>
            <span className="block text-[10px] text-muted">{m.desc}</span>
          </div>
        ))}
      </div>
      <div className={`${tile} flex items-center justify-between px-3.5 py-2.5`}>
        <span className="text-muted">
          <span className={ok}>$</span> trace switch --model &quot;glm-5.3&quot;
        </span>
        <span className={`text-[10px] font-medium ${ok}`}>Instant switch</span>
      </div>
    </Window>
  );
}

export const mockups: Record<string, () => React.ReactNode> = {
  "why-trace": WhyTrace,
  "rust-harness": RustHarness,
  "blazing-speed": BlazingSpeed,
  "devtools-integration": DevTools,
  "mini-ide-terminal": MiniIde,
  "visual-editor": VisualEditor,
  "any-model": AnyModel,
};
