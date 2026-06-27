import { motion } from "framer-motion";
import Container from "./Container";
import Eyebrow from "./Eyebrow";

export default function PageHeader({ eyebrow, accent = "ink", title, description }) {
  return (
    <Container className="pt-36 pb-16 md:pt-44 md:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {eyebrow && <Eyebrow accent={accent}>{eyebrow}</Eyebrow>}
        <h1 className="font-display text-4xl md:text-6xl text-balance leading-[1.08]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-lg text-ink-muted max-w-2xl">
            {description}
          </p>
        )}
      </motion.div>
    </Container>
  );
}
