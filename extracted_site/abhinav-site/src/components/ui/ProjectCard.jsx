import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Card from "./Card";
import Reveal from "./Reveal";

export default function ProjectCard({ project, index = 0 }) {
  const { title, subtitle, period, stack, problem, objective, approach, impact, links } = project;

  return (
    <Reveal delay={Math.min(index * 0.08, 0.3)}>
      <Card className="overflow-hidden">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
          <div>
            <h3 className="font-display text-2xl text-ink">{title}</h3>
            <p className="text-sm text-ink-muted mt-1">{subtitle}</p>
          </div>
          <span className="font-mono text-xs text-ink-faint whitespace-nowrap">{period}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {stack.map((s) => (
            <span
              key={s}
              className="font-mono text-xs px-2.5 py-1 rounded-full bg-current-dim text-current-soft"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-5 text-sm">
          <div>
            <p className="eyebrow mb-1.5">Problem</p>
            <p className="text-ink-muted leading-relaxed">{problem}</p>
          </div>
          <div>
            <p className="eyebrow mb-1.5">Objective</p>
            <p className="text-ink-muted leading-relaxed">{objective}</p>
          </div>
          <div>
            <p className="eyebrow mb-1.5">Approach</p>
            <p className="text-ink-muted leading-relaxed">{approach}</p>
          </div>
          <div>
            <p className="eyebrow text-amber-soft mb-1.5">Impact</p>
            <p className="text-ink-muted leading-relaxed">{impact}</p>
          </div>
        </div>

        {(links?.github || links?.demo) && (
          <div className="flex gap-4 mt-6 pt-5 border-t border-hairline">
            {links.github && (
              <a href={links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors">
                <FaGithub /> Code
              </a>
            )}
            {links.demo && (
              <a href={links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors">
                <FaExternalLinkAlt /> Live demo
              </a>
            )}
          </div>
        )}
      </Card>
    </Reveal>
  );
}
