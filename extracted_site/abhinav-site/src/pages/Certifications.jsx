import PageHeader from "../components/ui/PageHeader";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Reveal from "../components/ui/Reveal";
import { HiBadgeCheck } from "react-icons/hi";
import { certifications } from "../data/content";

export default function Certifications() {
  return (
    <>
      <PageHeader
        eyebrow="Certifications"
        accent="current"
        title="Continuous, deliberate learning."
        description="Formal programs and credentials completed alongside coursework and roles."
      />

      <Container className="pb-28 space-y-4">
        {certifications.map((c, i) => (
          <Reveal key={c.name} delay={Math.min(i * 0.06, 0.3)}>
            <Card className="flex items-start gap-4">
              <HiBadgeCheck className="text-2xl text-current-soft flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display text-lg text-ink">{c.name}</h3>
                <p className="text-sm text-ink-muted mt-1">
                  {c.issuer} · {c.year}
                </p>
              </div>
            </Card>
          </Reveal>
        ))}
      </Container>
    </>
  );
}
