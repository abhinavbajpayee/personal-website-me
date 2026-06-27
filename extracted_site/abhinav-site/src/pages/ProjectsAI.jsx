import PageHeader from "../components/ui/PageHeader";
import Container from "../components/ui/Container";
import EmptyState from "../components/ui/EmptyState";
import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../data/content";

export default function ProjectsAI() {
  // Academic Ally is genuinely an AI/NLP project — surface it here too,
  // since it sits at the intersection of "software" and "AI."
  const aiProjects = [
    ...projects.ai,
    ...projects.software.filter((p) => p.title === "Academic Ally"),
  ];

  return (
    <>
      <PageHeader
        eyebrow="Projects / AI & Machine Learning"
        accent="current"
        title="Where models meet real problems."
        description="Applied AI work, from academic tooling to whatever comes out of ongoing research interest in AI and human systems."
      />

      <Container wide className="pb-28 space-y-6">
        {aiProjects.length > 0 ? (
          aiProjects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)
        ) : (
          <EmptyState
            title="More AI work is on the way."
            body="As research and coursework progress, dedicated AI/ML case studies will land here."
          />
        )}
      </Container>
    </>
  );
}
