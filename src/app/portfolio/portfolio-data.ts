export type Category =
  | "elearning"
  | "ai-resources"
  | "corporate"
  | "k12";

export const CATEGORIES: { id: Category; label: string; blurb: string }[] = [
  {
    id: "elearning",
    label: "eLearning & Digital Binders",
    blurb:
      "Courses and the web-based companion binders that carry a program between live sessions.",
  },
  {
    id: "ai-resources",
    label: "AI Resources for Educators",
    blurb:
      "Published classroom and professional-learning resources for using generative AI responsibly.",
  },
  {
    id: "corporate",
    label: "Corporate L&D & LMS",
    blurb:
      "Enterprise platform work, change-impact analysis, and development-ready design documentation.",
  },
  {
    id: "k12",
    label: "K–12 Curriculum & Apps",
    blurb:
      "Curriculum-aligned assessment design and learning applications built from the ground up.",
  },
];

export type Project = {
  slug: string;
  category: Category;
  title: string;
  attribution: string;
  role: string;
  format: string;
  status: "Live" | "Built" | "Shipped" | "In progress";
  summary: string;
  highlights: string[];
  tags: string[];
};

export const PROJECTS: Project[] = [
  /* ---------------- eLearning & Digital Binders ---------------- */
  {
    slug: "challenges-with-changes-course",
    category: "elearning",
    title: "Challenges with Changes: A Facilitator's Guide",
    attribution: "Youth development organization",
    role: "Instructional designer and developer",
    format: "Articulate Rise course, delivered via TalentLMS",
    status: "Shipped",
    summary:
      "A six-lesson eLearning course preparing supportive adults to work with adolescents through periods of change.",
    highlights: [
      "Foundations: purpose, principles and the supportive adult role",
      "Understanding adolescent change through a developmental lens",
      "Emotional awareness and regulation; coping, control and self-trust",
      "Group dynamics, boundaries and psychological safety",
      "Reflection, meaning-making and integration, with a graded knowledge check",
    ],
    tags: ["Articulate Rise", "TalentLMS", "Facilitator training"],
  },
  {
    slug: "challenges-with-changes-binder",
    category: "elearning",
    title: "Challenges with Changes: Facilitator's Binder",
    attribution: "Youth development organization",
    role: "Instructional designer and developer",
    format: "No-login web binder (Next.js, TypeScript, Tailwind)",
    status: "Built",
    summary:
      "A companion binder that mirrors the eLearning one tab per lesson, then adds what a course module cannot: somewhere to keep notes, reflect, and look up a framework mid-session.",
    highlights: [
      "One tab per course lesson, so facilitators never have to translate between two structures",
      "Persistent notes, a Step Back Journal, and a resource library alongside the lessons",
      "Practice knowledge check in the binder; the graded check stays in the LMS",
      "Scoped deliberately to supplement, not replace, the printed Facilitator Handbook",
    ],
    tags: ["Next.js", "Blended learning", "Job aid"],
  },
  {
    slug: "eap-facilitator-binder",
    category: "elearning",
    title: "EAP Facilitator Binder",
    attribution: "Youth development organization",
    role: "Instructional designer and developer",
    format: "Progressive web application",
    status: "Live",
    summary:
      "A digital binder for a facilitator development program, built to feel like paper and behave like software. It became the reference pattern for later binder projects rather than a one-off build.",
    highlights: [
      "Vertical section tabs with a binder-ring and page-flip treatment",
      "Auto-saving notes on every lesson page, with word count and timestamps",
      "Global search across both lesson content and the facilitator's own notes",
      "Note export to Markdown or print; offline note access via service worker",
      "Fully keyboard navigable with screen reader support",
    ],
    tags: ["Next.js", "Framer Motion", "Accessibility", "PWA"],
  },
  {
    slug: "real-leadership-binder",
    category: "elearning",
    title: "REAL Leadership — Learner Binder",
    attribution: "Youth development organization",
    role: "Instructional designer and developer",
    format: "Standalone Next.js learner site",
    status: "Live",
    summary:
      "The learner-facing binder for a leadership program built on four elements — Responsibility, Empathy, Accountability and Leading by Example — for supervisors and emerging leaders.",
    highlights: [
      "Lesson content authored as structured data, so the program owner can revise copy without a developer",
      "Practice knowledge checks for each element, plus a capstone",
      "A REAL Journal that gathers every reflection in one place and exports to PDF",
      "Eight encrypted resource packages, including coaching-conversation and boundary-language guides",
      "Notes, reflections and progress stay in the learner's browser — nothing is collected",
    ],
    tags: ["Next.js", "Leadership development", "Privacy by design"],
  },
  {
    slug: "real-leadership-facilitator",
    category: "elearning",
    title: "REAL Leadership — Facilitator Guide",
    attribution: "Youth development organization",
    role: "Instructional designer and developer",
    format: "Web guide with a generated PDF edition",
    status: "Built",
    summary:
      "A fully scripted facilitation guide for four 90-minute live virtual sessions, published as both a website and a print edition generated from that same site.",
    highlights: [
      "Each session carries purpose, objectives, a prep checklist, run of show and scripted facilitation",
      "Discussion bank, slide outline, troubleshooting notes and an after-session reflection",
      "Printable handouts: role cards, scenario cards, observer sheets and worksheets",
      "An answer key that reads the learner binder's question data directly, so the two cannot disagree",
      "The PDF is generated from the live site, so online and print editions never drift apart",
    ],
    tags: ["Facilitation design", "Virtual delivery", "Single-source publishing"],
  },

  /* ---------------- AI Resources for Educators ---------------- */
  {
    slug: "plan-a-lesson-with-ai",
    category: "ai-resources",
    title: "Plan a Lesson with AI — Guided Teacher Workbook",
    attribution: "NATLearning (self-published)",
    role: "Author and designer",
    format: "Editable workbook · 8 planning decisions · 6 reusable forms",
    status: "Shipped",
    summary:
      "An eight-stage planning process that places a teacher decision before, during and after every AI interaction — from naming the learning goal through to verifying and owning the final plan.",
    highlights: [
      "A prompt frame and a quality check attached to each of the eight stages",
      "Three clearly separated roles: the teacher decides, AI generates, trusted sources confirm",
      "A privacy and policy check that runs before the first prompt is written",
      "A completed Grade 6 sample lesson, plus detailed and rapid planning pages",
    ],
    tags: ["AI literacy", "Lesson planning", "UNESCO / NIST aligned"],
  },
  {
    slug: "ai-lesson-planning-foundations",
    category: "ai-resources",
    title: "AI Lesson Planning: Foundations and Activity Design",
    attribution: "NATLearning (self-published)",
    role: "Author and designer",
    format: "Workbook · 3 planning stages · 5 decision tools",
    status: "Shipped",
    summary:
      "The first half of the planning process: clarify the learning goal, describe learners and context safely, and generate activity options worth choosing between.",
    highlights: [
      "A Context Prompt Planner covering purpose, context, audience, requirements and format",
      "An activity comparison matrix for weighing options before detailed planning begins",
      "A privacy check framed as reading the prompt once as though it were public",
    ],
    tags: ["AI literacy", "Prompt design", "Elementary & secondary"],
  },
  {
    slug: "ai-lesson-alignment",
    category: "ai-resources",
    title: "AI Lesson Alignment, Differentiation and Assessment Tools",
    attribution: "NATLearning (self-published)",
    role: "Author and designer",
    format: "Workbook · 5 review stages · 7 reusable forms",
    status: "Shipped",
    summary:
      "The second half: turning promising AI output into a lesson that is actually aligned, accessible and assessable.",
    highlights: [
      "Curriculum-alignment checks against the real expectation and the thinking it requires",
      "Barrier analysis and differentiation tools that preserve the learning goal",
      "Misconception and assessment planners, plus a complete lesson-review process",
      "A worked Grade 6 sample and an AI planning record",
    ],
    tags: ["Curriculum alignment", "Assessment design", "UDL"],
  },
  {
    slug: "ai-output-evaluation-checklists",
    category: "ai-resources",
    title: "AI Output Evaluation: Checklists and Forms",
    attribution: "NATLearning (self-published)",
    role: "Author and designer",
    format: "Toolkit · 10 evaluation lenses · quick screen and full form",
    status: "Shipped",
    summary:
      "A structured way for teachers, instructional coaches and older students to review what an AI system produced before anyone relies on it.",
    highlights: [
      "Ten evaluation lenses, with a quick screen for low-stakes use and a full form for the rest",
      "A verification routine for checking claims against authoritative sources",
    ],
    tags: ["Critical evaluation", "AI literacy", "Coaching"],
  },
  {
    slug: "ai-output-evaluation-practice",
    category: "ai-resources",
    title: "AI Output Evaluation Practice Pack",
    attribution: "NATLearning (self-published)",
    role: "Author and designer",
    format: "Practice pack · 5 practice outputs · 3 application tools",
    status: "Shipped",
    summary:
      "The CHECK process — Clarify, Highlight, Examine, Confirm, then Keep, change or discard — practised against fictional AI outputs before it is used on real ones.",
    highlights: [
      "Effort matched to stakes: a quick screen for brainstorming, a full review for instructional materials",
      "States plainly that for health, safety, legal rights, discipline or accommodations, a review form is not enough",
      "A Responsible Revision Record documenting what was kept, corrected, discarded and why",
    ],
    tags: ["Critical evaluation", "Professional judgment", "NIST AI RMF"],
  },
  {
    slug: "help-or-cheating",
    category: "ai-resources",
    title: "Help or Cheating? AI Discussion Pack",
    attribution: "NATLearning (self-published)",
    role: "Author and designer",
    format: "Discussion pack · 16 scenario cards · 3 formats · Grades 5–12",
    status: "Shipped",
    summary:
      "Sixteen scenarios that give a class a way to argue about where help ends and cheating begins, rather than being handed a rule.",
    highlights: [
      "Individual sort, group protocol and consensus tools",
      "A pause card for students who need to step out of the conversation",
    ],
    tags: ["Academic integrity", "Classroom discussion", "Grades 5–12"],
  },
  {
    slug: "classroom-ai-agreements",
    category: "ai-resources",
    title: "Classroom AI Agreement, Disclosure and Family Tools",
    attribution: "NATLearning (self-published)",
    role: "Author and designer",
    format: "Pack · 4 permission levels · 6 disclosure examples · Grades 5–12",
    status: "Shipped",
    summary:
      "Agreement templates, disclosure tools and family communication for classrooms establishing how AI may be used — and making clear that permission can change by assignment.",
    highlights: [
      "Four permission levels, with implementation pages for putting them into practice",
      "Keeps classroom learning conversations separate from disciplinary investigations",
      "Fictional or private response options, and a private way for students to ask when unsure",
      "Explicitly does not create or replace official policy or academic-integrity procedure",
    ],
    tags: ["Policy communication", "Family engagement", "Grades 5–12"],
  },
  {
    slug: "generative-ai-foundations",
    category: "ai-resources",
    title: "Generative AI Foundations — Student Lessons",
    attribution: "NATLearning (self-published)",
    role: "Author and designer",
    format: "3 complete lessons · 3 student pages · Grades 6–9",
    status: "Shipped",
    summary:
      "Three lessons introducing how generative AI works, written so that no student needs an account to take part.",
    highlights: [
      "Zero accounts required — the lessons run without students signing up for anything",
      "Teacher notes, student pages and extensions included",
    ],
    tags: ["Student lessons", "AI literacy", "Grades 6–9"],
  },
  {
    slug: "responsible-generative-ai",
    category: "ai-resources",
    title: "Responsible Generative AI — Lessons and Assessment",
    attribution: "NATLearning (self-published)",
    role: "Author and designer",
    format: "2 lessons · final assessment with rubric · Grades 6–9",
    status: "Shipped",
    summary:
      "The companion unit: scenarios about responsible use, a final assessment with a rubric, and a closing reflection.",
    highlights: [
      "Scenario-based, so judgment is assessed rather than recall of rules",
      "Also runs with no student accounts required",
    ],
    tags: ["Assessment design", "AI ethics", "Grades 6–9"],
  },
  {
    slug: "designing-reflection",
    category: "ai-resources",
    title: "Designing Reflection That Leads to Learning",
    attribution: "NATLearning (self-published)",
    role: "Author and facilitator",
    format: "75-minute PD session · 12-slide outline · 60+ prompts",
    status: "Shipped",
    summary:
      "A ready-to-run professional learning session on the premise that reflection is only useful when it changes what a learner notices or does next.",
    highlights: [
      "Built for staff meetings and PLCs; 4–40 participants, online or in person",
      "Facilitator preparation, speaking notes and a prompt-improvement protocol",
      "Prompts for before, during and after learning, with guidance on privacy and developmental fit",
      "Every participant leaves with one improved prompt and a plan for using it",
    ],
    tags: ["Professional learning", "Facilitation", "Reflection design"],
  },
  {
    slug: "differentiation-without-three-plans",
    category: "ai-resources",
    title: "Differentiation Without Three Separate Lesson Plans",
    attribution: "NATLearning (self-published)",
    role: "Author and designer",
    format: "Planning guide · 6 worked examples · Grades 1–8",
    status: "Shipped",
    summary:
      "A barrier-first approach: start from one shared goal, find where access actually breaks down, and make the smallest useful adjustment.",
    highlights: [
      "Four planning levers — access, support, process and expression",
      "A scaffold ladder with a fade plan, so support is designed to be removed",
      "Extensions that deepen learning rather than adding more of it",
      "Six fully worked classroom examples and an implementation checklist",
    ],
    tags: ["Differentiation", "UDL", "Grades 1–8"],
  },
  {
    slug: "emotions-as-information",
    category: "ai-resources",
    title: "Emotions as Information",
    attribution: "NATLearning (self-published)",
    role: "Author and designer",
    format: "SEL resource · 24 scenario cards · 6 posters · Grades 3–8",
    status: "Shipped",
    summary:
      "A Notice / Wonder / Choose framework for treating emotions as information worth reading rather than behaviour to manage.",
    highlights: [
      "A six-lesson sequence with a five-level intensity scale and body-signal mapping",
      "Teacher language that names possibilities without telling students what they feel",
      "An explicit safety protocol: always offer a pass, never require disclosure, don't promise secrecy, don't diagnose",
      "Private reflection pages that are private by default",
    ],
    tags: ["SEL", "Classroom community", "Grades 3–8"],
  },
  {
    slug: "from-curiosity-to-project",
    category: "ai-resources",
    title: "From Curiosity to Project — Student Inquiry Planner",
    attribution: "NATLearning (self-published)",
    role: "Author and designer",
    format: "Inquiry planner · 6 checkpoints · 5 response formats · Grades 4–8",
    status: "Shipped",
    summary:
      "Structure that belongs to the process rather than the product: shared checkpoints and quality expectations, without requiring every learner to produce the same thing.",
    highlights: [
      "Broad-to-focused question practice with a question-quality check",
      "Research planning, search-term and source-evaluation pages",
      "A purpose-to-format matrix — explain, argue, design, document or teach",
      "Peer feedback that responds to reasoning and evidence before surface polish",
    ],
    tags: ["Inquiry learning", "Research skills", "Grades 4–8"],
  },

  /* ---------------- Corporate L&D & LMS ---------------- */
  {
    slug: "enterprise-lms",
    category: "corporate",
    title: "Enterprise LMS Redesign and Launch",
    attribution: "Corporate client — multi-business-unit enterprise",
    role: "LMS Administrator and learning architect",
    format: "Docebo platform build",
    status: "In progress",
    summary:
      "Leading the redesign, build and launch of a corporate learning platform serving multiple business units.",
    highlights: [
      "Learning path architecture across leadership and core-capability programs",
      "Business unit onboarding coordination and reporting structure",
      "Launch communications, including a program sizzle reel",
    ],
    tags: ["Docebo", "Learning architecture", "Program launch"],
  },
  {
    slug: "change-impact-analysis",
    category: "corporate",
    title: "Change Impact and Training Needs Analysis",
    attribution: "National energy utility",
    role: "Instructional designer and change analyst",
    format: "Analysis documentation and structured data outputs",
    status: "Shipped",
    summary:
      "Change impact documentation across two procurement verticals — Contracts and Sourcing, and Procure-to-Pay — tracing process changes through to the training materials they affect.",
    highlights: [
      "Mapped procurement process changes to their downstream training impact",
      "Structured outputs identifying which changes genuinely create a training need",
      "Applied change management discipline to L&D scoping rather than retraining everything",
    ],
    tags: ["Change management", "Needs analysis", "Procurement"],
  },
  {
    slug: "luxury-sales-storyboards",
    category: "corporate",
    title: "Luxury Sales Program Storyboards",
    attribution: "Luxury retail brand",
    role: "Instructional designer",
    format: "Development-ready storyboard documentation",
    status: "Shipped",
    summary:
      "Structured storyboards for a luxury sales training program — the handoff artifact that lets a developer build without guessing at intent.",
    highlights: [
      "Slide reference, title, Rise treatment, on-screen text and developer notes per screen",
      "Interaction and treatment decisions specified at design time, not left to build time",
    ],
    tags: ["Storyboarding", "Articulate Rise", "Sales enablement"],
  },

  /* ---------------- K–12 Curriculum & Apps ---------------- */
  {
    slug: "moneymates",
    category: "k12",
    title: "MoneyMates for School",
    attribution: "Independent project",
    role: "Designer and developer",
    format: "Web application (Next.js, TypeScript, Firebase)",
    status: "Built",
    summary:
      "A curriculum-aligned financial literacy application for Ontario Grade 4, pairing interactive lessons with a working family expense tracker.",
    highlights: [
      "Aligned to Ontario curriculum expectations F1.1, F1.2 and F1.3",
      "Full expense management with validation, category filtering and date ranges",
      "Dashboard and analytics with category breakdown and monthly trends",
      "A companion consumer version also deployed",
    ],
    tags: ["Financial literacy", "Next.js", "Ontario curriculum"],
  },
  {
    slug: "habitats-diagnostic",
    category: "k12",
    title: "Grade 4 Science Diagnostic — Habitats and Communities",
    attribution: "Independent project",
    role: "Assessment designer",
    format: "Adaptive diagnostic assessment, H5P implementation",
    status: "In progress",
    summary:
      "An adaptive diagnostic aligned to Ontario Curriculum Strand B, tiered so that a teacher learns where a student actually is rather than only whether they passed.",
    highlights: [
      "Beginner, intermediate and expert tiers with adaptive routing",
      "Built against the Ontario Strand B expectations",
    ],
    tags: ["Diagnostic assessment", "H5P", "Ontario curriculum"],
  },
  {
    slug: "life-systems-diagnostics",
    category: "k12",
    title: "Life Systems Tiered Diagnostics, Grades 1–8",
    attribution: "Independent project",
    role: "Assessment designer",
    format: "Diagnostic assessment series",
    status: "In progress",
    summary:
      "A tiered diagnostic series spanning the full Life Systems strand, designed to locate where a gap begins rather than confirm that one exists.",
    highlights: [
      "Prior-grade review questions built into each assessment",
      "Consistent tiering across all eight grades, so results are comparable year over year",
    ],
    tags: ["Diagnostic assessment", "Vertical alignment", "Grades 1–8"],
  },
];

