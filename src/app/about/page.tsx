import Link from "next/link";
import Navigation from "@/components/Navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Nicole Tal | NATLearning",
  description:
    "Twenty-four years in education and learning design: classroom teacher, curriculum director, instructional designer, LMS administrator. NATLearning is the practice built on that.",
  keywords: [
    "instructional designer",
    "curriculum design",
    "LMS administrator",
    "Docebo",
    "AI in education",
    "learning design consultant",
    "Toronto",
  ],
};

const PRACTICE = [
  {
    title: "Course and program design",
    body: "Full programs from needs analysis through storyboard, build and facilitator enablement. Articulate Rise and Storyline, H5P, and custom web builds when an authoring tool would get in the way.",
  },
  {
    title: "Facilitator enablement",
    body: "Scripted facilitation guides, run-of-show documentation, handouts and observer tools — the materials that let someone other than the designer deliver the program well.",
  },
  {
    title: "LMS administration and architecture",
    body: "Platform redesign, learning path architecture, business unit onboarding and reporting. Currently administering an enterprise Docebo instance through redesign and launch.",
  },
  {
    title: "Change impact and needs analysis",
    body: "Tracing a process change through to the training it actually affects, so an organization retrains what changed rather than everything adjacent to it.",
  },
  {
    title: "Assessment and diagnostics",
    body: "Tiered and adaptive diagnostic design, curriculum-aligned assessment, and rubrics built to inform a next instructional decision rather than only produce a score.",
  },
  {
    title: "AI integration for learning teams",
    body: "Planning frameworks, evaluation routines and classroom-ready resources for using generative AI responsibly — built on UNESCO, NIST and privacy-commissioner guidance rather than vendor claims.",
  },
];

const BELIEFS = [
  {
    heading: "Design for the person who delivers it, not only the person who takes it",
    body: "A program lives or dies on whether a facilitator can run it on a difficult Tuesday. That is why the facilitation guide, the handouts and the answer key get the same attention as the learner experience.",
  },
  {
    heading: "Hand the content back to the client",
    body: "Lesson content in the web builds is stored as structured data, separate from the page code, so the people who own a program can revise it without hiring a developer for a wording change.",
  },
  {
    heading: "Name what the tool cannot do",
    body: "Every resource states what it does not replace — board policy, an IEP, a required accommodation, qualified expertise on a high-stakes decision. Being specific about limits is what makes the rest trustworthy.",
  },
  {
    heading: "AI supports professional judgment; it does not hold it",
    body: "The planning frameworks put a teacher decision before, during and after every AI interaction, and a privacy check before the first prompt. That is a design stance, not a disclaimer.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-surface">
      <Navigation />

      {/* Hero */}
      <section className="bg-background py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-additional mb-4">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6 leading-tight">
            Twenty-four years of figuring out why people do and don&apos;t learn
            things
          </h1>
          <p className="text-xl text-ink-soft leading-relaxed max-w-3xl">
            Fourteen of them in classrooms and curriculum leadership. Ten in
            instructional design. NATLearning is the practice that came out of
            both — learning design for organizations, and published resources
            for the educators doing the same work inside schools.
          </p>
        </div>
      </section>

      {/* Background */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-8">
            How I got here
          </h2>

          <div className="space-y-6 text-lg text-ink-soft leading-relaxed">
            <p>
              I spent fourteen years as a teacher and curriculum director. That
              is where the useful instincts came from: you cannot fake your way
              through a lesson that does not work, and you find out within about
              four minutes. Curriculum direction added the other half — the
              problem of designing something that has to work when you are not
              in the room, delivered by people with different strengths to
              groups you have never met.
            </p>
            <p>
              The last ten years have been instructional design, mostly for
              organizations. Corporate leadership and sales programs. Facilitator
              development for youth-serving organizations. Procurement change
              analysis for a national utility. Enterprise LMS work — currently
              administering a Docebo platform through a full redesign and launch,
              which means learning path architecture, business unit onboarding
              and reporting as much as course building.
            </p>
            <p>
              Somewhere in there I started writing the code too. Not because
              every project needs a developer, but because some of them need
              something an authoring tool cannot produce — a facilitator binder
              that searches a person&apos;s own notes, a print edition generated
              from the same source as the website so the two cannot contradict
              each other. Learning where that line falls has made me better at
              knowing when Rise is the right answer and when it is the
              convenient one.
            </p>
            <p>
              I work from Toronto, usually with a fair amount of the country
              between me and my desk.
            </p>
          </div>
        </div>
      </section>

      {/* What I do */}
      <section className="bg-surface-muted py-20 px-6 md:px-12 lg:px-24 border-y border-line">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              What I take on
            </h2>
            <p className="text-lg text-ink-soft leading-relaxed">
              Everything below is work that exists — there are examples of each
              in the portfolio.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {PRACTICE.map((item) => (
              <div key={item.title}>
                <div
                  aria-hidden="true"
                  className="w-10 h-1 bg-buttons rounded-full mb-4"
                />
                <h3 className="text-lg font-bold text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-ink-soft leading-relaxed text-[15px]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            How I work
          </h2>
          <p className="text-lg text-ink-soft mb-14 max-w-3xl leading-relaxed">
            Four positions that show up in every project, for better or worse.
          </p>

          <div className="space-y-10">
            {BELIEFS.map((b, i) => (
              <div
                key={b.heading}
                className="grid md:grid-cols-[auto_1fr] gap-x-7 gap-y-3"
              >
                <span
                  aria-hidden="true"
                  className="text-5xl font-bold text-line-strong leading-none hidden md:block"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-ink mb-2">
                    {b.heading}
                  </h3>
                  <p className="text-ink-soft leading-relaxed">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NATLearning */}
      <section className="bg-surface-tinted py-20 px-6 md:px-12 lg:px-24 border-y border-line">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-additional mb-4">
            The practice
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
            NATLearning
          </h2>
          <div className="space-y-5 text-lg text-ink-soft leading-relaxed">
            <p>
              NATLearning covers both halves of the work. One is client
              engagements — programs, platforms and analysis for organizations
              that need learning built or rebuilt.
            </p>
            <p>
              The other is published resources for educators, under the same
              name. Classroom and professional-learning materials on planning
              with AI, evaluating what AI produces, classroom AI agreements,
              differentiation, reflection design and student inquiry. They are
              sourced against UNESCO&apos;s generative-AI guidance, the NIST AI
              Risk Management Framework, the Privacy Commissioner of
              Canada&apos;s principles, CAST&apos;s UDL guidelines and the
              Ontario curriculum — with accessed dates, because that guidance
              changes.
            </p>
            <p>
              The two halves feed each other. The frameworks get tested against
              real constraints in client work; the client work benefits from
              having had to write the thinking down clearly enough for a
              stranger to use.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-buttons py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Have something that needs building?
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Whether that is a full program, an LMS that is not doing what it
            should, or a team trying to work out where AI genuinely helps —
            it&apos;s worth a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-buttons px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-lg"
            >
              Get in touch
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-buttons transition-all duration-300"
            >
              See the work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
