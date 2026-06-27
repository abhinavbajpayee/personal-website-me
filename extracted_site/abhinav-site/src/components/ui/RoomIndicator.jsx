import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { rooms } from "../../data/content";

export default function RoomIndicator({ className = "" }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % rooms.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`flex items-center gap-2.5 font-mono text-xs tracking-wide ${className}`}>
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-current-accent opacity-75 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-current-accent" />
      </span>
      <span className="text-ink-muted">Currently in:</span>
      <span className="relative inline-block h-4 overflow-hidden" style={{ minWidth: "9.5ch" }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={rooms[index]}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute left-0 top-0 text-ink whitespace-nowrap"
          >
            {rooms[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </div>
  );
}
