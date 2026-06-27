import PageHeader from "../components/ui/PageHeader";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Reveal from "../components/ui/Reveal";
import Eyebrow from "../components/ui/Eyebrow";
import Button from "../components/ui/Button";
import { HiDownload } from "react-icons/hi";
import { profile, experience, certifications } from "../data/content";

export default function Resume() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        accent="ink"
        title="The condensed version."
        description="A formatted summary on this page, plus a downloadable PDF for applications and recruiters."
      />

      <Container className="pb-10">
        <Reveal>
          <Card className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-display text-lg text-ink">Download the full résumé</p>
              <p className="text-sm text-ink-muted mt-1">PDF · updated regularly</p>
            </div>
            <Button href="/assets/Abhinav_Bajpai_Resume.pdf" variant="primary">
              <HiDownload /> Download PDF
            </Button>
          </Card>
        </Reveal>
      </Container>

      <Container className="py-12">
        <Reveal>
          <Eyebrow accent="current">Education</Eyebrow>
          <Card>
            <h3 className="font-display text-xl text-ink">
              {profile.university.degree}
            </h3>
            <p className="text-sm text-ink-muted mt-1.5">
              {profile.university.name}, {profile.university.location} · {profile.university.years}
            </p>
            <p className="text-sm text-ink-muted mt-1">
              CGPA: {profile.university.cgpa}
            </p>
          </Card>
        </Reveal>
      </Container>

      <Container className="py-12">
        <Reveal>
          <Eyebrow accent="amber">Experience</Eyebrow>
        </Reveal>
        <div className="space-y-3 mt-4">
          {experience.map((job, i) => (
            <Reveal key={job.role} delay={Math.min(i * 0.06, 0.3)}>
              <Card>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg text-ink">
                    {job.role} <span className="text-ink-muted font-sans text-sm">— {job.org}</span>
                  </h3>
                  <span className="font-mono text-xs text-ink-faint">{job.period}</span>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>

      <Container className="py-12 pb-28">
        <Reveal>
          <Eyebrow accent="current">Certifications</Eyebrow>
        </Reveal>
        <div className="flex flex-wrap gap-2 mt-4">
          {certifications.map((c) => (
            <span
              key={c.name}
              className="text-sm px-4 py-2 rounded-full glass text-ink-muted"
            >
              {c.name}
            </span>
          ))}
        </div>
      </Container>
    </>
  );
}
