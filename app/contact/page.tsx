export default function ContactPage() {
  return (
    <div className="main-inner contact-stage">
      <section className="contact-visual" aria-hidden="true">
        <div className="contact-ghost" />
        <div className="contact-poster">
          <div className="poster-header">
            <span className="eyebrow">Direct line</span>
            <div className="poster-stamp">
              Open
              <br />
              line
            </div>
          </div>

          <div className="poster-visual">
            <div className="poster-orbit">
              <div className="logo-frame">
                {/* TODO: add the actual Daisy logo file at /public/assets/daisy-logo.png */}
                <span className="logo-fallback logo-fallback--visible">DS</span>
              </div>
            </div>
          </div>

          <div className="poster-footer">
            <span className="eyebrow">Daisy Surana</span>
            <span className="eyebrow">Available for conversations</span>
          </div>
        </div>
      </section>

      <section>
        <span className="eyebrow">Contact</span>
        <h2 className="direct-title">
          Lets <span>connect</span>
        </h2>
        <p className="contact-copy">
          For collaborations, portfolio walkthroughs, product storytelling, or
          motion-led design work, reach out directly by mail.
        </p>
        <a className="contact-link" href="mailto:daisy.surana@grofers.com">
          daisy.surana@grofers.com
        </a>
      </section>
    </div>
  );
}
