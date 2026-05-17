export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-slate-800/50 bg-[#0a0a0b]/80 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-bold text-white tracking-tight">
            Hammad<span className="text-blue-400">.</span>
          </a>
          <nav className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#stack" className="hover:text-white transition-colors">Stack</a>
            <a href="https://github.com/hammadbtc" target="_blank" className="hover:text-white transition-colors">GitHub</a>
            <a href="mailto:contact.hammadshk@gmail.com" className="px-4 py-1.5 bg-blue-500 text-white rounded-full text-xs font-medium hover:bg-blue-400 transition-colors">
              Hire me
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-6 pt-40 pb-28 max-w-4xl mx-auto overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20">
              H
            </div>
            <div>
              <p className="font-mono text-xs text-blue-400 tracking-widest uppercase">
                Software Developer
              </p>
              <p className="text-slate-500 text-sm">Pakistan · Remote Worldwide</p>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
            I build things
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              that ship.
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed mb-10">
            Full-stack developer with 3+ years building Web3 infrastructure,
            automation tools, and production applications. I combine deep
            technical work with AI-augmented workflows to deliver fast.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/hammadbtc"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-slate-200 transition-all text-sm shadow-lg shadow-white/5"
            >
              View GitHub
              <span className="font-mono text-xs opacity-60">→</span>
            </a>
            <a
              href="mailto:contact.hammadshk@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 font-medium rounded-xl hover:border-slate-500 hover:text-white hover:bg-slate-900/50 transition-all text-sm"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="px-6 py-24 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-slate-800" />
          <p className="font-mono text-xs text-slate-500 uppercase tracking-widest">
            Featured Work
          </p>
          <div className="h-px flex-1 bg-slate-800" />
        </div>
        <div className="space-y-6">
          <ProjectCard
            title="NFT Mint Bot"
            description="Multi-chain NFT auto-minting platform with AES-256 encrypted wallet vault, FCFS sniping mode, Flashbots MEV protection, contract safety scanning, and real-time analytics dashboard. 7 mainnets + 4 testnets, 28 API routes, deployed on Railway."
            stack={["Next.js", "TypeScript", "ethers.js", "PostgreSQL", "Railway"]}
            href="https://github.com/hammadbtc/nft-mint-bot"
            featured
          />
          <ProjectCard
            title="Discord WL Checker Bot"
            description="Automated whitelist verification bot with slash commands, modal-based user input, ephemeral results, spam protection, and wallet address validation."
            stack={["Discord.js v14", "Node.js"]}
            href="https://github.com/hammadbtc/Discord-wl-checker"
          />
          <ProjectCard
            title="Discord Role Bot"
            description="Admin bulk role assignment bot with file upload and role selection. Deployed on Railway with auto-registering slash commands."
            stack={["Discord.js v14", "Node.js", "Railway"]}
            href="https://github.com/hammadbtc/discord-role-bot"
          />
          <ProjectCard
            title="Ordinal Eggs"
            description="Responsive landing page for an NFT project with team showcase and interactive elements."
            stack={["HTML/CSS", "JavaScript"]}
          />
        </div>
      </section>

      {/* Skills */}
      <section id="stack" className="px-6 py-24 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-slate-800" />
          <p className="font-mono text-xs text-slate-500 uppercase tracking-widest">
            Tech Stack
          </p>
          <div className="h-px flex-1 bg-slate-800" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            "TypeScript", "JavaScript", "Next.js", "React", "Node.js",
            "Tailwind CSS", "PostgreSQL", "Drizzle ORM", "ethers.js",
            "Flashbots", "REST APIs", "Railway", "Vercel", "Git",
            "Discord.js", "AI-Augmented Dev", "HTML/CSS", "SQL",
          ].map((skill) => (
            <div
              key={skill}
              className="group px-4 py-3.5 bg-slate-900/40 border border-slate-800/80 rounded-xl text-sm font-mono text-slate-400 hover:border-blue-500/30 hover:text-white hover:bg-slate-900 transition-all cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 max-w-2xl mx-auto text-center">
        <div className="p-10 rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/50 to-transparent">
          <h2 className="text-2xl font-bold text-white mb-3">Let&apos;s work together</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Available for remote full-time or contract roles. Let&apos;s build something.
          </p>
          <a
            href="mailto:contact.hammadshk@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-400 transition-all text-sm shadow-lg shadow-blue-500/25"
          >
            contact.hammadshk@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 border-t border-slate-900">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Muhammad Hammad</p>
          <div className="flex gap-6">
            <a href="https://github.com/hammadbtc" target="_blank" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/hammad-87b266222" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://x.com/hammadbtc" target="_blank" className="hover:text-white transition-colors">X</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ProjectCard({
  title,
  description,
  stack,
  href,
  featured,
}: {
  title: string;
  description: string;
  stack: string[];
  href?: string;
  featured?: boolean;
}) {
  return (
    <div className={`group p-6 rounded-xl border transition-all ${
      featured
        ? "border-blue-500/20 bg-gradient-to-r from-blue-500/5 to-purple-500/5 hover:border-blue-500/40"
        : "border-slate-800 bg-slate-900/20 hover:bg-slate-900/40 hover:border-slate-700"
    }`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
            {href ? (
              <a href={href} target="_blank" className="hover:text-blue-400 transition-colors">
                {title}
              </a>
            ) : (
              title
            )}
            {href && <span className="font-mono text-xs text-slate-600 group-hover:text-blue-400 transition-colors">↗</span>}
            {featured && (
              <span className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-mono text-blue-400 uppercase tracking-wider">
                Featured
              </span>
            )}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">{description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-slate-800/80 rounded-lg text-xs font-mono text-slate-400 group-hover:text-slate-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
