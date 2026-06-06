import { ProjectCard, type Project } from "./components/ProjectCard";

function microlink(url: string) {
  return `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
}

const projects: Project[] = [
  {
    team: 1,
    members: ["Raymond Llata"],
    title: "LLM Among Us",
    description: "A social deduction game reimagined with large language models — exploring how AI agents reason about trust, deception, and collective decision-making under uncertainty.",
    links: [{ label: "Slides", href: "/slides/team1-llm-among-us.pptx", type: "slides" }],
  },
  {
    team: 2,
    members: ["Vivek Yarlagedda", "Kathy Shao", "Shawn Gregory", "George Zhang"],
    title: "Situational Unawareness",
    description: "An investigation into how AI systems misread context in high-stakes situations — and what that means for the humans who rely on them.",
    links: [{ label: "Live Site", href: "https://situational-unawareness.com", type: "site" }],
    preview: microlink("https://situational-unawareness.com"),
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
    preview: microlink("https://constitution-builder-production.up.railway.app"),
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
    preview: microlink("https://subtext-brown.vercel.app"),
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
    preview: microlink("https://busgen116-final-project.vercel.app"),
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
    preview: microlink("https://busgen116.vercel.app"),
  },
  {
    team: 11,
    members: ["Leticia Auriemo", "Bennett Evans Zytko", "Alec Profit"],
    title: "Streamline",
    description: "An AI-powered platform for streamlining governance workflows and bureaucratic decision-making — reducing friction without sacrificing accountability.",
    links: [{ label: "Live Site", href: "https://streamline-app-two.vercel.app", type: "site" }],
    preview: microlink("https://streamline-app-two.vercel.app"),
  },
  {
    team: 12,
    members: ["Graham Griffin", "Ethan Romer"],
    title: "Cross-Market Arbitrage",
    description: "An analysis of how AI agents identify and exploit cross-market arbitrage opportunities — and what this means for the fairness and stability of algorithmic financial systems.",
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
    links: [{ label: "Paper", href: "/slides/team14-final.pdf", type: "pdf" }],
  },
  {
    team: 15,
    members: ["Eddy Jiang"],
    title: "News Framing Dashboard",
    description: "A dashboard for analyzing how different news sources frame political and economic events — using AI to quantify the invisible architecture of media bias.",
    links: [{ label: "Paper", href: "/slides/team15-news-framing.pdf", type: "pdf" }],
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

export default function Page() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F9F6F2" }}>

      {/* Top bar */}
      <div style={{ backgroundColor: "#820000" }}>
        <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-white/60">Stanford GSB</span>
            <span className="text-white/30">·</span>
            <span className="text-xs text-white/60">Spring 2026</span>
          </div>
          <span className="text-xs text-white/50">BUSGEN 116</span>
        </div>
      </div>

      {/* Hero */}
      <header style={{ backgroundColor: "#8C1515" }} className="text-white px-6 pt-12 pb-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/50 mb-4">
            Student Final Projects
          </p>
          <h1 className="font-serif text-6xl md:text-7xl font-bold leading-none mb-4 tracking-tight">
            FREE SYSTEMS
          </h1>
          <p className="text-xl text-white/80 font-light mb-8 max-w-xl">
            Preserving Liberty in an Algorithmic Era
          </p>

          <p className="text-white/70 leading-relaxed max-w-2xl mb-4 text-sm">
            Thirty Stanford GSB students spent a quarter doing something that had never been done before:
            they built AI agents calibrated to their own political views, deployed them in live prediction markets,
            sent them into a multi-party legislature to debate real policy, and watched what happened when
            machines tried to govern together.
          </p>
          <p className="text-white/70 leading-relaxed max-w-2xl mb-10 text-sm">
            Every student received a Claude Code subscription and a funded API key. Every assignment was live,
            competitive, and consequential. By week four, agents were casting proxy votes on real proposals.
            By week five, they were dealmaking across party lines in a simulated legislature. By week six,
            they were advising a war cabinet. The final projects here pushed those ideas even further.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {[
              { n: projects.length, label: "final projects" },
              { n: totalStudents, label: "students" },
              { n: liveDemos, label: "live demos" },
            ].map(({ n, label }) => (
              <div key={label}>
                <div className="font-serif text-4xl font-bold">{n}</div>
                <div className="text-white/50 text-xs tracking-wide uppercase mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Press callout */}
      <div className="border-b border-stone-200" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
          <div className="shrink-0 text-xs font-semibold tracking-widest uppercase" style={{ color: "#8C1515" }}>
            As seen in
          </div>
          <div className="w-px h-4 bg-stone-300" />
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
        <div className="mb-8">
          <h2 className="font-serif text-2xl font-bold text-stone-900">What they built</h2>
          <p className="text-stone-500 text-sm mt-1">
            Taught by Professor Andy Hall · Technical Coordinator: Piper Fleming
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={`team-${project.team}`} project={project} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 px-6 py-8 mt-4" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="max-w-6xl mx-auto text-xs text-stone-400 flex flex-wrap items-center justify-between gap-2">
          <span>BUSGEN 116: FREE SYSTEMS · Stanford Graduate School of Business · Spring 2026</span>
          <span style={{ color: "#8C1515" }}>Stanford University</span>
        </div>
      </footer>
    </div>
  );
}
