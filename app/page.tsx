import { ProjectCard, type Project } from "./components/ProjectCard";

const projects: Project[] = [
  {
    team: 1,
    members: ["Raymond Llata"],
    title: "LLM Imposter: The Council of Five",
    description: "A social deduction game reimagined with large language models — can a single misaligned AI convince a council of aligned agents to adopt a selfish policy using ethical-sounding language? A proxy for alignment robustness in multi-agent governance.",
    links: [{ label: "Slides", href: "https://drive.google.com/file/d/1p8j9Eyz1lryXvuwZJMARmPf1lkADR9Ys/view", type: "slides" }],
  },
  {
    team: 2,
    members: ["Vivek Yarlagedda", "Kathy Shao", "Shawn Gregory", "George Zhang"],
    title: "Situational Unawareness",
    description: "An investigation into how AI systems misread context in high-stakes situations — and what that means for the humans who rely on them.",
    links: [{ label: "Live Site", href: "https://situational-unawareness.com", type: "site" }],
    preview: "/previews/team2.jpg",
  },
  {
    team: 3,
    members: ["Shang Jing Chia"],
    title: "Agentic Finance: Bank Run Sandbox",
    description: "A simulation sandbox where AI agents navigate financial crises, modeling emergent herd behavior and systemic risk during bank run scenarios.",
    links: [{ label: "GitHub", href: "https://github.com/shangjingchia/busgen116-Agentic-Finance-Bankrun-Sandbox", type: "github" }],
    preview: "https://opengraph.githubassets.com/1/shangjingchia/busgen116-Agentic-Finance-Bankrun-Sandbox",
  },
  {
    team: 4,
    members: ["Prakhar Goel"],
    title: "Project",
    description: "Description coming soon.",
    links: [{ label: "View Project", href: "https://drive.google.com/drive/folders/1ZY10seDahz1PpnL-56Is7kiO5X3YP8t1", type: "drive" }],
  },
  {
    team: 5,
    members: ["Jenna Jokhani"],
    title: "Project",
    description: "Description coming soon.",
    links: [{ label: "Slides", href: "https://docs.google.com/presentation/d/1i2Dt5Gai0YwO0BAd8KYWlqwjrHVJb3AppsC8VIPsytk/edit", type: "slides" }],
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
    preview: "/previews/team6.jpg",
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
    preview: "/previews/team7.jpg",
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
    preview: "/previews/team8.jpg",
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
    links: [{ label: "Live Site", href: "https://busgen116.vercel.app", type: "site" }],
    preview: "/previews/team10.jpg",
  },
  {
    team: 11,
    members: ["Leticia Auriemo", "Bennett Evans Zytko", "Alec Profit"],
    title: "Streamline",
    description: "An AI-powered platform for streamlining governance workflows and bureaucratic decision-making — reducing friction without sacrificing accountability.",
    links: [{ label: "Live Site", href: "https://streamline-app-two.vercel.app", type: "site" }],
    preview: "/previews/team11.jpg",
  },
  {
    team: 12,
    members: ["Graham Griffin", "Ethan Romer"],
    title: "Cross-Market Arbitrage",
    description: "Detecting informed trading from Polymarket → Kalshi: when an insider moves a price on a transparent on-chain market, the regulated opaque one is slow to follow. That lag is measurable — and tradeable.",
    links: [
      { label: "Live Demo", href: "https://worker-production-58c9.up.railway.app/paper", type: "site" },
      { label: "Slides", href: "https://drive.google.com/file/d/19lJcfiijUDt5K99cLy-kXPbKDMIAWvRx/view", type: "slides" },
      { label: "Paper", href: "https://drive.google.com/file/d/1qM_HSr-Cgn-qSnkHp6E-F2UOcux8r8xx/view", type: "pdf" },
    ],
  },
  {
    team: 14,
    members: ["Jonas Pao"],
    title: "ResumeScope",
    description: "A resume review platform where AI recruiter agents simulate how real recruiters read — predicting where they'll look, what they'll notice, and how they'll rate a candidate.",
    links: [{ label: "Paper", href: "https://drive.google.com/file/d/1dBqVMvDY2PKWtR-F4Od1zAEhPs0eoHlS/view", type: "pdf" }],
  },
  {
    team: 15,
    members: ["Eddy Jiang"],
    title: "News Framing Dashboard",
    description: "Feed the same article to five AI models and measure exactly how Claude, GPT, Gemini, Grok, and Llama frame it differently — quantifying actor salience, affective loading, context inclusion, and hedge density.",
    links: [{ label: "Slides", href: "https://drive.google.com/file/d/10bQqLjPjq4V3W_3wVT0kiOhm67bPZKFS/view", type: "slides" }],
  },
  {
    team: "Virtual",
    members: ["Bernardo Herzer"],
    title: "Project",
    description: "Description coming soon.",
    links: [{ label: "Video", href: "https://youtu.be/oLpO-L6kxNw", type: "video" }],
    preview: "https://img.youtube.com/vi/oLpO-L6kxNw/maxresdefault.jpg",
  },
];

const totalStudents = projects.reduce((n, p) => n + p.members.length, 0);
const liveDemos = projects.filter(p => p.links.some(l => l.type === "site")).length;

