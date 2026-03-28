import Image from "next/image";
import Link from "next/link";
import { DeviceMockup } from "@/components/case-study/Primitives";
import { DraggableNoteBoard } from "@/components/case-study/DraggableNoteBoard";

const heroPhones = [
  {
    title: "Merchandising",
    subtitle: "Gets visibility",
    imageSrc: "/assets/Screen1-PT-Design-mock.png",
    imageAlt: "Blinkit IPL homepage widget screen",
    width: 296,
    rotation: 0,
    className: "unity-case__hero-phone"
  },
  {
    title: "Engagement",
    subtitle: "Creates participation",
    imageSrc: "/assets/Screen1-spin-win-mock.png",
    imageAlt: "Blinkit Spin and Win screen",
    width: 296,
    rotation: 0,
    className: "unity-case__hero-phone"
  },
  {
    title: "Brand",
    subtitle: "Brings growth",
    imageSrc: "/assets/Screen1-chennai-brand-store-mock.png",
    imageAlt: "Blinkit brand landing page screen",
    width: 296,
    rotation: 0,
    className: "unity-case__hero-phone"
  }
];

const sidebarSections = [
  "Overview",
  "Problem Statement",
  "Design Mandate",
  "Spin & Win",
  "Brand Partnerships",
  "Merchandising",
  "Impact"
];

const systemPillars = [
  {
    title: "Respect Blinkit’s Utility-First Identity",
    body:
      "IPL theming must feel timely without disrupting non-cricket shoppers. Every element earns its homepage placement"
  },
  {
    title: "Build for Scale, Not One Campaign",
    body:
      "Widget, brand pages, spin wheel assets to be designed as reusable modules"
  },
  {
    title: "Brand Visibility",
    body:
      "Sponsors needed more than logo exposure. We turned every interaction into revenue: discover reward / browse sponsor products / redeem brand offers. Engagement that pays back"
  }
];

const surfaceRows = [
  {
    surface: "Homepage Prime-Time Widget",
    purpose: "Frames the live IPL layer on Blinkit’s highest-value surface.",
    module: "Header + match strip + product rail",
    result: "4–5% CTR during prime-time"
  },
  {
    surface: "Spin & Win",
    purpose: "Adds a reward loop that feels playful without breaking core shopping flow.",
    module: "Reusable gamified overlay",
    result: "90–95% completion"
  },
  {
    surface: "Brand Pages",
    purpose: "Routes the right sponsor to the right match day and category page.",
    module: "10 city-led landing pages",
    result: "High sponsor recall + basket path"
  },
  {
    surface: "Semi-final / Final Variations",
    purpose: "Extends the same logic to edge cases and high-stakes moments.",
    module: "State-based homepage variants",
    result: "Zero daily redesign"
  }
];

const coverageRows = [
  {
    feature: "Live IPL context",
    homepage: true,
    brandPage: true,
    spin: true
  },
  {
    feature: "Brand-to-basket conversion path",
    homepage: true,
    brandPage: true,
    spin: false
  },
  {
    feature: "Reusable post-IPL",
    homepage: false,
    brandPage: true,
    spin: true
  },
  {
    feature: "Single-tap interaction",
    homepage: false,
    brandPage: true,
    spin: true
  },
  {
    feature: "Needs daily redesign",
    homepage: false,
    brandPage: false,
    spin: false
  }
];

const brandPages = [
  { title: "Chennai", src: "/assets/Chennai-Landing Page 1.png" },
  { title: "Hyderabad", src: "/assets/Hyderabad-Landing Page-1 1.png" },
  { title: "Kolkata", src: "/assets/Kolkata-Landing Page-2 1.png" },
  { title: "Gujarat", src: "/assets/Gujarat-Landing Page-3 1.png" },
  { title: "Mumbai", src: "/assets/Mumbai-Landing Page-5 1.png" },
  { title: "Bangalore", src: "/assets/Bangalore-Landing Page-6 1.png" },
  { title: "Delhi", src: "/assets/Delhi-Landing Page-7 1.png" },
  { title: "Rajasthan", src: "/assets/rajasthan-Landing Page-8 1.png" },
  { title: "Lucknow", src: "/assets/Lucknow-Landing Page-9 1.png" },
  { title: "Punjab", src: "/assets/Punjab-Landing Page-4 1.png" }
];

