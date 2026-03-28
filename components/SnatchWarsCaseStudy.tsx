import Image from "next/image";
import Link from "next/link";
import {
  Container,
  EditorialHeading,
  EyebrowLabel,
  MetadataBlock,
  SectionShell
} from "@/components/case-study/Primitives";

const sidebarSections = [
  "Overview",
  "Context",
  "Research",
  "Concept",
  "Prototype Pivot",
  "Version 2",
  "Impact",
  "Credits"
];

const researchQuestions = [
  "What's something you and your sibling fought over as kids?",
  "What's a memory that still makes you laugh or think about childhood moments?",
  "If you could replay one childhood rivalry, what would it be?"
];

const researchLearnings = [
  {
    title: "Pattern 1: Universal Objects of Desire",
    body:
      "Across age groups (23-40), 78% fought over the TV remote. 65% over chocolates. Age and location did not matter, the rivalries were universal."
  },
  {
    title: "Pattern 2: Losing Doesn't Sting",
    body:
      "\"Who won?\" -> \"Didn't matter.\" The fun was in the fight, not the outcome."
  },
  {
    title: "Pattern 3: Shared Screen = Shared Chaos",
    body:
      "When both players tried to grab the same object, they blocked each other's hands, pushed each other, and laughed. The screen became the battlefield."
  }
];

const conceptRules = [
  "2 players",
  "40 seconds",
  "Next object appears after 1.5 sec",
  "Max of 4 objects visible"
];

const pointRules = [
  {
    title: "If you grab - you get +1",
    fileLabel: "Rule mock 01"
  },
  {
    title: "If you miss - you get -1",
    fileLabel: "Rule mock 02"
  },
  {
    title: "Star: You get +3 (which is like a bonus star)",
    fileLabel: "Rule mock 03"
  }
];

const version2Screens = ["Round screen 01", "Round screen 02", "Round screen 03", "Round screen 04"];

const improvements = [
  {
    title: "Design for Solo Play",
    body: "50% played solo - we should have detected and guided this.",
    mock: "Playing alone? Invite someone! nudge"
  },
  {
    title: "Make Sharing Frictionless",
    body: "4% shared. Could have been 10%+ with better UX.",
    mock: "One-tap Instagram Story with auto-generated creative"
  },
  {
    title: "Build for Longevity",
    body: "This was a campaign. It should have become infrastructure for future festivals.",
    mock: "Seasonal object system"
  }
];

const credits = [
  "My Role : Product Design, Visual Design, Motion Design, User Research",
  "Timeline : 2 weeks (Ideation to launch)",
  "Platform : Mobile Web",
  "Team : 1 PM · 1 Designer · 2 Marketing Leads & others",
  "Tools : Figma · After Effects · Illustrator"
];

function PlaceholderScreen({
  label,
  caption,
  tall = false,
  warm = false
}: {
  label: string;
  caption?: string;
  tall?: boolean;
  warm?: boolean;
}) {
  return (
    <div
      className={`rakhi-case__placeholder ${tall ? "rakhi-case__placeholder--tall" : ""} ${
        warm ? "rakhi-case__placeholder--warm" : ""
      }`.trim()}
    >
      <div className="rakhi-case__placeholder-noise" />
      <span className="rakhi-case__placeholder-label">{label}</span>
      {caption ? <span className="rakhi-case__placeholder-caption">{caption}</span> : null}
    </div>
  );
}

