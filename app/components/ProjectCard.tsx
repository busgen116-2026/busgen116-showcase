"use client";
import { useState } from "react";

type LinkItem = {
  label: string;
  href: string;
  type: "site" | "slides" | "github" | "video" | "pdf" | "drive";
};

export type Project = {
  team: number | string;
  members: string[];
  title: string;
  description: string;
  links: LinkItem[];
  preview?: string;
};

const linkIcons: Record<LinkItem["type"], React.ReactNode> = {
  site: (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  ),
  slides: (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
    </svg>
  ),
  github: (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  ),
  video: (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  pdf: (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  drive: (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
  ),
};

function PreviewImage({ src, alt }: { src?: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="w-full aspect-video bg-stone-100 flex flex-col items-center justify-center gap-2 border-b border-stone-100">
        <svg className="w-8 h-8 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-xs text-stone-400">Preview unavailable</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full aspect-video object-cover border-b border-stone-100"
      onError={() => setFailed(true)}
    />
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const isPlaceholder = project.title === "Project";

  return (
    <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden flex flex-col hover:shadow-md hover:border-stone-300 transition-all">
      <PreviewImage src={project.preview} alt={project.title} />

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className={`font-serif text-lg font-bold leading-snug ${isPlaceholder ? "text-stone-400 italic" : "text-stone-900"}`}>
              {isPlaceholder ? "Title coming soon" : project.title}
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">
              {project.members.join(", ")}
            </p>
          </div>
          <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: "#8C1515" }}>
            Team {project.team}
          </span>
        </div>

        <p className={`text-sm leading-relaxed flex-1 ${isPlaceholder ? "text-stone-400 italic" : "text-stone-500"}`}>
          {isPlaceholder ? "Description coming soon." : project.description}
        </p>

        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#FDF2F2",
                  color: "#8C1515",
                  borderColor: "#F5D0D0",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#F5D0D0";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#FDF2F2";
                }}
              >
                {linkIcons[link.type]}
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