const campaignExtensions = [
  {
    title: "Valentine’s",
    subtitle: "Spin & Win for gifting",
    src: "/assets/Valentine-Spin.png"
  },
  {
    title: "New User",
    subtitle: "Free gift onboarding hook",
    src: "/assets/New-user-spin.png"
  },
  {
    title: "Daawat’s Biryani Day",
    subtitle: "Category-led festive commerce",
    src: "/assets/Daawat-spin.png"
  }
];

const impactMetrics = [
  { value: "4–5%", label: "Prime-time widget CTR" },
  { value: "90–95%", label: "Spin & Win completion" },
  { value: "20–25%", label: "Repeat spin frequency" },
  { value: "66 days", label: "Live system runtime" }
];

const spinResearchNotes = [
  {
    label: "Google Pay’s",
    title: "Tez Shots",
    tone: "yellow" as const,
    rotation: -2
  },
  {
    label: "Zepto’s",
    title: "Super-Over",
    tone: "yellow" as const,
    rotation: 3
  },
  {
    label: "Zomato’s",
    title: "Prediction League",
    tone: "yellow" as const,
    rotation: -1
  }
];

const spinIdeaNotes = [
  {
    label: "Idea 1",
    title: "Milestone Levels",
    tone: "green" as const,
    rotation: -2
  },
  {
    label: "Idea 2",
    title: "Collectible Team Cards & Leaderboard",
    tone: "green" as const,
    rotation: 2
  },
  {
    label: "Idea 3",
    title: "Collectible Image pieces to complete the puzzle",
    tone: "green" as const,
    rotation: -1
  }
];

const spinInsightCards = [
  {
    title: "Key Gap Identified",
    tone: "red" as const,
    bullets: [
      "Instant gratification +",
      "Universal appeal (zero prior knowledge) +",
      "Daily returnability"
    ]
  },
  {
    title: "Why it works for us?",
    tone: "green" as const,
    bullets: [
      "Zero learning curve +",
      "Works for both cricket & non-cricket fans +",
      "Reusable Scalable module +",
      "Single-tap interaction +",
      "Feature which can be build by tech in 2-3 weeks"
    ]
  }
];

const spinProblemNotes = [
  {
    title: "Offer text not visible",
    body: "With more offer detail and less space in the wheel, text is not readable",
    tone: "lavender" as const,
    rotation: -3
  },
  {
    title: "Speed looks computerised",
    body: "No easing, or peak - spins and stops at a constant pace.",
    tone: "peach" as const,
    rotation: 2
  },
  {
    title: "Not feel real / user-controlled",
    body: "The spin experience felt unintuitive and lacked anticipation",
    tone: "yellow" as const,
    rotation: -2
  },
  {
    title: "Brand visibility vs scalability",
    body: "Per-brand colours create a brittle, unmaintainable system in the long run",
    tone: "green" as const,
    rotation: 3
  }
];

const brandIntroNotes = [
  {
    title: "1. Sponsorship",
    body: "Each brand sponsored a team across all IPL matches",
    tone: "lavender" as const,
    rotation: -2
  },
  {
    title: "2. Brand colours",
    body:
      "The brand colours were decided based on the team jersey they are sponsoring to create resonance when the user sees these tiles",
    tone: "peach" as const,
    rotation: 1
  },
  {
    title: "3. Team names",
    body: "Named by city, not team since we have no rights to use official team names",
    tone: "yellow" as const,
    rotation: -1
  }
];

