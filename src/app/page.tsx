export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 pt-32 pb-24 max-w-3xl mx-auto">
        <p className="font-mono text-sm text-blue-400 mb-4 tracking-widest uppercase">
          Software Developer
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
          I build things
          <br />
          <span className="text-blue-400">that ship.</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
          Full-stack developer with 3+ years building Web3 infrastructure,
          automation tools, and production applications. I combine deep
          technical work with AI-augmented workflows to deliver fast.
        </p>
        <div className="flex gap-4 mt-8">
          <a
            href="https://github.com/hammadbtc"
            target="_blank"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-medium rounded-lg hover:bg-slate-200 transition-colors text-sm"
          >
            GitHub
            <span className="font-mono text-xs opacity-60">→</span>
          </a>
          <a
            href="mailto:contact.hammadshk@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-700 text-slate-300 font-medium rounded-lg hover:border-slate-500 hover:text-white transition-colors text-sm"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-12">
          Featured Work
        </p>
        <div className="space-y-8">
          <ProjectCard
            title="NFT Mint Bot"
            description="Multi-chain NFT auto-minting platform with AES-256 encrypted wallet vault, FCFS sniping mode, Flashbots MEV protection, contract safety scanning, and real-time analytics dashboard. 7 mainnets + 4 testnets, 28 API routes, deployed on Railway."
            stack={["Next.js", "TypeScript", "ethers.js", "PostgreSQL", "Railway"]}
            href="https://github.com/hammadbtc/nft-mint-bot"
          />
          <ProjectCard
            title="Discord WL Checker Bot"
            description="Automated whitelist verification bot with slash commands, modal-based user input, ephemeral results, spam protection, and wallet address validation. Built for production community use."
            stack={["Discord.js v14", "Node.js"]}
            href="https://github.com/hammadbtc/Discord-wl-checker"
          />
          <ProjectCard
            title="Discord Role Bot"
            description="Admin bulk role assignment bot with file upload and role selection. Deployed on Railway with auto-registering slash commands and production-ready configuration."
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
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-12">
          Stack
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            "TypeScript", "JavaScript", "Next.js", "React", "Node.js",
            "Tailwind CSS", "PostgreSQL", "Drizzle ORM", "ethers.js",
            "Flashbots", "REST APIs", "Railway", "Vercel", "Git",
            "Discord.js", "AI-Augmented Dev", "HTML/CSS", "SQL",
          ].map((skill) => (
            <div
              key={skill}
              className="px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg text-sm font-mono text-slate-300 hover:border-slate-600 hover:text-white transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 border-t border-slate-900">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="text-white font-semibold">Muhammad Hammad</p>
            <p className="text-slate-500 text-sm mt-1">Software Developer — Available for remote work</p>
          </div>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="mailto:contact.hammadshk@gmail.com" className="hover:text-white transition-colors">
              contact.hammadshk@gmail.com
            </a>
            <a href="https://github.com/hammadbtc" target="_blank" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/hammad-87b266222" target="_blank" className="hover:text-white transition-colors">
              LinkedIn
            </a>
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
}: {
  title: string;
  description: string;
  stack: string[];
  href?: string;
}) {
  return (
    <div className="group p-6 rounded-xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900/60 hover:border-slate-700 transition-all">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            {href ? (
              <a href={href} target="_blank" className="hover:text-blue-400 transition-colors">
                {title} <span className="font-mono text-xs text-slate-600">↗</span>
              </a>
            ) : (
              title
            )}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">{description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-slate-800 rounded-md text-xs font-mono text-slate-400 group-hover:text-slate-300 transition-colors"
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
