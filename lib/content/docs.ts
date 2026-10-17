// /docs copy, verbatim from https://gettrace.dev/docs.
import { links } from "./shared";

export const docsPaths = {
  quickstart: "/docs/quickstart",
  features: "/docs/features/swarm",
  concepts: "/docs/concepts/workspaces",
  troubleshooting: "/docs/troubleshooting",
};

export const docs = {
  sidebar: [
    { label: "Overview", href: links.docs },
    { label: "Installation", href: docsPaths.quickstart },
    { label: "Features", href: docsPaths.features },
    { label: "Core Concepts", href: docsPaths.concepts },
    { label: "Troubleshooting", href: docsPaths.troubleshooting },
  ],
  search: "Search docs...",
  eyebrow: "Documentation",
  title: "Trace",
  intro:
    "A Chrome extension paired with a local coding agent. Describe what you want built or fixed, and Trace reads and edits your actual project files, runs commands, and shows you the result — without leaving the browser.",
  actions: [
    { label: "Quickstart", href: docsPaths.quickstart },
    { label: "Troubleshooting", href: docsPaths.troubleshooting },
    { label: "Join Discord", href: links.discord },
  ],
  sections: [
    {
      title: "Installation",
      desc: "Install the extension, connect the local agent, ship your first change",
      href: docsPaths.quickstart,
      preview: "install",
    },
    {
      title: "Features",
      desc: "Swarm Fleet, Canvas visual edit, and everything else Trace can do",
      href: docsPaths.features,
      preview: "swarm",
    },
    {
      title: "Core Concepts",
      desc: "Workspaces, projects, models, and reasoning effort",
      href: docsPaths.concepts,
      preview: "tree",
    },
    {
      title: "Troubleshooting",
      desc: "Connection errors, security warnings, and full resets",
      href: docsPaths.troubleshooting,
      preview: "status",
    },
  ],
  fitsTogether: {
    title: "How it fits together",
    items: [
      {
        num: "01",
        title: "The Chrome extension",
        body: "The side panel you chat with. It displays your conversation, model picker, file browser, and terminal directly docked beside whatever web app you are developing.",
      },
      {
        num: "02",
        title: "The local agent",
        body: "A small background program installed once on your computer. It reads your actual project files, executes terminal commands, and talks to AI models on the extension's behalf.",
      },
    ],
  },
} as const;
