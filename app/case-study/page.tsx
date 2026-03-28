import Link from "next/link";
import BlinkitCaseStudy from "@/components/BlinkitCaseStudy";
import SnatchWarsCaseStudy from "@/components/SnatchWarsCaseStudy";
import { caseStudies, type CaseStudyKey } from "@/data/caseStudies";

type CaseStudyPageProps = {
  searchParams?: {
    project?: string | string[];
  };
};

export default function CaseStudyPage({ searchParams }: CaseStudyPageProps) {
  const projectParam = Array.isArray(searchParams?.project)
    ? searchParams?.project[0]
    : searchParams?.project;
  const projectKey = (projectParam ?? "blinkit") as CaseStudyKey;
  const project = caseStudies[projectKey] ?? caseStudies.blinkit;

  if (projectKey === "blinkit") {
    return <BlinkitCaseStudy />;
  }

  if (projectKey === "snatchwars") {
    return <SnatchWarsCaseStudy />;
  }

  return (
    <div className="main-inner case-layout">
      <section className="case-sheet" aria-labelledby="sheet-project">
        <div className="case-sheet__grid">
          <div className="case-sheet__top">
            <div>
              <p className="case-label">File ID</p>
              <p className="case-value">{project.fileId}</p>
            </div>
            <div>
              <p className="case-label">Status</p>
              <p className="case-value">{project.status}</p>
            </div>
          </div>

          <div>
            <p className="case-label">Project</p>
            <p className="case-value case-value--title" id="sheet-project">
              {project.project}
            </p>
          </div>

          <div className="case-sheet__split">
            <div>
              <p className="case-label">Role</p>
              <p className="case-value">{project.role}</p>
            </div>
            <div>
              <p className="case-label">Type</p>
              <p className="case-value">{project.type}</p>
            </div>
          </div>

          <div>
            <p className="case-label">Focus</p>
            <p className="case-value">{project.focus}</p>
          </div>

          <p className="case-summary">{project.summary}</p>

          <div className="case-sheet__footer">
            <div>
              <p className="case-label">Record</p>
              <p className="case-value">{project.record}</p>
            </div>
            <div>
              <p className="case-label">Availability</p>
              <p className="case-value">{project.availability}</p>
            </div>
          </div>
        </div>

        <div className="case-stamp">
          <div>
            <span>Portfolio</span>
            <strong>Approved</strong>
            <span>Daisy Surana</span>
          </div>
        </div>
      </section>

      <section className="case-content">
        <span className="eyebrow">{project.eyebrow}</span>
        <h2 className="case-title">
          {project.title}
          <span>{project.accent}</span>
        </h2>
        <p className="case-lede">{project.lede}</p>

        <div className="case-pills">
          {project.pills.map((pill) => (
            <span key={pill}>{pill}</span>
          ))}
        </div>

        <div className="case-actions">
          <Link className="button-link button-link--solid" href="/">
            Back to Works
          </Link>
          <Link className="button-link button-link--ghost" href="/contact">
            Request walkthrough
          </Link>
        </div>
      </section>
    </div>
  );
}