/* Stanford Block-S SVG — decorative hero motif */
function BlockS({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 200" className={className} fill="currentColor" aria-hidden>
      <path d="M140 40 C140 18 124 4 100 4 L60 4 C36 4 20 18 20 40 C20 58 30 70 50 78 L110 102 C130 110 140 122 140 142 C140 164 124 176 100 176 L60 176 C36 176 20 162 20 142 L20 130 L44 130 L44 142 C44 150 50 156 60 156 L100 156 C110 156 116 150 116 142 C116 134 110 128 98 122 L38 98 C18 90 4 76 4 54 C4 24 24 4 58 4 L102 4 C136 4 156 22 156 52 L156 60 L140 60 Z" />
    </svg>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F9F6F2" }}>

      {/* Top bar */}
      <div style={{ backgroundColor: "#820000" }}>
        <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-white/60">Stanford University</span>
            <span className="text-white/30">·</span>
            <span className="text-xs text-white/60">Pathfinder Program</span>
            <span className="text-white/30">·</span>
            <span className="text-xs text-white/60">Spring 2026</span>
          </div>
          <span className="text-xs text-white/50">BUSGEN 116</span>
        </div>
      </div>

      {/* Hero */}
      <header style={{ backgroundColor: "#8C1515" }} className="text-white px-6 pt-12 pb-16 relative overflow-hidden">

        {/* Decorative Block S */}
        <BlockS className="absolute right-[-20px] top-[-20px] w-72 md:w-96 text-white opacity-[0.04] pointer-events-none select-none" />

        {/* Diagonal accent lines */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }} />
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Stanford wordmark row */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-8 h-8 rounded font-serif font-black text-lg leading-none" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
              S
            </div>
            <div className="h-4 w-px bg-white/20" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50">
              Stanford Graduate School of Business
            </span>
          </div>

          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/40 mb-3">
            Student Final Projects
          </p>
          <h1 className="font-serif text-6xl md:text-7xl font-bold leading-none mb-4 tracking-tight">
            FREE SYSTEMS
          </h1>
          <p className="text-xl text-white/75 font-light mb-8 max-w-xl">
            Preserving Liberty in an Algorithmic Era
          </p>

          <p className="text-white/65 leading-relaxed max-w-2xl mb-4 text-sm">
            Thirty Stanford undergraduates — enrolled in a GSB course for the first time through
            Pathfinder, Stanford&apos;s program bridging the business school and undergraduate life —
            spent a quarter doing something that had never been done before: they built AI agents
            calibrated to their own political views, deployed them in live prediction markets,
            sent them into a multi-party legislature to debate real policy, and watched what happened
            when machines tried to govern together.
          </p>
          <p className="text-white/65 leading-relaxed max-w-2xl mb-10 text-sm">
            Every student received a Claude Code subscription and a funded API key. Every assignment
            was live, competitive, and consequential. By week four, agents were casting proxy votes
            on real proposals. By week five, they were dealmaking across party lines in a simulated
            legislature. By week six, they were advising a war cabinet. The projects below are what
            they built when they took those tools and ran with them.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-10">
            {[
              { n: projects.length, label: "final projects" },
              { n: totalStudents, label: "students" },
              { n: liveDemos, label: "live demos" },
            ].map(({ n, label }) => (
              <div key={label}>
                <div className="font-serif text-4xl font-bold">{n}</div>
                <div className="text-white/40 text-xs tracking-widest uppercase mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Press callout */}
      <div className="border-b border-stone-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
          <div className="shrink-0 text-xs font-semibold tracking-widest uppercase" style={{ color: "#8C1515" }}>
            As seen in
          </div>
          <div className="w-px h-4 bg-stone-200" />
          <a
            href="https://poetsandquants.com/2026/04/30/training-ai-to-govern-for-us-how-this-stanford-gsb-class-experiments-with-building-ai-agents/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
          >
            <span className="font-semibold">Poets & Quants</span>
            <span className="text-stone-400 ml-2">→ Training AI To Govern For Us: How This Stanford GSB Class Experiments With Building AI Agents</span>
          </a>
        </div>
      </div>

      {/* Project grid */}
      <main className="max-w-6xl mx-auto px-6 py-14">
        <div className="mb-8 flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="font-serif text-2xl font-bold text-stone-900">What they built</h2>
            <p className="text-stone-500 text-sm mt-1">
              Taught by Professor Andy Hall &nbsp;·&nbsp; Technical Coordinator: Piper Fleming
            </p>
          </div>
          {/* Small cardinal accent rule */}
          <div className="h-0.5 w-24 rounded-full" style={{ backgroundColor: "#8C1515" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={`team-${project.team}`} project={project} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 px-6 py-8 mt-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-6 h-6 rounded font-serif font-black text-sm leading-none text-white" style={{ backgroundColor: "#8C1515" }}>
              S
            </div>
            <span className="text-xs text-stone-400">
              BUSGEN 116: FREE SYSTEMS &nbsp;·&nbsp; Stanford Pathfinder &nbsp;·&nbsp; Spring 2026
            </span>
          </div>
          <span className="text-xs text-stone-400">
            Taught by Professor Andy Hall
          </span>
        </div>
      </footer>
    </div>
  );
}