export default function SnatchWarsCaseStudy() {
  return (
    <div className="unity-case rakhi-case">
      <nav className="unity-case__nav">
        <Link href="/" className="unity-case__nav-logo">
          BLINKIT / RAKHI 2025
        </Link>
        <Link href="/" className="unity-case__nav-close">
          Close / Index
        </Link>
      </nav>

      <div className="unity-case__blob unity-case__blob--rakhi" aria-hidden="true" />

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
          <section className="unity-case__hero rakhi-case__hero">
            <div className="unity-case__hero-intro">
              <span className="unity-case__label">The Rakhi Delight Game</span>
              <h1 className="unity-case__title">Snatch Wars</h1>
              <p className="unity-case__lead unity-case__lead--hero unity-case__lead--narrow">
                Designing nostalgia-driven play for 260,000 siblings
              </p>
            </div>

            <div className="unity-case__hero-support">
              <MetadataBlock
                className="unity-case__metadata rakhi-case__meta"
                items={[
                  "My Role : Visual & Motion Designer · Product Thinking",
                  "Timeline : 2 weeks (Ideation to Tech handover) · Platform : Mobile Web",
                  "Team : 1 PM · 1 Designer · 2 Marketing Leads & more"
                ]}
              />
            </div>

            <div className="unity-case__visual rakhi-case__hero-visual">
              <div className="unity-case__mesh-sphere" />
              <div className="rakhi-case__hero-poster">
                <div className="rakhi-case__hero-badge">Rakhi Delight Game</div>
                <div className="rakhi-case__hero-headline">
                  <span>Snatch</span>
                  <span>Wars</span>
                </div>
                <p>Shared-screen chaos for siblings, built for mobile web.</p>
                <div className="rakhi-case__hero-hands">
                  <span className="rakhi-case__hand rakhi-case__hand--pink" />
                  <span className="rakhi-case__hand rakhi-case__hand--yellow" />
                </div>
                <div className="rakhi-case__hero-tag">Insert one mock screen</div>
              </div>
            </div>
          </section>

          <SectionShell className="rakhi-case__context" tone="plain">
            <Container className="rakhi-case__container">
              <div className="rakhi-case__split rakhi-case__split--context">
                <div className="rakhi-case__copy-stack">
                  <span className="unity-case__problem-label">Context</span>
                  <EditorialHeading size="section">
                    Rakhi is not about expensive gifts. It is about stealing chocolates, fighting
                    over the remote, and the playful chaos only siblings understand.
                  </EditorialHeading>
                  <p className="unity-case__lead">
                    Could we bottle this feeling?
                  </p>
                </div>

                <div className="rakhi-case__context-card">
                  <h3>The challenge</h3>
                  <p>
                    How could Blinkit create an experience that makes people smile, feels authentic
                    to the festival, and still stays true to Blinkit's fast, utility-driven brand?
                  </p>
                  <h3>The strategic question</h3>
                  <p>
                    How might we help siblings reconnect through shared nostalgia, while showcasing
                    Blinkit's product range in a way that feels natural, not like merchandising?
                  </p>
                  <h3>The opportunity</h3>
                  <p>Turn nostalgic rivalry into a shared-screen game.</p>
                </div>
              </div>
            </Container>
          </SectionShell>

          <SectionShell className="rakhi-case__research" tone="plain">
            <Container className="rakhi-case__container">
              <div className="rakhi-case__section-head">
                <span className="unity-case__problem-label">Research</span>
                <p className="unity-case__lead unity-case__lead--narrow">
                  We spoke to 25+ colleagues who had siblings and traced the childhood fights they
                  still remembered instantly.
                </p>
              </div>

              <div className="rakhi-case__research-grid">
                <div className="rakhi-case__questions">
                  <h3>We asked simple questions:</h3>
                  <ol>
                    {researchQuestions.map((question) => (
                      <li key={question}>{question}</li>
                    ))}
                  </ol>
                </div>

                <div className="rakhi-case__learnings">
                  {researchLearnings.map((item) => (
                    <article key={item.title} className="rakhi-case__learning-card">
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </Container>
          </SectionShell>

          <SectionShell className="rakhi-case__concept" tone="panel">
            <Container className="rakhi-case__container">
              <div className="rakhi-case__section-head">
                <span className="unity-case__problem-label">Concept</span>
                <EditorialHeading size="section">
                  Shared rivalry, compressed into a simple 40-second mobile loop
                </EditorialHeading>
              </div>

              <div className="rakhi-case__rule-pills">
                {conceptRules.map((rule) => (
                  <span key={rule}>{rule}</span>
                ))}
              </div>

              <div className="rakhi-case__split">
                <div className="rakhi-case__mock-pair">
                  <PlaceholderScreen label="Dummy game screen 01" tall warm />
                  <PlaceholderScreen label="Dummy game screen 02" tall warm />
                </div>
                <div className="rakhi-case__copy-stack">
                  <p className="unity-case__lead unity-case__lead--narrow">
                    Based on the research, we made a list of objects siblings fought over so each
                    round could feel instantly recognizable.
                  </p>
                  <PlaceholderScreen
                    label="Image of products chosen for the game"
                    caption="Remote, chocolates, chips, and other nostalgic objects"
                  />
                  <div className="rakhi-case__sticker-row">
                    <article className="rakhi-case__sticker rakhi-case__sticker--pink">
                      <strong>Mom's favourite</strong>
                      <span>worth +5 points</span>
                    </article>
                    <article className="rakhi-case__sticker rakhi-case__sticker--yellow">
                      <strong>Dad's favourite</strong>
                      <span>worth +5 points</span>
                    </article>
                  </div>
                </div>
              </div>
            </Container>
          </SectionShell>

          <SectionShell className="rakhi-case__hands" tone="plain">
            <Container className="rakhi-case__container">
              <div className="rakhi-case__split rakhi-case__split--hands">
                <div className="rakhi-case__copy-stack">
                  <span className="unity-case__problem-label">Hand: design & movement</span>
                  <p className="unity-case__lead unity-case__lead--narrow">
                    The hand became the avatar for each player. Motion, overlap, and direction did
                    the job of character design while keeping the experience legible on a small
                    screen.
                  </p>
                </div>
                <PlaceholderScreen label="Insert hand design & movement image" caption="Right-side visual" />
              </div>
            </Container>
          </SectionShell>

          <SectionShell className="rakhi-case__rail" tone="plain">
            <Container className="rakhi-case__container">
              <div className="rakhi-case__section-head">
                <span className="unity-case__problem-label">
                  Initial design theme exploration that did not make the cut
                </span>
              </div>
              <div className="rakhi-case__image-rail">
                <PlaceholderScreen label="Exploration 01" />
                <PlaceholderScreen label="Exploration 02" />
                <PlaceholderScreen label="Exploration 03" />
                <PlaceholderScreen label="Exploration 04" />
              </div>
            </Container>
          </SectionShell>

          <SectionShell className="rakhi-case__pivot" tone="plain">
            <Container className="rakhi-case__container">
              <div className="rakhi-case__split rakhi-case__split--pivot">
                <div className="rakhi-case__copy-stack">
                  <span className="unity-case__problem-label">[ Version 1 ] : draft prototype</span>
                  <p className="unity-case__lead unity-case__lead--narrow">
                    The first prototype used drag interactions, trying to recreate the feeling of
                    physically snatching objects away from your sibling.
                  </p>
                </div>
                <article className="rakhi-case__crisis-card">
                  <span className="unity-case__label unity-case__label--dark">The pivot point</span>
                  <h3>[ Technical crisis ]</h3>
                  <p>
                    The screen could only register one click or drag. Multi-touch on a single
                    element with drag did not exist in our libraries, so the two-player drag
                    mechanic broke at the exact moment it needed to work.
                  </p>
                  <p>
                    We dropped object dragging and rebuilt the core interaction around tapping
                    rotating objects instead.
                  </p>
                </article>
              </div>
            </Container>
          </SectionShell>

          <SectionShell className="rakhi-case__version-two" tone="panel">
            <Container className="rakhi-case__container">
              <div className="rakhi-case__section-head">
                <span className="unity-case__problem-label">[ Version 2 ] : New game concept</span>
                <p className="unity-case__lead unity-case__lead--narrow">
                  Four objects appear in each round on a rotating wheel. Both players tap to grab
                  objects while they rotate. Whoever secures more objects wins the game.
                </p>
              </div>

              <div className="rakhi-case__image-grid rakhi-case__image-grid--four">
                {version2Screens.map((screen) => (
                  <PlaceholderScreen key={screen} label={screen} tall warm />
                ))}
              </div>

              <div className="rakhi-case__split rakhi-case__split--dynamic">
                <div className="rakhi-case__copy-stack">
                  <span className="unity-case__problem-label">Game screen dynamic</span>
                  <PlaceholderScreen label="Insert game screen dynamic image" caption="Motion rhythm and object timing" />
                </div>
                <div className="rakhi-case__copy-stack">
                  <span className="unity-case__problem-label">Game rules: [ Point system ]</span>
                  <p className="unity-case__lead unity-case__lead--narrow">
                    We simplified the point system and removed Mom's favourite / Dad's favourite,
                    since the moving base made the text too hard to read.
                  </p>
                  <div className="rakhi-case__rule-grid">
                    {pointRules.map((rule) => (
                      <article key={rule.title} className="rakhi-case__rule-card">
                        <h3>{rule.title}</h3>
                        <PlaceholderScreen label={rule.fileLabel} tall />
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </SectionShell>

          <SectionShell className="rakhi-case__final" tone="plain">
            <Container className="rakhi-case__container">
              <div className="rakhi-case__section-head">
                <span className="unity-case__problem-label">[ Version 2 ]</span>
                <EditorialHeading size="section">Final prototype</EditorialHeading>
              </div>
              <div className="rakhi-case__final-panel">
                <PlaceholderScreen label="Final Snatch Wars prototype" tall warm />
              </div>
            </Container>
          </SectionShell>

          <SectionShell className="rakhi-case__impact" tone="dark">
            <Container className="rakhi-case__container">
              <div className="rakhi-case__section-head rakhi-case__section-head--dark">
                <span className="unity-case__label unity-case__label--dark">What I'd do differently</span>
                <EditorialHeading size="section" className="rakhi-case__impact-title">
                  Better retention, better sharing, and a system that could outlive the campaign
                </EditorialHeading>
              </div>

              <div className="rakhi-case__improvement-grid">
                {improvements.map((item) => (
                  <article key={item.title} className="rakhi-case__improvement-card">
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                    <PlaceholderScreen label={item.mock} tall />
                  </article>
                ))}
              </div>
            </Container>
          </SectionShell>

          <SectionShell className="rakhi-case__rail rakhi-case__rail--bloopers" tone="plain">
            <Container className="rakhi-case__container">
              <div className="rakhi-case__section-head">
                <span className="unity-case__problem-label">Screens & Ideas: [ Design bloopers ]</span>
              </div>
              <div className="rakhi-case__image-rail">
                <PlaceholderScreen label="Bloopers 01" />
                <PlaceholderScreen label="Bloopers 02" />
                <PlaceholderScreen label="Bloopers 03" />
                <PlaceholderScreen label="Bloopers 04" />
                <PlaceholderScreen label="Bloopers 05" />
              </div>
            </Container>
          </SectionShell>

          <SectionShell className="rakhi-case__credits" tone="plain">
            <Container className="rakhi-case__container">
              <div className="rakhi-case__section-head">
                <span className="unity-case__problem-label">Credits & Tools</span>
              </div>

              <div className="rakhi-case__credits-grid">
                <MetadataBlock className="rakhi-case__credits-list" items={credits} />
                <div className="rakhi-case__credits-actions">
                  <Link href="/" className="unity-case__cta-button unity-case__cta-button--light">
                    Back to Works
                  </Link>
                  <div className="rakhi-case__credits-mark">
                    <Image src="/assets/Blinkit-logo.png" alt="Blinkit" width={146} height={52} />
                  </div>
                </div>
              </div>
            </Container>
          </SectionShell>
        </main>
      </div>
    </div>
  );
}
