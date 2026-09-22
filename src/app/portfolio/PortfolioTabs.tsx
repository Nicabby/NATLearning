'use client';

import { useState } from "react";
import { CATEGORIES, PROJECTS, type Category } from "./portfolio-data";

type Filter = Category | "all";

export default function PortfolioTabs() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible =
    filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const active = CATEGORIES.find((c) => c.id === filter);

  const countFor = (id: Filter) =>
    id === "all"
      ? PROJECTS.length
      : PROJECTS.filter((p) => p.category === id).length;

  return (
    <div>
      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Work categories"
        className="flex flex-wrap gap-2 justify-center mb-4"
      >
        {([{ id: "all", label: "All work" }, ...CATEGORIES] as {
          id: Filter;
          label: string;
        }[]).map((tab) => {
          const isActive = filter === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors border-2 ${
                isActive
                  ? "bg-buttons text-white border-buttons"
                  : "bg-surface text-ink border-line hover:border-buttons hover:text-buttons"
              }`}
            >
              {tab.label}
              <span
                className={`ml-2 text-xs font-medium ${
                  isActive ? "text-white/80" : "text-ink-muted"
                }`}
              >
                {countFor(tab.id)}
              </span>
            </button>
          );
        })}
      </div>

      <p className="text-center text-ink-soft mb-12 max-w-2xl mx-auto min-h-[3rem]">
        {active
          ? active.blurb
          : "Client work is attributed by sector. Published resources are credited to NATLearning."}
      </p>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2">
        {visible.map((p) => (
          <article
            key={p.slug}
            className="bg-surface rounded-2xl border border-line p-7 flex flex-col hover:border-accents transition-colors"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-additional mb-4">
              {CATEGORIES.find((c) => c.id === p.category)?.label}
            </span>

            <h3 className="text-2xl font-bold text-ink mb-3 leading-snug">
              {p.deliverableType}
            </h3>

            <dl className="text-sm mb-5 space-y-1.5 border-l-2 border-accents pl-4">
              <div className="flex gap-2">
                <dt className="text-ink-muted w-16 shrink-0">Client</dt>
                <dd className="text-ink-soft font-medium">{p.attribution}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-ink-muted w-16 shrink-0">Role</dt>
                <dd className="text-ink-soft">{p.role}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-ink-muted w-16 shrink-0">Format</dt>
                <dd className="text-ink-soft">{p.format}</dd>
              </div>
            </dl>

            <p className="text-ink-soft mb-5 leading-relaxed">{p.summary}</p>

            <ul className="space-y-2 mb-6 text-sm text-ink-soft">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 rounded-full bg-buttons shrink-0"
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-line">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded bg-navy-tint text-navy-deep"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
