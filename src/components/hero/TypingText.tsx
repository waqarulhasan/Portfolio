"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/** Types and deletes each word in turn, like a terminal. The first word renders on the server. */
export function TypingText({ words, className }: { words: string[]; className?: string }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0] ?? "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce || words.length < 2) return;
    const word = words[index];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting) {
      t =
        text.length < word.length
          ? setTimeout(() => setText(word.slice(0, text.length + 1)), 70)
          : setTimeout(() => setDeleting(true), 1800);
    } else {
      t =
        text.length > 0
          ? setTimeout(() => setText(text.slice(0, -1)), 35)
          : setTimeout(() => {
              setDeleting(false);
              setIndex((i) => (i + 1) % words.length);
            }, 300);
    }
    return () => clearTimeout(t);
  }, [text, deleting, index, words, reduce]);

  return (
    <span className={className}>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden>
        {text}
        <span className="ml-1 inline-block w-[3px] animate-blink rounded-full bg-brand-cyan align-[-0.12em]" style={{ height: "0.95em" }} />
      </span>
    </span>
  );
}
