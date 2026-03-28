import FolderTile3D from "@/components/FolderTile3D";
import BlinkitEntryCard from "@/components/BlinkitEntryCard";
import SecondaryCaseStudyEntryCard from "@/components/SecondaryCaseStudyEntryCard";

export default function HomePage() {
  return (
    <>
      <svg className="orbit-mark" viewBox="0 0 200 200" aria-hidden="true">
        <path
          id="works-orbit"
          d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          fill="none"
        />
        <text>
          <textPath href="#works-orbit" xlinkHref="#works-orbit">
            Selected Works 2025 • Daisy Surana Studio • Product. Motion. Systems. •
          </textPath>
        </text>
      </svg>

      <div className="main-inner works-stage">
        <section className="folder-gallery" aria-label="Selected works">
          <div className="folder-gallery__row">
            <FolderTile3D
              coverImageSrc="/assets/folder-blinkit-cover.png"
              coverImageAlt="My Impact at Blinkit folder cover"
              href="/case-study?project=blinkit"
              hoverType="blinkit"
              hoverCtaText="Read all case studies"
            />

            <FolderTile3D
              coverImageSrc="/assets/folder-case-study-cover.png"
              coverImageAlt="Forever Future Rakhi case study folder cover"
              href="/case-study/snatchwars"
              hoverType="caseStudy"
            />

            <FolderTile3D
              coverImageSrc="/assets/folder-motion-cover.png"
              coverImageAlt="Motion archive folder cover"
              href="/interest"
              hoverType="motion"
            />
          </div>

          <p className="works-caption">
            A selection of product systems, experiments, and motion-led
            narratives.
          </p>
        </section>

        <section className="works-entrypoint" aria-label="Blinkit case study entry">
          <BlinkitEntryCard />
        </section>

        <section
          className="works-entrypoint works-entrypoint--secondary"
          aria-label="Forever Future Rakhi case study entry"
        >
          <SecondaryCaseStudyEntryCard />
        </section>
      </div>
    </>
  );
}