const homepageVariationScreens = [
  {
    title: "Semi-finals",
    subtitle: "Colours changing as per the team",
    src: "/assets/Semi-final01.png",
    alt: "Semi-finals homepage variation"
  },
  {
    title: "Finals",
    subtitle: "Design",
    src: "/assets/Semi-final02.png",
    alt: "Finals homepage variation"
  },
  {
    title: "If Bangalore wins",
    subtitle: "Only live in bangalore for few hours",
    src: "/assets/Punjba-wins.png",
    alt: "If Bangalore wins variation"
  },
  {
    title: "If Punjab wins",
    subtitle: "Only live in Punjab for few hours",
    src: "/assets/Bangalore-wins.png",
    alt: "If Punjab wins variation"
  }
];

const spinPhysicsPoints = [
  {
    label: "1. Speed Curve",
    body:
      "Most digital wheels feel linear and predictable. We built a custom bezier curve to mimic real-world physics and extend anticipation before the reveal - slow start, peak speed, smooth deceleration."
  },
  {
    label: "2. Haptic & Audio ‘Tak Tak’",
    body:
      "Real wheels create a rhythmic “tak tak” as the stopper hits rim notches. We recreated this digitally using boundary markers - triggering haptic pulses and audio cues on contact. The result: a grounded, physically authentic spin rhythm instead of a silent animation."
  },
  {
    label: "3. Touch-to-Spin Gesture",
    body:
      "User research in-office revealed that people instinctively try to physically swipe the wheel to spin it the same motion you'd use with a physical wheel. We added a swipe-to-spin gesture where a rotational touch movement with sufficient angular velocity triggers the spin. The 'Spin Now' button remained as a fallback for accessibility."
  },
  {
    label: "4. Surprise Ending",
    body:
      "Real wheels create suspense because you never know if the wheel will stop on the current segment or creep past it to the next. We replicated this by having the wheel occasionally decelerate to a near-stop at a segment boundary, then move past it — creating a micro-moment suspense before landing on the final result."
  }
];

const problemCards = [
  {
    label: "1. Scale",
    title: "IPL spans 10 teams, 74 matches, and 66 days",
    body: "The system needed to operate without manual daily intervention"
  },
  {
    label: "2. Revenue Risk",
    title: "Brand partnerships drive real revenue",
    body: "Poor execution risks low performance and churned sponsors"
  },
  {
    label: "3. User Trust",
    title: "Blinkit’s core promise is speed and clarity",
    body: "Over-promotion or clutter risks weakening that trust"
  }
];

function MatrixCell({ active }: { active: boolean }) {
  return active ? (
    <svg className="unity-case__check" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ) : (
    <div className="unity-case__dot" aria-hidden="true" />
  );
}

