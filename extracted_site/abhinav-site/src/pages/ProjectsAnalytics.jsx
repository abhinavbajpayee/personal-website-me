import PageHeader from "../components/ui/PageHeader";
import Container from "../components/ui/Container";
import EmptyState from "../components/ui/EmptyState";
import { projects } from "../data/content";

export default function ProjectsAnalytics() {
  return (
    <>
      <PageHeader
        eyebrow="Projects / Data Analytics"
        accent="current"
        title="Power BI, SQL, Excel, Python."
        description="Each analytics project here will include the business problem, dataset, KPIs, dashboard, insights, and recommendations — not just a chart."
      />

      <Container wide className="pb-28">
        {projects.analytics.length === 0 ? (
          <EmptyState
            title="This section is being built."
            body="The next additions here will be dashboard-led case studies — business problem, dataset, KPIs tracked, and the recommendations that came out of the analysis. Check back soon, or see the Software Development projects in the meantime."
          />
        ) : null}
      </Container>
    </>
  );
}
