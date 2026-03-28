export default function InterestPage() {
  return (
    <div className="main-inner">
      <section className="section-intro">
        <span className="eyebrow">Explore the Lotties</span>
        <h2 className="section-title">
          Small motion studies, <span>saved for delight.</span>
        </h2>
        <p className="section-copy">
          This section works as a lightweight archive for the Lotties that
          helped explain a feature faster, celebrate an action better, or add a
          subtle human beat to the product surface.
        </p>
      </section>

      <section className="interest-grid">
        <article className="interest-card">
          <span className="meta">Utility loops</span>
          <h3>Speak</h3>
          <p>
            Motion pieces designed to guide action, clarify state changes, and
            make system feedback feel calm and readable.
          </p>
        </article>

        <article className="interest-card">
          <span className="meta">Celebration cues</span>
          <h3>Celebrate</h3>
          <p>
            Expressive bursts for moments worth amplifying, built to feel
            rewarding without pushing the product into noise.
          </p>
        </article>

        <article className="interest-card">
          <span className="meta">Unexpected details</span>
          <h3>Surprise</h3>
          <p>
            Quiet experiments in rhythm, pacing, and personality that make
            everyday interfaces feel a little more alive.
          </p>
        </article>
      </section>

      <p className="footer-note">
        A shelf for motion references, reusable ideas, and small studies with a
        point of view.
      </p>
    </div>
  );
}
