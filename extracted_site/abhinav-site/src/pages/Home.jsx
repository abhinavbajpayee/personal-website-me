import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import Container from "../components/ui/Container";
import Eyebrow from "../components/ui/Eyebrow";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import RoomIndicator from "../components/ui/RoomIndicator";
import heroDais from "../assets/images/hero-dais.jpeg";
import bookCover from "../assets/images/book-cover.jpg";
import {
  profile,
  heroStats,
  aboutPhilosophy,
  leadership,
  achievements,
  publication,
} from "../data/content";

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
        {/* Ambient gradient glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-current-accent opacity-[0.06] blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[5%] w-[500px] h-[500px] rounded-full bg-amber-accent opacity-[0.05] blur-[120px]" />
        </div>

        <Container wide>
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <RoomIndicator className="mb-7" />

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-balance">
                Technology leadership,{" "}
                <span className="text-current-soft">practiced</span>{" "}
                in public rooms.
              </h1>

              <p className="mt-6 text-lg text-ink-muted max-w-lg leading-relaxed">
                I'm {profile.name} — an AI &amp; ML undergraduate at {profile.university.short} who has spent four years
                running committee floors, hiring pipelines, and growth experiments,
                and writing about what all of it actually teaches.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Button to="/about" variant="primary">
                  Start with my story <HiArrowRight />
                </Button>
                <Button to="/resume" variant="secondary">
                  View résumé
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden glass p-2">
                <img
                  src={heroDais}
                  alt="Abhinav Bajpai chairing a Model United Nations committee session"
                  className="rounded-2xl w-full h-[440px] md:h-[520px] object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 glass rounded-2xl px-5 py-4 hidden sm:block">
                <p className="font-display text-2xl text-amber-soft">30+</p>
                <p className="text-xs text-ink-muted mt-0.5">MUN conferences chaired</p>
              </div>
            </motion.div>
          </div>

          {/* Stats row */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-hairline">
            {heroStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="bg-graphite p-6 md:p-7">
                <p className="font-display text-3xl md:text-4xl text-ink">{s.value}</p>
                <p className="mt-1.5 text-xs md:text-sm text-ink-muted">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- ABOUT PREVIEW ---------- */}
      <section className="py-20 md:py-28">
        <Container wide>
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-16">
            <Reveal>
              <Eyebrow accent="current">Operating philosophy</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl leading-tight text-balance">
                The same pattern, in every room.
              </h2>
              <p className="mt-5 text-ink-muted leading-relaxed">
                Committee floors. Hiring pipelines. Growth experiments. A manuscript.
                Different rooms, same operator — listen first, find the real
                constraint, then move.
              </p>
              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-2 text-sm text-current-soft hover:gap-3 transition-all"
              >
                Read the full philosophy <HiArrowRight />
              </Link>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {aboutPhilosophy.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <Card className="h-full">
                    <h3 className="font-display text-lg text-ink mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-ink-muted leading-relaxed">
                      {item.body}
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- LEADERSHIP HIGHLIGHT ---------- */}
      <section className="py-20 md:py-28 border-t border-hairline">
        <Container wide>
          <Reveal>
            <Eyebrow accent="amber">Leadership &amp; community impact</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl leading-tight text-balance max-w-xl">
              900+ delegates mentored, one committee at a time.
            </h2>
          </Reveal>

          <div className="mt-10 grid md:grid-cols-4 gap-4">
            {leadership.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <Card className="text-center">
                  <p className="font-display text-3xl text-amber-soft">{s.value}</p>
                  <p className="mt-1.5 text-xs text-ink-muted">{s.label}</p>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-8">
            <Button to="/leadership" variant="secondary">
              Explore leadership &amp; community work <HiArrowRight />
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* ---------- BOOK / PUBLICATION ---------- */}
      <section className="py-20 md:py-28 border-t border-hairline">
        <Container wide>
          <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-10 md:gap-16 items-center">
            <Reveal>
              <div className="relative max-w-[260px] mx-auto md:mx-0">
                <img
                  src={bookCover}
                  alt={`${publication.title} book cover`}
                  className="rounded-xl shadow-2xl w-full"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Eyebrow accent="ink">Published author</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl leading-tight text-balance">
                {publication.title}
              </h2>
              <p className="mt-2 text-amber-soft text-sm font-medium">
                {publication.tagline}
              </p>
              <p className="mt-5 text-ink-muted leading-relaxed max-w-xl">
                {publication.description}
              </p>
              <Button to="/publications" variant="secondary" className="mt-6">
                Read about the book <HiArrowRight />
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------- RECENT ACHIEVEMENTS ---------- */}
      <section className="py-20 md:py-28 border-t border-hairline">
        <Container wide>
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
              <div>
                <Eyebrow accent="current">Recent recognition</Eyebrow>
                <h2 className="font-display text-3xl md:text-4xl leading-tight">
                  Achievements
                </h2>
              </div>
              <Link
                to="/achievements"
                className="inline-flex items-center gap-2 text-sm text-current-soft hover:gap-3 transition-all"
              >
                View all <HiArrowRight />
              </Link>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-4">
            {achievements.slice(0, 3).map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <Card className="h-full">
                  <span className="eyebrow text-current-soft">{a.tag}</span>
                  <h3 className="font-display text-lg mt-3 mb-2 leading-snug">{a.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{a.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- CONTACT CTA ---------- */}
      <section className="py-24 md:py-32 border-t border-hairline">
        <Container>
          <Reveal className="text-center">
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-balance">
              Building toward what's next —
              <br />
              research, study abroad, and beyond.
            </h2>
            <p className="mt-5 text-ink-muted max-w-md mx-auto">
              If you're a recruiter, founder, admissions officer, or fellow
              builder — I'd like to hear from you.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Button to="/contact" variant="primary">
                Get in touch <HiArrowRight />
              </Button>
              <Button to="/journey" variant="secondary">
                See the full journey
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
