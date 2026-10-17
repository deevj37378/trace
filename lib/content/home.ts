// Homepage copy, verbatim from https://gettrace.dev.
// In paragraphs, **double asterisks** mark phrases the original underlines.
import { links, media } from "./shared";

export const hero = {
  eyebrow: "Full-Stack Browser Agent",
  title: ["Your workspace is the browser.", "Your agent should be too."],
  description:
    "Trace is the full-stack AI agent built into your browser. Build apps, drag & drop to edit visually, debug live runtimes, and automate workflows — all in one place.",
  options: [
    {
      icon: "chrome",
      label: "Chrome Extension",
      sub: "Full-stack agent in your browser side panel",
      href: links.chromeExtension,
    },
    {
      icon: "globe",
      label: "Web App",
      sub: "Browser-native canvas & dev workspace",
      href: links.webApp,
    },
  ],
  local: { text: "Instant in browser or local", link: "Mac Notch", href: links.desktop },
  proof: { count: "100+", text: "builders already using Trace" },
} as const;

export const inAction = {
  title: "Trace in Action",
  tabs: [
    {
      id: "pixel-pointer",
      title: "Pixel Pointer",
      desc: "Point, inspect and edit UI elements in real-time",
      src: `${media}/vid-stream.mp4`,
      poster: `${media}/vid-poster.webp`,
    },
    {
      id: "trace-canvas",
      title: "Trace Canvas",
      desc: "Infinite visual canvas workspace for browser agent tasks",
      src: `${media}/showcase/edit-stream.mp4`,
      poster: `${media}/showcase/edit-poster.webp`,
    },
    {
      id: "mini-ide",
      title: "Mini IDE / Terminal",
      desc: "Full browser IDE & terminal without switching context",
      src: `${media}/showcase/miniide-stream.mp4`,
      poster: `${media}/showcase/miniide-poster.webp`,
    },
  ],
};

export type ArchitectureSlide = {
  id: string;
  num: string;
  tabLabel: string;
  tag: string;
  headline: string;
  paragraphs: string[];
  kicker?: string;
};

export const architecture = {
  num: "03",
  label: "Architecture",
  scrollHint: "Scroll to explore architecture",
  docsLabel: "Read the Documentation",
  slides: [
    {
      id: "why-trace",
      num: "01",
      tabLabel: "Why Trace",
      tag: "THE ARCHITECTURE",
      headline: "Why Trace?",
      paragraphs: [
        "Trace is a minimal agent harness. Adapt Trace to your web workflows, not the other way around. Attach directly to live runtimes via **CDP**, inspect **DOM mutations**, and stream **network telemetry**. Debug directly where your code actually executes.",
        "Trace ships with powerful defaults—compiled in native Rust for sub-millisecond hot reload and a 42 MB memory footprint. Ask Trace to build, test, and patch UI components without leaving your active tab.",
        "Four components: interactive agent, in-DOM editor, real terminal, and DevTools observer. See **Documentation** for real-world setups.",
      ],
    },
    {
      id: "rust-harness",
      num: "02",
      tabLabel: "Rust Harness",
      tag: "NATIVE ENGINE",
      headline: "Harness built for browser-native coding agents",
      paragraphs: [
        "Trace harness is powerful because it’s built as a lightweight, highly optimized coding-agent harness. It uses very little memory, so it can run many agents in parallel as a **swarm**.",
        "Agents can keep working on tasks in the background, **verify their changes**, remember context, and retry when needed instead of stopping after one attempt. It also benchmarks and optimizes its own performance—and interestingly, Trace can **modify, rebuild, test, and reload itself**.",
      ],
      kicker: "Rust native agentic horsepower, now wired directly into the browser runtime.",
    },
    {
      id: "blazing-speed",
      num: "03",
      tabLabel: "Blazing Speed",
      tag: "EXECUTION SPEED",
      headline: "Insanely fast and token efficient",
      paragraphs: [
        "Trace is insanely fast because its Rust-native harness is built for **low overhead**, **parallel execution**, and **token efficiency**.",
        "It keeps its core instructions extremely lean, minimizes unnecessary context, and can run multiple agents concurrently without the usual process overhead.",
      ],
      kicker:
        "The result is a coding agent that feels fast not just at execution, but at using every token efficiently.",
    },
    {
      id: "devtools-integration",
      num: "04",
      tabLabel: "DevTools",
      tag: "DEEP OBSERVABILITY",
      headline: "An agent on every DevTools panel",
      paragraphs: [
        "Trace connects directly to Chrome DevTools Protocol (**CDP**), giving the agent native access to the running browser. It can inspect **live DOM trees**, read computed styles, intercept **network requests**, and capture **console exceptions**.",
        "Instead of guessing why an element broke or an API failed, the agent extracts rich context straight from the active runtime—auto-correlating errors directly to source lines and validating fixes in the DOM.",
      ],
      kicker:
        "Live DOM context, network payloads, console streams, and performance metrics—streamed directly into the agent.",
    },
    {
      id: "mini-ide-terminal",
      num: "05",
      tabLabel: "Mini IDE & Term",
      tag: "IN-TAB ENVIRONMENT",
      headline: "Native terminal and IDE in your browser tab",
      paragraphs: [
        "Trace embeds a full code editor and a real PTY terminal directly into your browser tab. Write code, execute **shell commands**, run package managers, and trigger database migrations right where your application lives.",
        "No more constant switching between external editors, terminal windows, and browser tabs. You and your agent can inspect **live file diffs**, run unit tests, and patch code without ever leaving your viewport.",
      ],
      kicker: "A complete developer workspace unified inside a single, zero-latency tab.",
    },
    {
      id: "visual-editor",
      num: "06",
      tabLabel: "Visual Editor",
      tag: "DESIGN & CODE",
      headline: "Edit any live website like Figma, synced straight to code",
      paragraphs: [
        "Trace features a real Figma-like visual editor that lets you literally edit any website visually. Point and click on any live element to tweak **spacing**, typography, and **colors** with intuitive visual controls.",
        "Through Trace’s direct **DOM-to-code pipeline**, every visual tweak is instantly converted into clean, production-ready code in your project. No manual style rewriting, no messy CSS diffs.",
      ],
      kicker: "True bidirectional sync between your visual viewport and your codebase.",
    },
    {
      id: "any-model",
      num: "07",
      tabLabel: "Any Model",
      tag: "MODEL AGNOSTIC",
      headline: "Use any model in the world!",
      paragraphs: [
        "In Trace, you can use any model you want—literally any. Switch effortlessly between leading models like **GLM 5.3**, **Deepseek V4.1**, **Fable 5.1**, and **GPT Astra**.",
        "Trace provides native multi-model support out of the box with zero vendor lock-in. Route prompts dynamically to whatever model fits your workflow.",
      ],
      kicker: "Switch models instantly right inside your active browser workspace.",
    },
  ] satisfies ArchitectureSlide[],
};

export const quote = {
  text: "What limits you with coding agents is your own skill at stringing them together, not the capability of the models.",
  author: "Andrej Karpathy",
};

export const supporters = {
  title: "Guided and Supported.",
  items: [
    { role: "Mentors", name: "Google" },
    { role: "Mentors", name: "Microsoft" },
    { role: "Talent", name: "Newton School" },
  ],
};
