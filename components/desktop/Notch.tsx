"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { desktop } from "@/lib/content/desktop";

const { notch } = desktop;

// A MacBook-style notch that expands on hover (or tap) to show the Trace agent.
export function Notch() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    if (!open) return;
    const id = setInterval(() => setStatus((s) => (s + 1) % notch.status.length), 1600);
    return () => clearInterval(id);
  }, [open]);

  return (
    <div className="flex flex-col items-center">
      <motion.button
        type="button"
        layout
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => {
          setOpen(false);
          setStatus(0);
        }}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={`${notch.name} — ${notch.hint}`}
        transition={{ type: "spring", stiffness: 380, damping: 32 }}
        className={`overflow-hidden bg-[#0b0b0a] text-left text-white ${
          open ? "w-[340px] rounded-[22px] px-5 py-4" : "h-8 w-44 rounded-b-[14px]"
        }`}
        style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
      >
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, delay: 0.1 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{notch.name}</span>
                <span className="flex gap-1">
                  {[0, 1, 2, 3].map((i) => (
                    <motion.span
                      key={i}
                      className="size-1.5 rounded-full bg-[#4ade80]"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </span>
              </div>
              <p className="mt-2 font-mono text-xs text-white/70">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={status}
                    initial={{ opacity: 0, y: 3 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="inline-block"
                  >
                    {notch.status[status]}
                  </motion.span>
                </AnimatePresence>{" "}
                <span className="text-[#4ade80]">({notch.nodes})</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
      <p className={`mt-3 font-mono text-xs text-faint transition-opacity ${open ? "opacity-0" : ""}`}>
        {notch.hint}
      </p>
    </div>
  );
}
