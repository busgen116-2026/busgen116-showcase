type LinkItem = {
  label: string;
  href: string;
  type: "site" | "slides" | "github" | "video" | "pdf" | "drive";
};

type Project = {
  team: number | string;
  members: string[];
  title: string;
  description: string;
  links: LinkItem[];
};

const projects: Project[] = [
  {
    team: 1,
    members: ["Raymond Llata"],
    title: "LLM Among Us",
    description: "A social deduction game reimagined with large language models — exploring how AI agents reason about trust, deception, and collective decision-making under uncertainty.",
    links: [
      { label: "Slides", href: "/slides/team1-llm-among-us.pptx", type: "slides" },
    ],
  },
  {
    team: 2,
    members: ["Vivek Yarlagedda", "Kathy Shao", "Shawn Gregory", "George Zhang"],
    title: "Situational Unawareness",
    description: "An investigation into how AI systems misread context in high-stakes situations — and what that means for the humans who rely on them.",
    links: [
      { label: "Live Site", href: "https://situational-unawareness.com", type: "site" },
    ],
  },
  {
    team: 3,
    members: ["Shang Jing Chia"],
    title: "Agentic Finance: Bank Run Sandbox",
    description: "A simulation sandbox where AI agents navigate financial crises, modeling emergent herd behavior and systemic risk during bank run scenarios.",
    links: [
      { label: "GitHub", href: "https://github.com/shangjingchia/busgen116-Agentic-Finance-Bankrun-Sandbox", type: "github" },
    ],
  },
  {
    team: 4,
    members: ["Prakhar Goel"],
    title: "Project",
    description: "Description coming soon.",
    links: [
      { label: "View Project", href: "https://drive.google.com/drive/folders/1ZY10seDahz1PpnL-56Is7kiO5X3YP8t1", type: "drive" },
    ],
  },
  {
    team: 5,
    members: ["Jenna Jokhani"],
    title: "Project",
    description: "Description coming soon.",
    links: [
      { label: "Slides", href: "https://docs.google.com/presentation/d/1i2Dt5Gai0YwO0BAd8KYWlqwjrHVJb3AppsC8VIPsytk/edit", type: "slides" },
    ],
  },
  {
    team: 6,
    members: ["Jaxon Gonzales", "Juan Sandoval"],
    title: "Constitution Builder",
    description: "An AI agent system for drafting, debating, and refining constitutional documents — putting multi-agent deliberation to work on the oldest problem in governance.",
    links: [
      { label: "Live Demo", href: "https://constitution-builder-production.up.railway.app", type: "site" },
      { label: "Slides", href: "https://docs.google.com/presentation/d/1oPqGH7W77KGuuikPaYH201KN_q9dbne-qUeMx8-4jgg/edit", type: "slides" },
    ],
  },
  {
    team: 7,
    members: ["Michael Young", "Amy Wang"],
    title: "Subtext",
    description: "A tool that surfaces the hidden framing and implicit assumptions embedded in political communication — making the invisible visible.",
    links: [
      { label: "Live Site", href: "https://subtext-brown.vercel.app", type: "site" },
      { label: "GitHub", href: "https://github.com/amywang2020/subtext", type: "github" },
    ],
  },
  {
    team: 8,
    members: ["Natalie Hampton", "Quincy Stone"],
    title: "Project",
    description: "Description coming soon.",
    links: [
      { label: "Live Site", href: "https://busgen116-final-project.vercel.app", type: "site" },
      { label: "Slides", href: "https://docs.google.com/presentation/d/1tnoQQJjBGUfIqu5FZqu2jvy-ODQ4zPgzQc_ModkSrX0/edit", type: "slides" },
      { label: "GitHub", href: "https://github.com/nataliehamptonn/busgen116-final-project", type: "github" },
    ],
  },
  {
    team: 9,
    members: ["Yuanxin Ma"],
    title: "Project",
    description: "Description coming soon.",
    links: [],
  },
  {
    team: 10,
    members: ["Navya Agarwal", "Zoya Fasihuddin", "Diya Ahuja"],
    title: "Project",
    description: "Description coming soon.",
    links: [
      { label: "Live Site", href: "https://busgen116.vercel.app", type: "site" },
    ],
  },
  {
    team: 11,
    members: ["Leticia Auriemo", "Bennett Evans Zytko", "Alec Profit"],
    title: "Streamline",
    description: "An AI-powered platform for streamlining governance workflows and bureaucratic decision-making — reducing friction without sacrificing accountability.",
    links: [
      { label: "Live Site", href: "https://streamline-app-two.vercel.app", type: "site" },
    ],
  },
  {
    team: 12,
    members: ["Graham Griffin", "Ethan Romer"],
    title: "Cross-Market Arbitrage",
    description: "An analysis of how AI agents identify and exploit cross-market arbitrage opportunities — and what this means for the fairness of algorithmic financial systems.",
    links: [
      { label: "Slides", href: "/slides/team12-arbitrage.pptx", type: "slides" },
      { label: "Paper", href: "/slides/team12-report.pdf", type: "pdf" },
    ],
  },
  {
    team: 14,
    members: ["Jonas Pao"],
    title: "Project",
    description: "Description coming soon.",
    links: [
      { label: "Paper", href: "/slides/team14-final.pdf", type: "pdf" },
    ],
  },
  {
    team: 15,
    members: ["Eddy Jiang"],
    title: "News Framing Dashboard",
    description: "A dashboard for analyzing how different news sources frame political and economic events — using AI to quantify the invisible architecture of media bias.",
    links: [
      { label: "Paper", href: "/slides/team15-news-framing.pdf", type: "pdf" },
    ],
  },
  {
    team: "Virtual",
    members: ["Bernardo Herzer"],
    title: "Project",
    description: "Description coming soon.",
    links: [
      { label: "Video", href: "https://youtu.be/oLpO-L6kxNw", type: "video" },
    ],
  },
];

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

