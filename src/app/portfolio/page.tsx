import Link from "next/link";
import Navigation from "@/components/Navigation";
import type { Metadata } from "next";
import PortfolioTabs from "./PortfolioTabs";
import { PRINCIPLES, PROJECTS } from "./portfolio-data";

export const metadata: Metadata = {
  title: "Portfolio — Nicole Tal | NATLearning",
  description:
    "Selected instructional design work: eLearning courses and digital facilitator binders, published AI resources for educators, enterprise LMS and change-impact analysis, and K–12 curriculum and assessment design.",
  keywords: [
    "instructional design portfolio",
    "eLearning design",
    "facilitator binder",
    "AI in education resources",
    "Docebo LMS",
    "curriculum design",
  ],
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-surface">
      <Navigation />

      {/* Hero */}
      <section className="bg-background py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-additional mb-4">
            Selected work
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            Portfolio
          </h1>
          <p className="text-xl text-ink-soft leading-relaxed">
            If you&apos;re trying to work out whether I can build the thing
            you need, this is the evidence: {PROJECTS.length} deliverables
            across corporate learning, published classroom resources, and
            K–12 curriculum — the actual courses, guides and applications a
            client or a classroom uses, not case studies written after the
            fact.
          </p>
          <p className="text-sm text-ink-muted mt-6 max-w-2xl mx-auto">
            Client work is attributed by sector rather than by name, out of
            respect for confidentiality — ask and I can share more, with the
            client&apos;s permission. Published resources are credited to
            NATLearning. No outcome figures are claimed here that have not
            been measured.
          </p>
        </div>
      </section>

      {/* Work */}
      <section className="bg-surface-muted py-16 md:py-20 px-6 md:px-12 lg:px-24 border-b border-line">
        <div className="max-w-6xl mx-auto">
          <PortfolioTabs />
        </div>
      </section>

      {/* How the work is built */}
      <section className="bg-surface py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              How the work is built
            </h2>
            <p className="text-lg text-ink-soft leading-relaxed">
              If you bring me in, these are the defaults you&apos;re hiring —
              the decisions that recur across every project above, drawn from
              what the work actually does, not from a statement of
              philosophy.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div key={p.title}>
                <div
                  aria-hidden="true"
                  className="w-10 h-1 bg-buttons rounded-full mb-4"
                />
                <h3 className="text-lg font-bold text-ink mb-2">{p.title}</h3>
                <p className="text-ink-soft leading-relaxed text-[15px]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="bg-surface-tinted py-20 px-6 md:px-12 lg:px-24 border-y border-line">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            Tools and platforms
          </h2>
          <p className="text-lg text-ink-soft mb-12 max-w-3xl">
            Used in the projects on this page.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                heading: "Authoring",
                items: "Articulate Rise, Articulate Storyline, H5P",
              },
              {
                heading: "Platforms",
                items: "Docebo, TalentLMS, Vercel",
              },
              {
                heading: "Development",
                items: "Next.js, React, TypeScript, Tailwind CSS, Firebase",
              },
              {
                heading: "Design frameworks",
                items:
                  "CAST UDL 3.0, UNESCO AI guidance, NIST AI RMF, Ontario Curriculum",
              },
            ].map((g) => (
              <div
                key={g.heading}
                className="bg-surface p-6 rounded-xl border border-line"
              >
                <h3 className="font-bold text-ink mb-2">{g.heading}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {g.items}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-buttons py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Want to see more of a particular project?
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Several of these builds are live and can be walked through directly.
            Client materials are shared on request, with the client&apos;s
            permission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-buttons px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-lg"
            >
              Get in touch
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-buttons transition-all duration-300"
            >
              View services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
