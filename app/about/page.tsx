export default function AboutPage() {
  return (
    <div className="main-inner about-grid">
      <section className="section-intro">
        <span className="eyebrow">About</span>
        <h2 className="section-title">
          A journey through <span>product, motion, and systems.</span>
        </h2>
        <p className="section-copy">
          I work at the intersection of product clarity and visual feeling. My
          practice leans on editorial composition, motion as explanation, and
          systems that hold together across launches, campaigns, and interface
          moments. This page is set up like a journey map so it can easily
          evolve into a fuller resume once you share your exact milestones.
        </p>
      </section>

      <section className="journey-map" aria-label="Professional journey">
        <article className="journey-panel">
          <div className="journey-node" />
          <p className="journey-year">Chapter 01</p>
          <h3 className="journey-title">Visual craft</h3>
          <p className="journey-copy">
            A grounding in typography, composition, and image systems built the
            editorial lens that still shapes every interface and narrative
            decision.
          </p>
        </article>

        <article className="journey-panel">
          <div className="journey-node" />
          <p className="journey-year">Chapter 02</p>
          <h3 className="journey-title">Motion thinking</h3>
          <p className="journey-copy">
            Animation became a tool for rhythm and guidance, helping interfaces
            explain themselves with more precision and less friction.
          </p>
        </article>

        <article className="journey-panel">
          <div className="journey-node" />
          <p className="journey-year">Chapter 03</p>
          <h3 className="journey-title">System building</h3>
          <p className="journey-copy">
            From reusable patterns to scalable communication kits, the work
            shifted toward repeatable structures that stay expressive under
            pressure.
          </p>
        </article>

        <article className="journey-panel">
          <div className="journey-node" />
          <p className="journey-year">Chapter 04</p>
          <h3 className="journey-title">Blinkit now</h3>
          <p className="journey-copy">
            Today the focus is on product storytelling, motion-led
            communication, and thoughtful details that can perform at the speed
            of a live product.
          </p>
        </article>
      </section>

      <section>
        <div className="section-intro">
          <span className="eyebrow">Resume history</span>
          <p className="section-copy">
            The structure below is designed as an editable resume strip. You can
            replace any of the labels, dates, or summaries with your final
            content without disturbing the layout.
          </p>
        </div>

        <div className="resume-list">
          <article className="resume-card">
            <span className="meta">2024 — Present</span>
            <h3>Blinkit</h3>
            <p>
              Visual &amp; Motion Designer focused on product communication,
              launch assets, motion systems, and polished moments that improve
              clarity at scale.
            </p>
          </article>

          <article className="resume-card">
            <span className="meta">Earlier chapter</span>
            <h3>Product narratives</h3>
            <p>
              Shaping digital stories through layouts, site structures, and
              campaign-led design systems that connect product intent to
              audience understanding.
            </p>
          </article>

          <article className="resume-card">
            <span className="meta">Foundation</span>
            <h3>Visual practice</h3>
            <p>
              Building an approach rooted in editorial composition, thoughtful
              hierarchy, and motion that feels intentional rather than
              decorative.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