function ProjectCard({ project }: { project: Project }) {
  const isPlaceholder = project.title === "Project";

  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col gap-4 hover:border-teal-200 hover:shadow-sm transition-all">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className={`font-serif text-xl font-bold leading-snug ${isPlaceholder ? "text-stone-400 italic" : "text-stone-900"}`}>
            {isPlaceholder ? "Title coming soon" : project.title}
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            {project.members.join(", ")}
          </p>
        </div>
        <span className="shrink-0 text-xs font-semibold px-2.5 py-1 bg-stone-100 text-stone-500 rounded-full border border-stone-200">
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
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-teal-50 text-teal-700 border border-teal-100 hover:bg-teal-100 hover:border-teal-200 transition-colors"
            >
              {linkIcons[link.type]}
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-stone-900 text-white px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-teal-400">BUSGEN 116</span>
            <span className="text-xs text-stone-400 ml-3">Stanford Graduate School of Business · Spring 2026</span>
          </div>
          <span className="text-xs text-stone-500">Final Projects</span>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-stone-900 text-white px-6 pb-16 pt-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-4">
            FREE SYSTEMS
          </h1>
          <p className="text-stone-300 text-lg max-w-2xl leading-relaxed mb-2">
            Preserving Liberty in an Algorithmic Era
          </p>
          <p className="text-stone-500 text-sm max-w-2xl leading-relaxed">
            Students in BUSGEN 116 built AI agents, stress-tested them for political bias, traded on live prediction markets, and ran governance simulations — then took those ideas further in their final projects. Here&apos;s what they made.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-stone-800 text-white px-6 py-3 border-t border-stone-700">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-6 text-xs text-stone-400">
          <span><span className="text-white font-semibold">{projects.length}</span> projects</span>
          <span><span className="text-white font-semibold">{projects.reduce((n, p) => n + p.members.length, 0)}</span> students</span>
          <span><span className="text-white font-semibold">{projects.filter(p => p.links.some(l => l.type === "site")).length}</span> live demos</span>
        </div>
      </div>

      {/* Grid */}
      <main className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={`team-${project.team}`} project={project} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 px-6 py-8 mt-4">
        <div className="max-w-6xl mx-auto text-xs text-stone-400 flex flex-wrap items-center justify-between gap-2">
          <span>BUSGEN 116: FREE SYSTEMS · Stanford GSB · Spring 2026</span>
          <span>Taught by Professor Andy Hall · Technical Coordinator: Piper Fleming</span>
        </div>
      </footer>
    </div>
  );
}
