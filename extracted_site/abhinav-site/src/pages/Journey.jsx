import PageHeader from "../components/ui/PageHeader";
import Container from "../components/ui/Container";
import Reveal from "../components/ui/Reveal";
import { journey } from "../data/content";

const tagColors = {
  Education: "text-current-soft",
  Leadership: "text-amber-soft",
  Technology: "text-current-soft",
  Growth: "text-amber-soft",
  Learning: "text-current-soft",
  Writing: "text-amber-soft",
  Future: "text-ink-muted",
};

export default function Journey() {
  return (
    <>
      <PageHeader
        eyebrow="Journey"
        accent="amber"
        title="School to JUIT to whatever comes next."
        description="A timeline of the rooms I've been in, in the order I walked into them — not a highlight reel, the actual sequence."
      />

      <Container className="pb-28">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-hairline md:left-[7px]" />

          <div className="space-y-10">
            {journey.map((item, i) => (
              <Reveal key={i} delay={Math.min(i * 0.05, 0.4)}>
                <div className="relative pl-8">
                  {/* Dot */}
                  <span
                    className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                      item.tag === "Future"
                        ? "border-ink-faint bg-void"
                        : "border-current-soft bg-void"
                    }`}
                  />

                  <div className="flex flex-wrap items-baseline gap-3 mb-1.5">
                    <span className="font-mono text-xs text-ink-faint">
                      {item.year}
                    </span>
                    <span className={`eyebrow ${tagColors[item.tag] || "text-ink-muted"}`}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-xl md:text-2xl text-ink">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-muted mt-0.5 mb-2">
                    {item.org}
                  </p>
                  <p className="text-ink-muted leading-relaxed max-w-2xl">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
