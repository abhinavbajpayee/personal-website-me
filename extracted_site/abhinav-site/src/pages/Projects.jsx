import PageHeader from "../components/ui/PageHeader";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Reveal from "../components/ui/Reveal";
import { HiArrowRight } from "react-icons/hi";

const categories = [
  {
    title: "Data Analytics",
    path: "/projects/analytics",
    body: "Power BI, SQL, Excel, and Python work — business problems framed as data problems, then solved.",
    accent: "current",
  },
  {
    title: "Software Development",
    path: "/projects/software",
    body: "Full builds: Academic Ally and Slot Smart, from problem statement to shipped product.",
    accent: "amber",
  },
  {
    title: "AI & Machine Learning",
    path: "/projects/ai",
    body: "Applied AI work — where models meet real academic and operational problems.",
    accent: "current",
  },
];

export default function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        accent="current"
        title="Three lenses on the same habit: build the useful thing."
        description="Projects are organized by discipline. Each one goes deep — problem, approach, architecture, and outcome."
      />

      <Container wide className="pb-28">
        <div className="grid md:grid-cols-3 gap-5">
          {categories.map((c, i) => (
            <Reveal key={c.path} delay={i * 0.08}>
              <Card as="a" href={c.path} className="h-full block group cursor-pointer" hover>
                <span className={`eyebrow ${c.accent === "amber" ? "text-amber-soft" : "text-current-soft"}`}>
                  Category
                </span>
                <h3 className="font-display text-xl mt-3 mb-3">{c.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed mb-6">
                  {c.body}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-ink group-hover:gap-3 transition-all">
                  Explore <HiArrowRight />
                </span>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}
