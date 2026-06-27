export default function Container({ children, className = "", wide = false }) {
  return (
    <div
      className={`mx-auto px-6 md:px-10 ${wide ? "max-w-6xl" : "max-w-4xl"} ${className}`}
    >
      {children}
    </div>
  );
}
