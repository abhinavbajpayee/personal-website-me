import PageHeader from "../components/ui/PageHeader";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Reveal from "../components/ui/Reveal";
import Eyebrow from "../components/ui/Eyebrow";
import heroDais from "../assets/images/hero-dais.jpeg";
import { aboutPhilosophy, profile } from "../data/content";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        accent="current"
        title="Not my résumé. My story."
        description="A résumé lists what I've done. This page is about why — the philosophy underneath the roles, the conferences, and the book."
      />

      <Container wide className="pb-10">
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-16 items-start">
          <Reveal>
            <img
              src={heroDais}
              alt="Abhinav Bajpai at a Model United Nations committee dais"
              className="rounded-2xl w-full object-cover h-[420px] glass p-2"
            />
          </Reveal>

          <Reveal delay={0.1} className="space-y-5 text-ink-muted leading-relaxed text-[1.05rem]">
            <p>
              I'm a Computer Science Engineering undergraduate specializing in
              AI &amp; ML at {profile.university.name}. But if you only knew
              that, you'd be missing most of the story.
            </p>
            <p>
              Since 2024, I've sat at the front of more than 30 Model United
              Nations committee floors, mentoring over 900 delegates in
              diplomacy, negotiation, and public speaking. In parallel, I've
              run growth research for a startup, led human resources for
              another, and managed public relations for a third — often in
              the same month.
            </p>
            <p>
              In 2026, I published my first book, <em>9 Secrets of College
              Life</em>, distilling what those rooms — and the quieter,
              unrecorded moments of college life — actually taught me about
              how people grow.
            </p>
            <p>
              None of this is a portfolio of separate achievements. It's one
              person, applying the same attention and the same instinct for
              what matters, to whatever room he happens to be in that week.
            </p>
          </Reveal>
        </div>
      </Container>

      {/* Philosophy grid */}
      <Container wide className="py-20 md:py-28">
        <Reveal>
          <Eyebrow accent="amber">What I actually believe</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl max-w-lg leading-tight text-balance">
            Four ideas that show up in everything I do.
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {aboutPhilosophy.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <Card className="h-full">
                <span className="font-mono text-xs text-current-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl mt-3 mb-3">{item.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {item.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Future vision */}
      <Container className="py-20 md:py-28 border-t border-hairline">
        <Reveal>
          <Eyebrow accent="current">Looking ahead</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl leading-tight text-balance">
            Where this is going.
          </h2>
          <p className="mt-5 text-ink-muted leading-relaxed text-lg">
            I want to keep working at the intersection of artificial
            intelligence and human systems — places where good technology and
            good judgment both matter. That means research, it likely means
            graduate study abroad, and it definitely means continuing to lead
            in public, in whatever room I'm given next. I'm not in a hurry to
            arrive anywhere. I'd rather build something that's still true
            about me in ten years than something that only looks good on a
            university application this year.
          </p>
        </Reveal>
      </Container>
    </>
  );
}
