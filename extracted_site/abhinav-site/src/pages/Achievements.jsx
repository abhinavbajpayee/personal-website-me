import PageHeader from "../components/ui/PageHeader";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Reveal from "../components/ui/Reveal";
import { achievements } from "../data/content";

export default function Achievements() {
  return (
    <>
      <PageHeader
        eyebrow="Achievements"
        accent="amber"
        title="Recognition, in context."
        description="Each of these came out of a specific project or room — not collected for their own sake."
      />

      <Container wide className="pb-28">
        <div className="grid md:grid-cols-3 gap-4">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={Math.min(i * 0.06, 0.3)}>
              <Card className="h-full">
                <span className="eyebrow text-current-soft">{a.tag}</span>
                <h3 className="font-display text-lg mt-3 mb-2 leading-snug">{a.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{a.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}
