import Image from "next/image";
import Link from "next/link";

type FolderTile3DProps = {
  coverImageSrc: string;
  coverImageAlt: string;
  href: string;
  hoverType: "blinkit" | "caseStudy" | "motion";
  hoverCtaText?: string;
  ariaLabel?: string;
};

function MotionStickers() {
  return (
    <div className="folder-tile__stickers" aria-hidden="true">
      <span className="folder-tile__sticker folder-tile__sticker--1">
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L14.9 8.6L22 9.3L16.7 13.8L18.3 20.8L12 17L5.7 20.8L7.3 13.8L2 9.3L9.1 8.6L12 2Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="folder-tile__sticker folder-tile__sticker--2">✦</span>
      <span className="folder-tile__sticker folder-tile__sticker--3">✳</span>
      <span className="folder-tile__sticker folder-tile__sticker--4">★</span>
    </div>
  );
}

export default function FolderTile3D({
  coverImageSrc,
  coverImageAlt,
  href,
  hoverType,
  hoverCtaText,
  ariaLabel
}: FolderTile3DProps) {
  return (
    <div className={`folder-tile folder-tile--${hoverType}`}>
      <div className="folder-tile__idle">
        <Link
          className="folder-tile__link"
          href={href}
          aria-label={ariaLabel ?? coverImageAlt}
        >
          <div className="folder-tile__stage">
            <div className="folder-tile__shadow" />
            <div className="folder-tile__rear folder-tile__rear--1" />
            <div className="folder-tile__rear folder-tile__rear--2" />

            <div className="folder-tile__sheet">
              {hoverType === "blinkit" ? (
                <span className="folder-tile__sheet-copy">{hoverCtaText}</span>
              ) : null}
              {hoverType === "caseStudy" ? (
                <span className="folder-tile__sheet-arrow">→</span>
              ) : null}
            </div>

            {hoverType === "motion" ? <MotionStickers /> : null}

            <div className="folder-tile__cover">
              <Image
                className="folder-tile__cover-image"
                src={coverImageSrc}
                alt={coverImageAlt}
                fill
                sizes="(max-width: 820px) 78vw, (max-width: 1280px) 28vw, 340px"
                priority
              />
            </div>

            <div className="folder-tile__flap" />
          </div>
        </Link>
      </div>

      <Link className="folder-tile__button" href={href} aria-label={`Open ${ariaLabel ?? coverImageAlt}`}>
        <span className="folder-tile__button-icon">→</span>
      </Link>
    </div>
  );
}