export const PRINCIPLES: { title: string; body: string }[] = [
  {
    title: "Content as data, not as code",
    body: "Lesson content in the binder projects lives in structured files separate from the page logic, so a program owner can revise wording without a developer. Instructional design thinking applied to architecture.",
  },
  {
    title: "One source, two formats",
    body: "The REAL Leadership facilitator PDF is generated from the live site rather than maintained beside it. The online and print editions cannot drift apart, because there is only one of them.",
  },
  {
    title: "Privacy as a default, not a setting",
    body: "Learner notes and reflections stay in the browser. The AI resources put a privacy check before the first prompt and ask for non-identifying learner information throughout.",
  },
  {
    title: "Honest scope boundaries",
    body: "Each product states what it does not replace — the facilitator handbook, board policy, an IEP, a required accommodation, or qualified human expertise on a high-stakes decision.",
  },
  {
    title: "Cited, current practice",
    body: "Resources draw on UNESCO generative-AI guidance, the NIST AI Risk Management Framework, the Privacy Commissioner of Canada's principles, CAST UDL 3.0 and Ontario Ministry guidance, with accessed dates noted.",
  },
  {
    title: "Accessibility designed in",
    body: "Keyboard navigation and screen reader support in the web builds; pass options, offline pathways and multiple means of expression in the print resources.",
  },
];
