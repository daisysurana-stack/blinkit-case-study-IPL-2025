import Image from "next/image";
import Link from "next/link";

function WorkBadge({ children }: { children: React.ReactNode }) {
  return <span className="secondary-entry-card__tag">[{children}]</span>;
}

export default function SecondaryCaseStudyEntryCard() {
  return (
    <Link
      className="secondary-entry-card"
      href="/case-study/snatchwars"
      aria-label="Open Forever Future Rakhi case study"
    >
      <div className="secondary-entry-card__visual">
        <div className="secondary-entry-card__visual-panel" />
        <div className="secondary-entry-card__preview">
          <Image
            src="/assets/folder-case-study-cover.png"
            alt="Forever Future Rakhi case study preview"
            fill
            className="secondary-entry-card__preview-image"
            sizes="(max-width: 900px) 100vw, 520px"
          />
        </div>
      </div>

      <div className="secondary-entry-card__content">
        <p className="secondary-entry-card__eyebrow">Selected Work</p>
        <p className="secondary-entry-card__kicker">Forever Future · Rakhi</p>
        <h2 className="secondary-entry-card__title">Snatch Wars</h2>
        <p className="secondary-entry-card__summary">
          A Rakhi campaign case study for Forever Future, now fully linked as part of this website.
        </p>
        <div className="secondary-entry-card__tags" aria-label="Project tags">
          <WorkBadge>Product Design</WorkBadge>
          <WorkBadge>Rakhi Campaign</WorkBadge>
          <WorkBadge>Forever Future</WorkBadge>
        </div>
      </div>
    </Link>
  );
}
