"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-slate-800/50 bg-[#0a0a0b]/80 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-bold text-white tracking-tight text-lg">
            Hammad<span className="text-blue-400">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-400">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#stack" className="hover:text-white transition-colors">Stack</a>
            <a href="https://github.com/hammadbtc" target="_blank" className="hover:text-white transition-colors">GitHub</a>
            <a href="mailto:contact.hammadshk@gmail.com" className="px-4 py-1.5 bg-blue-500 text-white rounded-full text-xs font-medium hover:bg-blue-400 transition-colors">
              Hire me
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden p-2 text-slate-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="sm:hidden border-t border-slate-800/50 bg-[#0a0a0b]/95 backdrop-blur-xl">
            <nav className="px-4 py-4 flex flex-col gap-3">
              <a href="#work" onClick={() => setMenuOpen(false)} className="text-slate-400 hover:text-white transition-colors py-1">Work</a>
              <a href="#stack" onClick={() => setMenuOpen(false)} className="text-slate-400 hover:text-white transition-colors py-1">Stack</a>
              <a href="https://github.com/hammadbtc" target="_blank" className="text-slate-400 hover:text-white transition-colors py-1">GitHub</a>
              <a href="mailto:contact.hammadshk@gmail.com" className="inline-block w-fit px-5 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-400 transition-colors mt-2">
                Hire me
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative px-5 sm:px-6 pt-28 sm:pt-40 pb-20 sm:pb-28 max-w-4xl mx-auto overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-10 -left-20 w-56 sm:w-72 h-56 sm:h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-32 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative">
          {/* Avatar + name */}
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20 flex-shrink-0">
              H
            </div>
            <p className="text-white font-semibold text-base sm:text-lg">Muhammad Hammad</p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-5 sm:mb-6 leading-[1.05]">
            I build things
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              that ship.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed mb-8 sm:mb-10">
            Full-stack developer with 3+ years building Web3 infrastructure,
            automation tools, and production applications. I combine deep
            technical work with AI-augmented workflows to deliver fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="https://github.com/hammadbtc"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-slate-200 transition-all text-sm shadow-lg shadow-white/5"
            >
              View GitHub
              <span className="font-mono text-xs opacity-60">→</span>
            </a>
            <a
              href="mailto:contact.hammadshk@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 font-medium rounded-xl hover:border-slate-500 hover:text-white hover:bg-slate-900/50 transition-all text-sm"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="px-5 sm:px-6 py-20 sm:py-24 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-10 sm:mb-12">
          <div className="h-px flex-1 bg-slate-800" />
          <p className="font-mono text-xs text-slate-500 uppercase tracking-widest whitespace-nowrap">
            Featured Work
          </p>
          <div className="h-px flex-1 bg-slate-800" />
        </div>
        <div className="space-y-4 sm:space-y-6">
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
      <section id="stack" className="px-5 sm:px-6 py-20 sm:py-24 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-10 sm:mb-12">
          <div className="h-px flex-1 bg-slate-800" />
          <p className="font-mono text-xs text-slate-500 uppercase tracking-widest whitespace-nowrap">
            Tech Stack
          </p>
          <div className="h-px flex-1 bg-slate-800" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {[
            "TypeScript", "JavaScript", "Next.js", "React", "Node.js",
            "Tailwind CSS", "PostgreSQL", "Drizzle ORM", "ethers.js",
            "Flashbots", "REST APIs", "Railway", "Vercel", "Git",
            "Discord.js", "AI-Augmented Dev", "HTML/CSS", "SQL",
          ].map((skill) => (
            <div
              key={skill}
              className="group px-3 sm:px-4 py-3 sm:py-3.5 bg-slate-900/40 border border-slate-800/80 rounded-xl text-xs sm:text-sm font-mono text-slate-400 hover:border-blue-500/30 hover:text-white hover:bg-slate-900 transition-all cursor-default text-center sm:text-left"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-6 py-20 sm:py-24 max-w-2xl mx-auto text-center">
        <div className="p-6 sm:p-10 rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/50 to-transparent">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Let&apos;s work together</h2>
          <p className="text-slate-400 mb-6 sm:mb-8 max-w-md mx-auto text-sm sm:text-base">
            Available for remote full-time or contract roles. Let&apos;s build something.
          </p>
          <a
            href="mailto:contact.hammadshk@gmail.com"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-400 transition-all text-sm shadow-lg shadow-blue-500/25"
          >
            contact.hammadshk@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-5 sm:px-6 py-10 border-t border-slate-900">
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
    <div className={`group p-4 sm:p-6 rounded-xl border transition-all ${
      featured
        ? "border-blue-500/20 bg-gradient-to-r from-blue-500/5 to-purple-500/5 hover:border-blue-500/40"
        : "border-slate-800 bg-slate-900/20 hover:bg-slate-900/40 hover:border-slate-700"
    }`}>
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2 flex items-center gap-2 flex-wrap">
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
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
          {stack.map((tech) => (
            <span
              key={tech}
              className="px-2 sm:px-2.5 py-1 bg-slate-800/80 rounded-lg text-[11px] sm:text-xs font-mono text-slate-400 group-hover:text-slate-300 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
