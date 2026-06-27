export default function Eyebrow({ children, accent = "ink" }) {
  const colors = {
    ink: "text-ink-muted",
    current: "text-current-soft",
    amber: "text-amber-soft",
  };

  return (
    <div className="flex items-center gap-2.5 mb-4">
      <span className={`block w-1.5 h-1.5 rounded-full ${
        accent === "current" ? "bg-current-accent" :
        accent === "amber" ? "bg-amber-accent" :
        "bg-ink-faint"
      }`} />
      <span className={`eyebrow ${colors[accent]}`}>{children}</span>
    </div>
  );
}
