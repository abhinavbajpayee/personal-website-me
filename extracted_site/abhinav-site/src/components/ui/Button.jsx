import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 whitespace-nowrap";

const variants = {
  primary:
    "bg-ink text-void hover:bg-amber-soft hover:scale-[1.02]",
  secondary:
    "glass text-ink hover:border-current-soft hover:scale-[1.02]",
  ghost:
    "text-ink-muted hover:text-ink",
};

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  className = "",
  ...props
}) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cls} {...props}>
      {children}
    </button>
  );
}
