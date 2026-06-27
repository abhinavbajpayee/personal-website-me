import PageHeader from "../components/ui/PageHeader";
import Container from "../components/ui/Container";
import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../data/content";

export default function ProjectsSoftware() {
  return (
    <>
      <PageHeader
        eyebrow="Projects / Software Development"
        accent="amber"
        title="From problem statement to shipped product."
        description="Full builds — architecture, tradeoffs, and what happened when the project met its first real users or judges."
      />

      <Container wide className="pb-28 space-y-6">
        {projects.software.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </Container>
    </>
  );
}
