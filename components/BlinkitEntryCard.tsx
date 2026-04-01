import Image from "next/image";
import Link from "next/link";

function EntryTag({ children }: { children: React.ReactNode }) {
  return <span className="blinkit-entry-card__tag">[{children}]</span>;
}

export default function BlinkitEntryCard() {
  return (
    <Link className="blinkit-entry-card" href="/case-study?project=blinkit" aria-label="Open Blinkit IPL case study">
      <div className="blinkit-entry-card__visual">
        <div className="blinkit-entry-card__visual-panel" />
        <div className="blinkit-entry-card__visual-stack" aria-hidden="true">
          <Image
            src="/assets/mock-case-study-ipl.png"
            alt="IPL case study mockup screens"
            width={768}
            height={768}
            className="blinkit-entry-card__visual-mockup"
            sizes="(max-width: 1200px) 100vw, 540px"
          />
        </div>
      </div>

      <div className="blinkit-entry-card__content">
        <div className="blinkit-entry-card__content-frame">
          <div className="blinkit-entry-card__intro">
            <Image
              src="/assets/Blinkit-logo.png"
              alt="Blinkit"
              width={204}
              height={54}
              className="blinkit-entry-card__logo"
            />
            <p className="blinkit-entry-card__meta">COMPANY: [QUICK-COMMERCE]</p>
          </div>

          <div className="blinkit-entry-card__body">
            <h2 className="blinkit-entry-card__title">
              Designing a Scalable
              <br />
              IPL Engagement System
            </h2>
            <div className="blinkit-entry-card__tags" aria-label="Project tags">
              <EntryTag>Product thinking</EntryTag>
              <EntryTag>visual</EntryTag>
              <EntryTag>Motion</EntryTag>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
