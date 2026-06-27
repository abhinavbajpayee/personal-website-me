import PageHeader from "../components/ui/PageHeader";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Reveal from "../components/ui/Reveal";
import Eyebrow from "../components/ui/Eyebrow";
import heroDais from "../assets/images/hero-dais.jpeg";
import { leadership } from "../data/content";

export default function Leadership() {
  return (
    <>
      <PageHeader
        eyebrow="Leadership & Community Impact"
        accent="amber"
        title="30+ committee floors. 900+ delegates."
        description="Leadership, for me, has mostly happened in rooms with a gavel, a delegate list, and a tight clock — not in a boardroom."
      />

      <Container wide className="pb-10">
        <div className="grid md:grid-cols-4 gap-4">
          {leadership.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <Card className="text-center">
                <p className="font-display text-3xl md:text-4xl text-amber-soft">{s.value}</p>
                <p className="mt-1.5 text-xs text-ink-muted">{s.label}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>

      <Container wide className="py-16 md:py-24">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-center">
          <Reveal>
            <img
              src={heroDais}
              alt="Abhinav Bajpai chairing a committee session"
              className="rounded-2xl w-full object-cover h-[420px] glass p-2"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow accent="amber">Model United Nations</Eyebrow>
            <h2 className="font-display text-3xl leading-tight mb-4">
              The room where I learned the most about people.
            </h2>
            <p className="text-ink-muted leading-relaxed">
              Across more than 30 conferences as Executive Board member,
              Chairperson, and mentor, I've watched young delegates discover
              their voice, struggle with confidence, learn to negotiate, and
              occasionally crumble under pressure — and I've learned to read
              all of it fast enough to actually help. That's the skill behind
              every other role on this page.
            </p>
          </Reveal>
        </div>
      </Container>

      <Container className="py-16 md:py-24 border-t border-hairline">
        <Reveal>
          <Eyebrow accent="ink">Roles &amp; responsibilities</Eyebrow>
          <h2 className="font-display text-3xl mb-10">Where I've led.</h2>
        </Reveal>

        <div className="space-y-4">
          {leadership.roles.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <Card>
                <h3 className="font-display text-xl text-ink">{r.title}</h3>
                <p className="text-sm text-amber-soft mt-1 mb-3">{r.org}</p>
                <p className="text-ink-muted leading-relaxed">{r.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}
