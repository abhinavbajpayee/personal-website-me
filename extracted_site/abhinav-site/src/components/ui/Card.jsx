import { motion } from "framer-motion";

export default function Card({ children, className = "", hover = true, as = "div", ...props }) {
  const Comp = motion[as] || motion.div;

  return (
    <Comp
      className={`glass rounded-2xl p-6 md:p-8 ${
        hover ? "transition-colors duration-300 hover:border-hairline-strong" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}
