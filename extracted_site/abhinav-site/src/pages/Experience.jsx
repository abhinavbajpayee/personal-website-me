import PageHeader from "../components/ui/PageHeader";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Reveal from "../components/ui/Reveal";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        accent="current"
        title="Growth, HR, and PR — run in parallel."
        description="Five roles, five organizations, one operating style: research first, then build the system, then run it."
      />

      <Container wide className="pb-28 space-y-5">
        {experience.map((job, i) => (
          <Reveal key={job.role + job.org} delay={Math.min(i * 0.07, 0.3)}>
            <Card>
              <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                <div>
                  <h3 className="font-display text-2xl text-ink">{job.role}</h3>
                  <p className="text-ink-muted mt-1">{job.org}</p>
                </div>
                <span className="font-mono text-xs text-ink-faint whitespace-nowrap pt-1">
                  {job.period}
                </span>
              </div>

              <ul className="space-y-2 mb-6">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex gap-3 text-sm text-ink-muted leading-relaxed">
                    <span className={`mt-2 block w-1 h-1 rounded-full flex-shrink-0 ${
                      job.type === "Leadership" ? "bg-amber-accent" : "bg-current-accent"
                    }`} />
                    {r}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.skills.map((s) => (
                  <span
                    key={s}
                    className={`font-mono text-xs px-2.5 py-1 rounded-full ${
                      job.type === "Leadership"
                        ? "bg-amber-dim text-amber-soft"
                        : "bg-current-dim text-current-soft"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </Container>
    </>
  );
}
