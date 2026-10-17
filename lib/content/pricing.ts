// /pricing copy, verbatim from https://gettrace.dev/pricing.

export const pricing = {
  eyebrow: "ON-DEMAND COMPUTE:",
  title: "Zero subscriptions. Pay only for what you build.",
  subtitle: "Pay as you go.",
  intro:
    "No monthly lock-in, no tiers, and no wasted spend. Top up credits when you need them, stack balances freely, and power your local coding agents with any LLM in the world.",
  calculator: {
    title: "Credit Calculator",
    sub: "Transparent, predictable compute pricing",
    rate: "$1 = 30 Credits",
    creditsPerDollar: 30,
    inputLabel: "Top-Up Amount (USD)",
    limits: "Minimum top-up is $5 • Max $2,000 per order",
    min: 5,
    max: 2000,
    presets: [
      { label: "$5", value: 5 },
      { label: "$25", value: 25 },
      { label: "$50", value: 50 },
      { label: "$100+", value: 100 },
    ],
    popularTitle: "Popular Top-Up Amounts",
    popular: [5, 10, 25, 50, 100],
    notes: ["No recurring charges", "Instant balance activation"],
  },
  summary: {
    title: "Deposit Summary",
    badge: "No Expiry",
    totalLabel: "Total Credits Received",
    investment: "for an investment of",
    // [bold lead, rest]
    perks: [
      ["Every frontier LLM included", ": Claude Sonnet/Opus/Fable, Gemini 3, GPT Sol"],
      ["Credits never expire", " — keep them until you use them"],
      ["Full access to", " Swarm Fleet multi-agent & Visual Canvas"],
      ["No recurring subscriptions", " — pay only for what you build"],
    ],
    checkout: "Instant checkout via Razorpay • Cards, UPI, Netbanking",
  },
  faq: {
    title: "Frequently Asked Questions",
    sub: "Clear answers about on-demand billing, balances, and model compute.",
    items: [
      {
        q: "How does Pay As You Go work?",
        a: "You only purchase credits when you need them. There is no recurring monthly subscription, no minimum commitment, and no surprise renewals on your card.",
      },
      {
        q: "Do my credits ever expire?",
        a: "No. Trace credits never expire. They remain in your balance indefinitely until you use them for agent tasks.",
      },
      {
        q: "What AI models can I use with credits?",
        a: "Purchasing credits unlocks every frontier model available in Trace: Claude Sonnet / Opus / Fable, Gemini 3 (all models), GPT Sol, DeepSeek R1, Llama, and more.",
      },
      {
        q: "How do credits stack?",
        a: "Every top-up adds directly to your existing balance. If you have 200 credits remaining and buy 750 credits, your new balance is 950 credits.",
      },
      {
        q: "How are credits deducted?",
        a: "Credits are deducted dynamically based on the actual model compute and tokens consumed by your task. Faster, cheaper models use fewer credits, while frontier reasoning models use more.",
      },
    ],
  },
};
