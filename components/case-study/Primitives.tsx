import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return <div className={`case-container ${className ?? ""}`.trim()}>{children}</div>;
}

type SectionShellProps = {
  children: ReactNode;
  className?: string;
  tone?: "plain" | "panel" | "dark";
};

export function SectionShell({
  children,
  className,
  tone = "plain"
}: SectionShellProps) {
  return (
    <section className={`case-section case-section--${tone} ${className ?? ""}`.trim()}>
      {children}
    </section>
  );
}

export function EyebrowLabel({ children, className }: ContainerProps) {
  return <p className={`case-eyebrow ${className ?? ""}`.trim()}>{children}</p>;
}

type EditorialHeadingProps = {
  children: ReactNode;
  level?: 1 | 2 | 3;
  size?: "display" | "section" | "heading" | "subheading";
  className?: string;
};

export function EditorialHeading({
  children,
  level = 2,
  size = "section",
  className
}: EditorialHeadingProps) {
  const Tag = `h${level}` as const;

  return <Tag className={`case-heading case-heading--${size} ${className ?? ""}`.trim()}>{children}</Tag>;
}

type MetadataBlockProps = {
  items: string[];
  className?: string;
};

export function MetadataBlock({ items, className }: MetadataBlockProps) {
  return (
    <div className={`case-metadata ${className ?? ""}`.trim()}>
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

type DeviceMockupProps = {
  imageSrc?: string;
  imageAlt: string;
  videoSrc?: string;
  className?: string;
  width?: number;
  rotation?: number;
  scale?: number;
  shadow?: string;
  tilt?: "left" | "right" | "none";
};

export function DeviceMockup({
  imageSrc,
  imageAlt,
  videoSrc,
  className,
  width = 300,
  rotation = 0,
  scale = 1,
  shadow,
  tilt = "none"
}: DeviceMockupProps) {
  const style = {
    "--device-width": `${width}px`,
    "--device-rotation": `${rotation}deg`,
    "--device-scale": `${scale}`,
    "--device-shadow": shadow ?? "0 36px 64px -36px rgba(0, 0, 0, 0.32)"
  } as CSSProperties;

  return (
    <div
      className={`device-mockup device-mockup--${tilt} ${className ?? ""}`.trim()}
      style={style}
    >
      <div className="device-mockup__frame">
        <div className="device-mockup__island" />
        {videoSrc ? (
          <video
            className="device-mockup__media"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 820px) 72vw, 340px"
            className="device-mockup__media"
          />
        ) : null}
      </div>
    </div>
  );
}

type TriplePhoneHeroProps = {
  items: Array<{
    src: string;
    alt: string;
    className: string;
    rotation: number;
    width: number;
    tilt?: "left" | "right" | "none";
  }>;
};

export function TriplePhoneHero({ items }: TriplePhoneHeroProps) {
  return (
    <div className="triple-phone-hero">
      {items.map((item) => (
        <DeviceMockup
          key={item.src}
          imageSrc={item.src}
          imageAlt={item.alt}
          className={item.className}
          rotation={item.rotation}
          width={item.width}
          tilt={item.tilt}
        />
      ))}
    </div>
  );
}

type DarkBannerSectionProps = {
  sectionNumber: string;
  title: string;
  eyebrow?: string;
  align?: "right" | "center" | "left";
  children?: ReactNode;
};

export function DarkBannerSection({
  sectionNumber,
  title,
  eyebrow,
  align = "right",
  children
}: DarkBannerSectionProps) {
  return (
    <div className={`dark-banner dark-banner--${align}`}>
      <div className="dark-banner__number" aria-hidden="true">
        {sectionNumber}
      </div>
      {eyebrow ? <EyebrowLabel className="dark-banner__eyebrow">{eyebrow}</EyebrowLabel> : null}
      <EditorialHeading level={2} size="heading" className="dark-banner__title">
        {title}
      </EditorialHeading>
      {children}
    </div>
  );
}

type ReusableImageBlockProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export function ReusableImageBlock({
  src,
  alt,
  width,
  height,
  className
}: ReusableImageBlockProps) {
  return (
    <div className={`reusable-image-block ${className ?? ""}`.trim()}>
      <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 820px) 100vw, 1200px" />
    </div>
  );
}

type AnnotationListProps = {
  items: Array<{
    title: string;
    body: string;
  }>;
  className?: string;
};

export function AnnotationList({ items, className }: AnnotationListProps) {
  return (
    <div className={`annotation-list ${className ?? ""}`.trim()}>
      {items.map((item) => (
        <article key={item.title} className="annotation-list__item">
          <EyebrowLabel>{item.title}</EyebrowLabel>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}

type DeviceRowGalleryProps = {
  items: Array<{
    src: string;
    alt: string;
    title?: string;
    caption?: string;
  }>;
  className?: string;
};

export function DeviceRowGallery({ items, className }: DeviceRowGalleryProps) {
  return (
    <div className={`device-row-gallery ${className ?? ""}`.trim()}>
      {items.map((item) => (
        <article className="device-row-gallery__item" key={item.src}>
          {item.title ? <h3>{item.title}</h3> : null}
          {item.caption ? <p>{item.caption}</p> : null}
          <Image src={item.src} alt={item.alt} width={768} height={1414} sizes="(max-width: 820px) 68vw, 260px" />
        </article>
      ))}
    </div>
  );
}
