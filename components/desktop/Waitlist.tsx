"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { desktop } from "@/lib/content/desktop";
import { buttonClass } from "@/components/ui/Button";

const { waitlist } = desktop;

// Demo only: validates the email locally and shows the success message; nothing is sent.
export function Waitlist() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "invalid" | "done">("idle");

  const close = () => {
    setOpen(false);
    setState("idle");
    setEmail("");
  };

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={`${buttonClass} px-6 py-2.5`}>
        {waitlist.cta}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-fg/20 px-6"
            onClick={close}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="waitlist-title"
              initial={{ y: 8 }}
              animate={{ y: 0 }}
              exit={{ y: 8 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm rounded-xl border border-line bg-surface p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 id="waitlist-title" className="font-medium">
                  {waitlist.cta}
                </h2>
                <button onClick={close} aria-label="Close" className="-m-1 p-1 text-muted hover:text-fg">
                  <X className="size-4" />
                </button>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{waitlist.description}</p>

              {state === "done" ? (
                <p className="mt-6 text-sm text-accent">{waitlist.success}</p>
              ) : (
                <form
                  noValidate
                  className="mt-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setState(/^\S+@\S+\.\S+$/.test(email) ? "done" : "invalid");
                  }}
                >
                  <input
                    type="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    aria-invalid={state === "invalid"}
                    className="w-full rounded-lg border border-line bg-bg px-3 py-2.5 text-sm outline-none focus:border-line-strong"
                  />
                  {state === "invalid" && <p className="mt-2 text-xs text-[#b4532a]">{waitlist.invalid}</p>}
                  <button type="submit" className={`${buttonClass} mt-4 w-full py-2.5`}>
                    {waitlist.cta}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