export default function BlinkitCaseStudy() {
  return (
    <div className="unity-case">
      <nav className="unity-case__nav">
        <div className="unity-case__nav-logo">BLINKIT / IPL 2025</div>
        <Link className="unity-case__nav-close" href="/">
          Close / Index
        </Link>
      </nav>

      <div className="unity-case__blob" aria-hidden="true" />

      <div className="unity-case__layout">
        <aside className="unity-case__sidebar">
          <ul className="unity-case__sidebar-list">
            {sidebarSections.map((item, index) => (
              <li key={item} className={index === 0 ? "is-active" : undefined}>
                {item}
              </li>
            ))}
          </ul>
        </aside>

        <main className="unity-case__content">
          <section className="unity-case__hero">
            <div className="unity-case__hero-intro">
              <Image
                src="/assets/Blinkit-logo.png"
                alt="Blinkit"
                width={164}
                height={60}
                className="unity-case__hero-brand"
              />
              <h1 className="unity-case__title">
                Designing a Scalable
                <br />
                IPL Engagement System
              </h1>
            </div>

            <div className="unity-case__hero-support">
              <p className="unity-case__lead unity-case__lead--hero">
                A product design case study across [merchandising], [gamified engagement] and
                [Brand partnerships]; built to drive conversion during India&apos;s biggest sporting
                event - IPL
              </p>
            </div>

            <div className="unity-case__visual">
              <div className="unity-case__mesh-sphere" />
              <div className="unity-case__hero-showcase">
                {heroPhones.map((phone) => (
                  <article className="unity-case__hero-panel" key={phone.imageSrc}>
                    <div className="unity-case__hero-panel-copy">
                      <h3>{phone.title}</h3>
                      <p>{phone.subtitle}</p>
                    </div>
                    <DeviceMockup
                      imageSrc={phone.imageSrc}
                      imageAlt={phone.imageAlt}
                      width={phone.width}
                      rotation={phone.rotation}
                      className={phone.className}
                    />
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="unity-case__problem">
            <div className="unity-case__problem-head">
              <span className="unity-case__problem-label">Problem statement</span>
              <p className="unity-case__problem-copy">
                Every IPL season, Blinkit receives brand commitments - free tickets, dugout seats,
                discounts, product samples &amp; more.{" "}
                <span className="unity-case__problem-underline">
                  The problem wasn&apos;t inventory. It was how rewards were surfaced and distributed.
                </span>
              </p>
              <p className="unity-case__problem-copy unity-case__problem-copy--alert">
                Without structure, deals surfaced as generic banners and free tickets felt too good
                to be true; delivering poor brand ROI, weak engagement, and wasted partnership
                value.
              </p>
            </div>

            <div className="unity-case__problem-grid">
              {problemCards.map((card, index) => (
                <article
                  className={`unity-case__card unity-case__problem-card unity-case__problem-card--${index + 1}`}
                  key={card.label}
                >
                  <div className="unity-case__card-glow" aria-hidden="true" />
                  <div className="unity-case__card-inner">
                    <span className="unity-case__label">{card.label}</span>
                    <h2 className="unity-case__card-title">{card.title}</h2>
                    <p className="unity-case__card-copy">{card.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="unity-case__features">
            <div className="unity-case__features-head">
              <span className="unity-case__problem-label">Design mandate</span>
            </div>
            {systemPillars.map((pillar) => (
              <article className="unity-case__feature" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </article>
            ))}
            <p className="unity-case__features-result">
              RESULT : A 66-day live system with zero daily design intervention across 10 sponsors,
              74 matches, and millions of users.
            </p>
          </section>

          <section className="unity-case__mandate">
            <article className="unity-case__spin-banner">
              <div className="unity-case__spin-number" aria-hidden="true">
                01
              </div>
              <div className="unity-case__spin-device-wrap">
                <DeviceMockup
                  imageSrc="/assets/Screen1-spin-win-mock.png"
                  imageAlt="Spin & Win mockup"
                  width={320}
                  rotation={-14}
                  className="unity-case__spin-device"
                />
              </div>
              <div className="unity-case__spin-device-wrap unity-case__spin-device-wrap--right">
                <DeviceMockup
                  imageSrc="/assets/Screen1-spin-win-mock.png"
                  imageAlt="Spin & Win mockup"
                  width={258}
                  rotation={12}
                  className="unity-case__spin-device unity-case__spin-device--right"
                />
              </div>
              <div className="unity-case__spin-copy">
                <h2 className="unity-case__spin-title">Spin &amp; Win</h2>
                <p className="unity-case__spin-label">[ PHYSICS INSPIRED GAMIFICATION ]</p>
              </div>
            </article>
          </section>

          <section className="unity-case__spin-research">
            <div className="unity-case__spin-research-head unity-case__spin-research-head--compact">
              <p className="unity-case__spin-research-label">Competitive research</p>
            </div>

            <div className="unity-case__spin-research-grid">
              <DraggableNoteBoard notes={spinResearchNotes} />
            </div>

            <div className="unity-case__spin-research-head unity-case__spin-research-head--ideas">
              <p className="unity-case__spin-research-label">New ideas</p>
            </div>

            <div className="unity-case__spin-research-grid unity-case__spin-research-grid--ideas">
              <DraggableNoteBoard notes={spinIdeaNotes} />
            </div>

            <div className="unity-case__spin-research-head unity-case__spin-research-head--insight">
              <span className="unity-case__problem-label">Why Spin &amp; Win?</span>
            </div>

            <div className="unity-case__spin-insight-grid">
              {spinInsightCards.map((card) => (
                <article
                  className={`unity-case__spin-insight-card unity-case__spin-insight-card--${card.tone}`}
                  key={card.title}
                >
                  <div className="unity-case__spin-insight-pin" />
                  <h3 className="unity-case__spin-insight-title">{card.title}</h3>
                  <ul className="unity-case__spin-insight-list">
                    {card.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="unity-case__spin-research-head unity-case__spin-research-head--major">
              <span className="unity-case__problem-label">
                Major problem statements in Spin &amp; Win used by brands?
              </span>
              <p className="unity-case__spin-research-subtitle">as part of the competitive analysis</p>
            </div>

            <div className="unity-case__spin-problem-grid">
              {spinProblemNotes.map((note, index) => (
                <div className="unity-case__spin-problem-stack" key={note.title}>
                  <article
                    className={`unity-case__spin-problem-note unity-case__spin-problem-note--${note.tone}`}
                    style={{ transform: `rotate(${note.rotation}deg)` }}
                  >
                    <h3 className="unity-case__spin-problem-title">{note.title}</h3>
                    <p className="unity-case__spin-problem-copy">{note.body}</p>
                  </article>

                  {index === 0 ? (
                    <div className="unity-case__spin-solution-wrap">
                      <svg
                        className="unity-case__spin-solution-arrow"
                        viewBox="0 0 160 120"
                        aria-hidden="true"
                      >
                        <path d="M76 6 C76 42, 104 44, 104 78" />
                        <path d="M98 72 L104 80 L110 72" />
                      </svg>
                      <article className="unity-case__spin-solution-note">
                        <span className="unity-case__spin-solution-label">Solution</span>
                        <p className="unity-case__spin-solution-copy">
                          Evaluated all possible offer variations and defined a character limit to
                          ensure consistency and prevent text truncation
                        </p>
                      </article>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          <section className="unity-case__spin-physics">
            <div className="unity-case__spin-physics-connector" aria-hidden="true">
              <svg viewBox="0 0 640 180" className="unity-case__spin-physics-connector-svg">
                <path d="M120 10 C170 68, 270 78, 316 128" />
                <path d="M305 118 L316 128 L330 118" />
              </svg>
            </div>
            <div className="unity-case__spin-physics-head">
              <h2 className="unity-case__section-title">How we made it feel real</h2>
              <p className="unity-case__spin-research-subtitle">
                4 physical properties of a real wheel. Engineered digitally
              </p>
            </div>

            <div className="unity-case__spin-physics-layout">
              <div className="unity-case__spin-physics-row">
                <div className="unity-case__spin-physics-point">
                  <h3>{spinPhysicsPoints[0].label}</h3>
                  <p>{spinPhysicsPoints[0].body}</p>
                </div>

                <div className="unity-case__spin-physics-visual unity-case__spin-physics-visual--graph">
                  <div className="unity-case__spin-curve-card">
                    <svg viewBox="0 0 760 420" className="unity-case__spin-curve-svg" aria-hidden="true">
                      <defs>
                        <linearGradient id="spinCurveGradient" x1="90" y1="120" x2="690" y2="350" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#f48b00" />
                          <stop offset="100%" stopColor="#f2cf67" />
                        </linearGradient>
                      </defs>
                      <path className="unity-case__spin-curve-axis" d="M90 350 L90 70" />
                      <path className="unity-case__spin-curve-axis" d="M90 350 L690 350" />
                      <path
                        className="unity-case__spin-curve-guide"
                        d="M170 120 L170 350 M90 120 L365 120"
                      />
                      <path
                        className="unity-case__spin-curve-line"
                        d="M90 350 C120 170, 135 120, 170 120 C245 110, 330 112, 405 128 C485 146, 535 238, 575 288 C612 332, 655 346, 690 350"
                      />
                    </svg>
                    <span className="unity-case__spin-curve-speed">Speed</span>
                    <span className="unity-case__spin-curve-time">Time</span>
                    <span className="unity-case__spin-curve-label unity-case__spin-curve-label--plateau">
                      Constant speed
                    </span>
                    <span className="unity-case__spin-curve-label unity-case__spin-curve-label--ramp">
                      Fast ramp up
                    </span>
                    <span className="unity-case__spin-curve-label unity-case__spin-curve-label--decel">
                      Long deceleration
                    </span>
                  </div>
                </div>
              </div>

              <div className="unity-case__spin-physics-row">
                <div className="unity-case__spin-physics-point">
                  <h3>{spinPhysicsPoints[2].label}</h3>
                  <p>{spinPhysicsPoints[2].body}</p>
                </div>

                <div className="unity-case__spin-physics-visual">
                  <Image
                    src="/assets/Touch-to-Spin Gesture.png"
                    alt="Touch-to-spin gesture illustration"
                    width={420}
                    height={420}
                    className="unity-case__spin-physics-image"
                  />
                </div>
              </div>

              <div className="unity-case__spin-physics-row unity-case__spin-physics-row--text-only">
                <div className="unity-case__spin-physics-point">
                  <h3>{spinPhysicsPoints[1].label}</h3>
                  <p>{spinPhysicsPoints[1].body}</p>
                </div>
                <div className="unity-case__spin-physics-visual unity-case__spin-physics-visual--empty" />
              </div>

              <div className="unity-case__spin-physics-row">
                <div className="unity-case__spin-physics-point">
                  <h3>{spinPhysicsPoints[3].label}</h3>
                  <p>{spinPhysicsPoints[3].body}</p>
                </div>

                <div className="unity-case__spin-physics-ending-group">
                  <div className="unity-case__spin-ending-card">
                    <Image
                      src="/assets/Mock-ending 1.gif"
                      alt="Mock-ending 1"
                      width={260}
                      height={260}
                      className="unity-case__spin-physics-image"
                      unoptimized
                    />
                    <span className="unity-case__spin-ending-label">Mock-ending 1</span>
                  </div>
                  <div className="unity-case__spin-ending-card">
                    <Image
                      src="/assets/Mock-ending 1.gif"
                      alt="Mock-ending 1"
                      width={260}
                      height={260}
                      className="unity-case__spin-physics-image"
                      unoptimized
                    />
                    <span className="unity-case__spin-ending-label">Mock-ending 1</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="unity-case__spin-final">
            <article className="unity-case__spin-final-card">
              <span className="unity-case__spin-final-label">[ The final Spin &amp; Win mock ]</span>
              <div className="unity-case__spin-final-device">
                <Image
                  src="/assets/Mock_Spin-Win.gif"
                  alt="Final Spin & Win mock"
                  width={360}
                  height={780}
                  className="unity-case__spin-final-image"
                  unoptimized
                />
              </div>
            </article>
          </section>

          <section className="unity-case__brand-intro">
            <article className="unity-case__brand-banner">
              <div className="unity-case__spin-number unity-case__spin-number--brand" aria-hidden="true">
                02
              </div>
              <div className="unity-case__brand-copy">
                <h2 className="unity-case__spin-title">Brand partnerships</h2>
                <p className="unity-case__spin-label">[ BRAND CORNER ]</p>
              </div>
            </article>

            <div className="unity-case__brand-brief">
              <span className="unity-case__brand-brief-label">[ Brief ]</span>
              <ul className="unity-case__brand-brief-list">
                <li>Visibility on multiple levels for 10 different team sponsors</li>
                <li>Ability to highlight the hero brand of each match</li>
                <li>Flexible system to showcase various offer types</li>
              </ul>
            </div>

            <div className="unity-case__brand-note-grid">
              {brandIntroNotes.map((note) => (
                <article
                  className={`unity-case__brand-note unity-case__brand-note--${note.tone}`}
                  key={note.title}
                  style={{ transform: `rotate(${note.rotation}deg)` }}
                >
                  <h3 className="unity-case__brand-note-title">{note.title}</h3>
                  <p className="unity-case__brand-note-copy">{note.body}</p>
                </article>
              ))}
            </div>

            <div className="unity-case__brand-divider" aria-hidden="true" />

            <div className="unity-case__brand-iteration">
              <div className="unity-case__brand-iteration-visual">
                <Image
                  src="/assets/Brand_phone mock_entry.png"
                  alt="Brand phone mock entry"
                  width={540}
                  height={520}
                  className="unity-case__brand-iteration-image"
                />
              </div>

              <div className="unity-case__brand-iteration-copy">
                <p className="unity-case__brand-iteration-body">
                  After several rounds of iteration, we landed on a tile design that does three
                  things simultaneously:
                </p>
                <ul className="unity-case__brand-iteration-list">
                  <li>
                    <span className="unity-case__brand-iteration-check" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    <span>Surfaces the right brand on the right match day,</span>
                  </li>
                  <li>
                    <span className="unity-case__brand-iteration-check" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    <span>Stays non-intrusive for users who aren&apos;t here for cricket,</span>
                  </li>
                  <li>
                    <span className="unity-case__brand-iteration-check" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    <span>Respects Blinkit&apos;s first-scroll real estate</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="unity-case__brand-divider" aria-hidden="true" />

            <div className="unity-case__brand-colours">
              <div className="unity-case__brand-colours-copy">
                <span className="unity-case__brand-brief-label">[ Colours tied to jersey, not brand ]</span>
                <p className="unity-case__brand-iteration-body">
                  Brand colors were derived directly from each team&apos;s jersey; creating an instant
                  visual link from homepage tile to brand landing page.
                </p>
              </div>

              <div className="unity-case__brand-colours-visual">
                <Image
                  src="/assets/Brand-entry-point.png"
                  alt="Brand entry point mapping"
                  width={760}
                  height={1520}
                  className="unity-case__brand-colours-image"
                />
              </div>
            </div>
          </section>

          <section className="unity-case__brand-pages">
            <div className="unity-case__brand-pages-head">
              <span className="unity-case__label">Brand Visualization</span>
              <h2 className="unity-case__section-title">
                10 brand pages
                <br />
                One each team
              </h2>
              <p className="unity-case__brand-pages-copy">
                <span>Scroll to view</span>
                <span className="unity-case__brand-pages-arrow" aria-hidden="true">
                  →
                </span>
              </p>
            </div>

            <div className="unity-case__brand-rail">
              {brandPages.map((page) => (
                <article className="unity-case__brand-card" key={page.src}>
                  <span className="unity-case__brand-title">{page.title}</span>
                  <Image
                    src={page.src}
                    alt={`${page.title} brand page`}
                    width={768}
                    height={1414}
                    sizes="260px"
                  />
                </article>
              ))}
            </div>
          </section>

          <section className="unity-case__scalability">
            <div className="unity-case__scalability-shell">
              <div className="unity-case__scalability-copy">
                <span className="unity-case__label">The scalability decision</span>
                <h2 className="unity-case__section-title">The scalability decision</h2>
                <p className="unity-case__scalability-subtitle">[ FOR BRAND VISIBILITY IN SPIN &amp; WIN ]</p>

                <div className="unity-case__scalability-row">
                  <div className="unity-case__scalability-kicker unity-case__scalability-kicker--negative">
                    FIRST INSTINCT ✗
                  </div>
                  <div className="unity-case__scalability-text">
                    <h3>Unique color per brand</h3>
                    <p>
                      Each sponsored brand gets its own color on the wheel tile. Looks rich.
                      Breaks the moment any sponsor changes.
                    </p>
                  </div>
                </div>

                <div className="unity-case__scalability-divider" aria-hidden="true" />

                <div className="unity-case__scalability-row">
                  <div className="unity-case__scalability-kicker unity-case__scalability-kicker--positive">
                    DECISION ✓
                  </div>
                  <div className="unity-case__scalability-text">
                    <h3>4 semantic color slots</h3>
                    <p>
                      Dark blue (general), Black (no-win), Golden (jackpot), Light blue
                      (secondary). Brand identity lives in the logo only — fully brand-agnostic.
                    </p>
                  </div>
                </div>
              </div>

              <div className="unity-case__scalability-visuals">
                <Image
                  src="/assets/Scalability-decision-01.png"
                  alt="First instinct scalability approach"
                  width={420}
                  height={711}
                  className="unity-case__scalability-image unity-case__scalability-image--top"
                />
                <Image
                  src="/assets/Scalability-decision-02.png"
                  alt="Final scalability decision"
                  width={420}
                  height={352}
                  className="unity-case__scalability-image unity-case__scalability-image--bottom"
                />
              </div>
            </div>
          </section>

          <section className="unity-case__prime-entry">
            <Image
              src="/assets/Homepage-prime-entry point.png"
              alt="Homepage prime entry point"
              width={1600}
              height={1200}
              className="unity-case__prime-entry-image"
            />
          </section>

          <div className="unity-case__brand-divider" aria-hidden="true" />

          <section className="unity-case__homepage-variations">
            <div className="unity-case__homepage-variations-head">
              <h2 className="unity-case__section-title">Homepage Design variations</h2>
              <p className="unity-case__homepage-variations-subtitle">for semi-finals and finals</p>
            </div>

            <div className="unity-case__homepage-variations-grid">
              {homepageVariationScreens.map((screen) => (
                <article className="unity-case__homepage-variation-card" key={screen.src}>
                  <div className="unity-case__hero-panel-copy unity-case__hero-panel-copy--variation">
                    <h3>{screen.title}</h3>
                    <p>{screen.subtitle}</p>
                  </div>
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={420}
                    height={860}
                    className="unity-case__homepage-variation-image"
                  />
                </article>
              ))}
            </div>
          </section>

          <section className="unity-case__future">
            <div className="unity-case__future-head">
              <span className="unity-case__label">Post IPL Reuse</span>
              <h2 className="unity-case__section-title">Beyond IPL, the system kept scaling.</h2>
            </div>

            <div className="unity-case__future-grid">
              {campaignExtensions.map((campaign) => (
                <article className="unity-case__future-item" key={campaign.src}>
                  <span className="unity-case__future-title">{campaign.title}</span>
                  <span className="unity-case__future-subtitle">{campaign.subtitle}</span>
                  <DeviceMockup
                    imageSrc={campaign.src}
                    imageAlt={campaign.title}
                    width={236}
                    className="unity-case__future-device"
                  />
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>

      <section className="unity-case__cta">
        <div className="unity-case__cta-inner">
          <div>
            <span className="unity-case__label unity-case__label--dark">Impact</span>
            <h2 className="unity-case__cta-title">
              A reusable IPL layer
              <br />
              built for scale.
            </h2>
            <Link href="/" className="unity-case__cta-button">
              Back to Works
            </Link>
          </div>

          <div className="unity-case__impact-grid">
            {impactMetrics.map((metric) => (
              <article className="unity-case__impact-item" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
