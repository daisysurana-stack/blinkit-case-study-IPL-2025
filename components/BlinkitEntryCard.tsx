import Image from "next/image";
import Link from "next/link";

function EntryTag({ children }: { children: React.ReactNode }) {
  return <span className="blinkit-entry-card__tag">[{children}]</span>;
}

function EntryPhone({
  src,
  alt,
  className,
  label
}: {
  src: string;
  alt: string;
  className: string;
  label: string;
}) {
  return (
    <div className={`blinkit-entry-card__phone ${className}`}>
      <span className="blinkit-entry-card__phone-label">{label}</span>
      <div className="blinkit-entry-card__phone-frame">
        <div className="blinkit-entry-card__phone-island" />
        <Image fill className="blinkit-entry-card__phone-screen" src={src} alt={alt} sizes="240px" />
      </div>
    </div>
  );
}

export default function BlinkitEntryCard() {
  return (
    <Link className="blinkit-entry-card" href="/case-study?project=blinkit" aria-label="Open Blinkit IPL case study">
      <div className="blinkit-entry-card__visual">
        <div className="blinkit-entry-card__visual-panel" />
        <div className="blinkit-entry-card__visual-stack" aria-hidden="true">
          <EntryPhone
            src="/assets/Screen1-PT-Design-mock.png"
            alt="Homepage prime-time widget screen"
            className="blinkit-entry-card__phone--one"
            label="01"
          />
          <EntryPhone
            src="/assets/Screen1-spin-win-mock.png"
            alt="Spin and win screen"
            className="blinkit-entry-card__phone--two"
            label="02"
          />
          <EntryPhone
            src="/assets/Screen1-chennai-brand-store-mock.png"
            alt="Team brand store screen"
            className="blinkit-entry-card__phone--three"
            label="03"
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
            <h2 className="blinkit-entry-card__title">Designing a Scalable IPL Engagement System</h2>
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
