export default function EmptyState({ title, body }) {
  return (
    <div className="glass rounded-2xl p-10 md:p-14 text-center border-dashed">
      <p className="font-display text-xl text-ink mb-2">{title}</p>
      <p className="text-sm text-ink-muted max-w-md mx-auto leading-relaxed">{body}</p>
    </div>
  );
}
