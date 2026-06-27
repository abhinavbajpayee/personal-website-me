import PageHeader from "../components/ui/PageHeader";
import Container from "../components/ui/Container";
import Reveal from "../components/ui/Reveal";
import heroDais from "../assets/images/hero-dais.jpeg";
import bookCover from "../assets/images/book-cover.jpg";

const photos = [
  { src: heroDais, caption: "Chairing a Model United Nations committee session", tag: "Leadership" },
  { src: bookCover, caption: "9 Secrets of College Life — cover", tag: "Writing" },
];

export default function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        accent="current"
        title="Moments from the rooms."
        description="Conference floors, leadership work, and milestones — growing as more get added."
      />

      <Container wide className="pb-28">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((p, i) => (
            <Reveal key={p.caption} delay={Math.min(i * 0.07, 0.3)}>
              <div className="glass rounded-2xl overflow-hidden group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={p.src}
                    alt={p.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <span className="eyebrow text-current-soft">{p.tag}</span>
                  <p className="text-sm text-ink-muted mt-1.5">{p.caption}</p>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Placeholder slots inviting future additions */}
          {Array.from({ length: 4 }).map((_, i) => (
            <Reveal key={`empty-${i}`} delay={Math.min((photos.length + i) * 0.05, 0.35)}>
              <div className="aspect-[4/5] rounded-2xl glass border-dashed flex items-center justify-center">
                <p className="text-xs text-ink-faint text-center px-4">
                  More photos coming soon
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}
