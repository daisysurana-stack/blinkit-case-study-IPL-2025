import FolderTile3D from "@/components/FolderTile3D";
import BlinkitEntryCard from "@/components/BlinkitEntryCard";
import HomeHero from "@/components/HomeHero";

export default function HomePage() {
  return (
    <>
      <div className="home-landing">
        <HomeHero />

        <section className="home-works" aria-label="Selected works">
          <section className="home-featured-case" aria-label="Featured case study">
            <div className="home-featured-case__glass" />
            <BlinkitEntryCard />
          </section>

          <section className="home-featured-case home-featured-case--secondary" aria-label="Additional featured case study">
            <div className="home-featured-case__glass" />
            <BlinkitEntryCard
              href="/case-study/snatchwars"
              ariaLabel="Open nostalgia-driven play case study"
              titleLineOne="Designing nostalgia-driven play"
              titleLineTwo="for 260,000 siblings."
            />
          </section>

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
            <section className="folder-gallery" aria-label="Selected work folders">
              <div className="folder-gallery__row">
                <FolderTile3D
                  coverImageSrc="/assets/folder-blinkit-cover.png"
                  coverImageAlt="My Impact at Blinkit folder cover"
                  href="/case-study?project=blinkit"
                  hoverType="blinkit"
                  hoverCtaText="Read all case studies"
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
          </div>
        </section>
      </div>
    </>
  );
}
