export type CaseStudyKey = "blinkit" | "hunch" | "snatchwars";

export type CaseStudy = {
  eyebrow: string;
  title: string;
  accent: string;
  lede: string;
  pills: string[];
  fileId: string;
  status: string;
  project: string;
  role: string;
  type: string;
  focus: string;
  summary: string;
  record: string;
  availability: string;
};

export const caseStudies: Record<CaseStudyKey, CaseStudy> = {
  blinkit: {
    eyebrow: "Selected work",
    title: "My Impact",
    accent: "at Blinkit",
    lede:
      "A curated in-house body of work across product storytelling, growth communication, and motion systems that help a fast-moving product stay clear, useful, and expressive.",
    pills: ["Product", "Motion", "Systems"],
    fileId: "BL-2025-01",
    status: "Selected work",
    project: "My Impact at Blinkit",
    role: "Visual & Motion Designer",
    type: "In-house work",
    focus: "Product communication, motion systems, and launch storytelling",
    summary:
      "A running set of launch moments, product narratives, and visual systems designed to perform under speed while keeping the experience polished.",
    record: "Flagship portfolio file",
    availability: "Detailed walkthrough on request"
  },
  hunch: {
    eyebrow: "Product case study",
    title: "Hunch",
    accent: "Website",
    lede:
      "A product design case study focused on shaping a clearer web narrative, tightening hierarchy, and building a more intentional bridge between brand expression and product understanding.",
    pills: ["Website", "Narrative", "Product Design"],
    fileId: "HN-2025-02",
    status: "Case study",
    project: "Hunch Website",
    role: "Product Design",
    type: "Website case study",
    focus: "Information structure, visual hierarchy, and narrative clarity",
    summary:
      "A single product case file reworked to feel more focused, editorial, and easier to scan while preserving the clarity needed for a product story.",
    record: "Product case study folder",
    availability: "Full case narrative on request"
  },
  snatchwars: {
    eyebrow: "Campaign case study",
    title: "Snatch",
    accent: "Wars",
    lede:
      "A festive Blinkit campaign built around sibling rivalry, mobile-web play, and a sharper use of nostalgia than a typical gifting narrative.",
    pills: ["Campaign", "Motion", "Mobile Web"],
    fileId: "BL-2024-02",
    status: "Campaign case study",
    project: "Snatch Wars",
    role: "Visual & Motion Designer",
    type: "Festive campaign",
    focus: "Interaction concept, visual language, and product-led storytelling",
    summary:
      "A Rakhi campaign case study showing how playful sibling behavior was translated into a game mechanic that still felt native to Blinkit's product world.",
    record: "Blinkit festive case study",
    availability: "Detailed walkthrough on request"
  }
};
