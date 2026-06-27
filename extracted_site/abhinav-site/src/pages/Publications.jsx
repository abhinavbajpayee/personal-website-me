import PageHeader from "../components/ui/PageHeader";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Reveal from "../components/ui/Reveal";
import Eyebrow from "../components/ui/Eyebrow";
import bookCover from "../assets/images/book-cover.jpg";
import certificate from "../assets/images/publication-certificate.jpg";
import { publication } from "../data/content";

export default function Publications() {
  return (
    <>
      <PageHeader
        eyebrow="Publications"
        accent="amber"
        title={publication.title}
        description={publication.subtitle}
      />

      <Container wide className="pb-16">
        <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-10 md:gap-16 items-start">
          <Reveal>
            <img
              src={bookCover}
              alt={`${publication.title} book cover`}
              className="rounded-xl shadow-2xl w-full max-w-[300px] mx-auto md:mx-0"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-amber-soft font-medium mb-5">
              {publication.tagline}
            </p>
            <p className="text-ink-muted leading-relaxed text-lg mb-6">
              {publication.description}
            </p>

            <Card className="bg-transparent border-l-2 border-amber-accent rounded-l-none">
              <p className="text-ink italic leading-relaxed">
                "{publication.authorNote}"
              </p>
            </Card>

            <dl className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-8 text-sm">
              <div>
                <dt className="eyebrow mb-1">ISBN</dt>
                <dd className="text-ink-muted font-mono text-xs">{publication.isbn}</dd>
              </div>
              <div>
                <dt className="eyebrow mb-1">Publisher</dt>
                <dd className="text-ink-muted">{publication.publisher}</dd>
              </div>
              <div>
                <dt className="eyebrow mb-1">Published</dt>
                <dd className="text-ink-muted">{publication.pubDate}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Container>

      <Container className="py-16 md:py-24 border-t border-hairline">
        <Reveal>
          <Eyebrow accent="ink">Certificate of publication</Eyebrow>
          <h2 className="font-display text-2xl mb-8">Official record.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass rounded-2xl p-2 max-w-2xl mx-auto">
            <img
              src={certificate}
              alt="Certificate of publication for 9 Secrets of College Life"
              className="rounded-xl w-full"
            />
          </div>
        </Reveal>
      </Container>
    </>
  );
}
