"use client";

import React, { useState } from "react";

interface SocialLink {
  id: string;
  category: string;
  title: string;
  url: string;
  description: string;
  tag: string;
  isExternal?: boolean;
}

const socialLinks: SocialLink[] = [
  {
    id: "1",
    category: "CODE",
    title: "Official GitHub Repository",
    url: "https://github.com/pdj0918",
    description: "Browse open-source codebases, repositories, and learning archives.",
    tag: "GBA",
    isExternal: true,
  },
  {
    id: "2",
    category: "LOG",
    title: "Developer Tech Blog (Velog)",
    url: "https://velog.io",
    description: "In-depth development chronicles, problem-solving, and tech insights.",
    tag: "N64",
    isExternal: true,
  },
  {
    id: "3",
    category: "PROJECT",
    title: "My-LinkHY Web Console",
    url: "https://github.com/pdj0918/my-link-hy",
    description: "Next.js 15 hardware-rendered linktree console edition.",
    tag: "NGC",
    isExternal: true,
  },
  {
    id: "4",
    category: "CAMPUS",
    title: "Instagram — Campus Life",
    url: "https://instagram.com",
    description: "Daily life, snapshots, and developer lifestyle updates.",
    tag: "GBC",
    isExternal: true,
  },
  {
    id: "5",
    category: "CONTACT",
    title: "Direct E-Mail Dispatch",
    url: "mailto:p29522295@gmail.com",
    description: "Fast communication for projects, collaboration, and coffee chats.",
    tag: "MAIL",
    isExternal: false,
  },
];

const featuredSystems = [
  {
    name: "GAME BOY ADVANCE",
    subtitle: "32-Bit Portable Power",
    code: "AGB-001",
    icon: "🎮",
    bg: "bg-[#8ba1d4]",
  },
  {
    name: "NINTENDO GAMECUBE",
    subtitle: "Optical Disc Architecture",
    code: "DOL-001",
    icon: "👾",
    bg: "bg-[#7a8aba]",
  },
  {
    name: "NINTENDO 64",
    subtitle: "Real 3D Analog Graphics",
    code: "NUS-001",
    icon: "🕹️",
    bg: "bg-[#8ba1d4]",
  },
  {
    name: "POKÉMON CENTER",
    subtitle: "Official Merch & Community",
    code: "PKM-2001",
    icon: "⚡",
    bg: "bg-[#7a8aba]",
  },
];

export default function Home() {
  const [selectedPoll, setSelectedPoll] = useState("1");
  const [pollVoted, setPollVoted] = useState(false);
  const [copiedNotice, setCopiedNotice] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedNotice(`${label} COPIED!`);
    setTimeout(() => setCopiedNotice(null), 2500);
  };

  return (
    <div className="min-h-screen py-4 px-2 sm:px-4 flex justify-center text-[#21242e] select-none">
      {/* 2001 Main Hardware Canvas (~800px fixed width target) */}
      <div className="w-full max-w-[820px] bg-[#7a8aba] border-t-2 border-l-2 border-white/70 border-b-2 border-r-2 border-[#3d4f97] shadow-[0_12px_32px_rgba(0,0,0,0.6)] relative">
        
        {/* Left-Rail Rotated Tabs (Desktop decorative hardware tabs) */}
        <div className="hidden lg:flex flex-col absolute -left-[23px] top-[140px] space-y-1 z-10">
          {["TOP TEN", "TOP PICKS", "PLAYER'S CHOICE", "ESRB RATINGS"].map((tab) => (
            <div
              key={tab}
              className="bg-[#21242e] text-[#9fbee7] border-l border-t border-b border-[#3d4f97] text-[9px] font-bold py-3 px-1 leading-none tracking-widest [writing-mode:vertical-rl] rotate-180 hover:bg-[#3d4f97] hover:text-white cursor-pointer transition-colors"
            >
              {tab}
            </div>
          ))}
        </div>

        {/* 1. Masthead Row: Mario Welcome Speech Bubble & Quick Search */}
        <header className="bg-[#7a8aba] px-3 pt-3 pb-2 flex flex-wrap items-end justify-between border-b border-[#3d4f97] gap-2">
          {/* Mascot + Speech Bubble */}
          <div className="flex items-center gap-2">
            {/* Pixel Character Frame */}
            <div className="w-10 h-10 bg-[#e60012] border border-white/80 shadow-[inset_1px_1px_0px_rgba(255,255,255,0.7),1px_1px_0px_#101217] flex items-center justify-center text-xl select-none">
              🍄
            </div>
            {/* Speech Bubble */}
            <div className="relative bg-white border border-[#21242e] px-3 py-1.5 rounded-lg shadow-sm">
              <span className="text-[11px] font-bold text-[#21242e] tracking-tight">
                Welcome to <span className="text-[#e60012] font-black">Nintendo</span>.com — Dajeong Station!
              </span>
              {/* Bubble pointer triangle */}
              <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-4 border-r-white" />
            </div>
          </div>

          {/* Masthead Search & Utility */}
          <div className="flex items-center gap-1 bg-[#8ba1d4] p-1 border-t border-l border-white/80 border-b border-r border-[#3d4f97]">
            <span className="text-[10px] font-bold text-[#21242e] px-1 uppercase tracking-wide">
              Search:
            </span>
            <select className="text-[11px] h-[21px] bg-white text-[#21242e] border border-[#21242e] px-1 font-sans focus:outline-none">
              <option>All Links</option>
              <option>Projects</option>
              <option>Tech Blog</option>
              <option>Systems</option>
            </select>
            <input
              type="text"
              defaultValue="Frontend Dev"
              className="text-[11px] h-[21px] w-24 sm:w-32 bg-white text-[#21242e] border border-[#21242e] px-1 font-sans focus:outline-none"
            />
            <button
              onClick={() => handleCopy("https://github.com/pdj0918/my-link-hy", "SITE URL")}
              className="h-[21px] px-2 bg-[#ecab37] hover:bg-[#e48600] active:bg-[#e48600] text-[#21242e] font-bold text-[10px] uppercase tracking-wider n-btn-raised flex items-center"
            >
              GO
            </button>
          </div>
        </header>

        {/* 2. Primary Nav Bar (Carbon Navy with Halftone Dot Matrix Texture) */}
        <nav className="n-carbon px-2 sm:px-3 py-1.5 flex flex-wrap items-center justify-between gap-2">
          {/* Nintendo Style Racetrack Logo Pill */}
          <div className="flex items-center gap-3">
            <div className="bg-[#e60012] border-2 border-white px-3 py-0.5 rounded-full flex items-center shadow-sm">
              <span className="text-white text-xs sm:text-sm font-black italic tracking-tighter">
                DAJEONG
              </span>
            </div>

            {/* Nav Gold Section Links */}
            <div className="flex items-center space-x-3 sm:space-x-4 text-xs font-bold uppercase tracking-wider">
              {["GAMES", "SYSTEMS", "NEWS", "NSIDER", "PORTFOLIO"].map((item) => (
                <span
                  key={item}
                  className="text-[#e48600] hover:text-[#f68d1f] hover:underline cursor-pointer transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Amber Utility Chips */}
          <div className="flex items-center space-x-1.5">
            <button
              onClick={() => handleCopy("https://github.com/pdj0918", "GITHUB")}
              className="bg-[#ecab37] hover:bg-[#e48600] text-[#21242e] text-[10px] font-bold px-2 py-0.5 rounded-sm n-btn-raised uppercase tracking-wider"
            >
              CODE BANK
            </button>
            <button
              onClick={() => handleCopy("p29522295@gmail.com", "EMAIL")}
              className="bg-[#ecab37] hover:bg-[#e48600] text-[#21242e] text-[10px] font-bold px-2 py-0.5 rounded-sm n-btn-raised uppercase tracking-wider"
            >
              DEV FINDER
            </button>
          </div>
        </nav>

        {/* 3. Subnav Strip (Pale Sky) */}
        <div className="bg-[#9fbee7] border-b border-[#3d4f97] px-3 py-1 flex items-center justify-between text-[11px] font-bold text-[#21242e]">
          <div className="flex flex-wrap items-center space-x-2 sm:space-x-3 text-[10px] sm:text-[11px] tracking-tight">
            <span>PARENTS</span>
            <span className="text-[#3d4f97]">|</span>
            <span>CUSTOMER SERVICE</span>
            <span className="text-[#3d4f97]">|</span>
            <span className="text-[#e60012] font-black">REACT 19</span>
            <span className="text-[#3d4f97]">|</span>
            <span>NEXT.JS 15</span>
            <span className="text-[#3d4f97]">|</span>
            <span>ONLINE RESUME</span>
            <span className="text-[#3d4f97]">|</span>
            <span>CONTACT</span>
          </div>

          {copiedNotice && (
            <span className="text-[10px] font-black bg-[#e60012] text-white px-2 py-0.2 rounded animate-pulse">
              {copiedNotice}
            </span>
          )}
        </div>

        {/* 4. Photographic Hero Panel: Lavender tint with outlined display wordmark */}
        <section className="m-3 p-4 sm:p-5 bg-gradient-to-r from-[#acace7] via-[#b6b6f0] to-[#c0d5e6] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-[#3d4f97] shadow-inner relative overflow-hidden">
          {/* Circuit board retro backdrop overlay */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(#3d4f97 1px, transparent 1px), linear-gradient(to right, #3d4f97 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              {/* Category Eyebrow */}
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#21242e] text-[#f68d1f] text-[10px] font-black uppercase tracking-widest border border-white/60 mb-2">
                <span>★ OFFICIAL HARDWARE RELEASE 2001</span>
              </div>

              {/* Chunky Outlined Hero Wordmark */}
              <h1 className="n-boxart-display text-3xl sm:text-4xl leading-tight">
                PARK DA JEONG
              </h1>
              <p className="text-sm sm:text-base font-black text-[#21242e] tracking-tight mt-0.5">
                FRONTEND DEVELOPER & INTERACTION ARCHITECT
              </p>

              {/* Tagline */}
              <p className="text-[12px] font-bold text-[#3d4f97] max-w-md mt-2 leading-snug">
                &ldquo;Gorgeous interface graphics, lightning-fast rendering, and robust code. 
                Experience next-generation web creation on the 2001 Console Standard.&rdquo;
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mt-4">
                <a
                  href="https://github.com/pdj0918"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#f68d1f] hover:bg-[#e48600] text-white px-3 py-1.5 text-xs font-black uppercase tracking-wider n-btn-raised"
                >
                  <span>VISIT GITHUB</span>
                  {/* Round Signal Orange Arrow Disc */}
                  <span className="w-4 h-4 bg-white text-[#f68d1f] rounded-full flex items-center justify-center text-[10px] font-black">
                    ►
                  </span>
                </a>

                <button
                  onClick={() => handleCopy("p29522295@gmail.com", "EMAIL")}
                  className="inline-flex items-center gap-2 bg-[#ecab37] hover:bg-[#e48600] text-[#21242e] px-3 py-1.5 text-xs font-black uppercase tracking-wider n-btn-raised"
                >
                  <span>SEND TRANSMISSION</span>
                  <span className="text-[11px]">✉</span>
                </button>
              </div>
            </div>

            {/* Hardware Console Graphic Card */}
            <div className="w-36 h-36 sm:w-44 sm:h-44 bg-[#7a8aba] border-2 border-white/80 border-b-2 border-r-2 border-[#3d4f97] shadow-md p-2 flex flex-col items-center justify-center relative flex-shrink-0">
              <div className="w-full h-full bg-[#21242e] border border-[#3d4f97] p-2 flex flex-col items-center justify-center text-center">
                <span className="text-4xl sm:text-5xl select-none mb-1">🎮</span>
                <span className="text-[10px] font-black text-[#e48600] tracking-widest uppercase">
                  GAME BOY ADVANCE
                </span>
                <span className="text-[9px] font-bold text-white/80">
                  32-BIT WEB ENGINE
                </span>
              </div>
              <div className="absolute -bottom-2 bg-[#e60012] text-white text-[9px] font-black px-2 py-0.5 border border-white">
                VER. 2001.09
              </div>
            </div>
          </div>
        </section>

        {/* 5. Two-Column Body Content Split */}
        <div className="px-3 pb-3 grid grid-cols-1 md:grid-cols-3 gap-3">
          
          {/* Main 2/3 Content Column */}
          <div className="md:col-span-2 space-y-3">
            
            {/* Section 1: Official Links & News Rows */}
            <div className="bg-[#7a8aba] border border-[#3d4f97]">
              {/* Section Header Bar */}
              <div className="bg-[#7a8aba] border-t border-l border-white/70 border-b border-[#3d4f97] px-2.5 py-1 flex items-center justify-between">
                <span className="text-[11px] font-black text-[#21242e] tracking-wider uppercase flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-[#3d4f97] inline-block" />
                  OFFICIAL RELEASES & NETWORK LINKS
                </span>
                <span className="text-[9px] font-bold text-[#3d4f97] uppercase tracking-wide">
                  SYSTEM ACTIVE
                </span>
              </div>

              {/* News / Link Rows (Platinum Gray Background with Chamfered Seams) */}
              <div className="p-1.5 space-y-1.5 bg-[#8ba1d4]">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between p-2 bg-[#dedede] hover:bg-white border-t border-l border-white border-b border-r border-[#60619c] transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      {/* Platform Tag Badge */}
                      <span className="px-1.5 py-0.5 bg-[#21242e] text-[#ecab37] text-[9px] font-black tracking-widest flex-shrink-0">
                        {link.tag}
                      </span>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#3d4f97] group-hover:text-[#e60012] group-hover:underline truncate">
                            {link.title}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#21242e]/80 truncate leading-tight">
                          {link.description}
                        </p>
                      </div>
                    </div>

                    {/* Forward Signal Orange Chevron Chip */}
                    <div className="w-[18px] h-[18px] bg-[#f68d1f] group-hover:bg-[#e48600] text-white flex items-center justify-center flex-shrink-0 text-[10px] font-black shadow-sm">
                      ►
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Section 2: Player's Poll 2001 (Interactive Radio Form) */}
            <div className="bg-[#8ba1d4] border-t-2 border-l-2 border-white/70 border-b-2 border-r-2 border-[#3d4f97] p-3">
              <div className="flex items-center justify-between border-b border-[#3d4f97] pb-1 mb-2">
                <span className="text-[11px] font-black text-[#21242e] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="text-[#e60012]">●</span> PLAYER&apos;S POLL — AUTUMN 2001
                </span>
                <span className="text-[9px] font-bold text-[#3d4f97]">POWER QUESTION</span>
              </div>

              <p className="text-xs font-bold text-[#21242e] mb-2.5 leading-snug">
                Which frontend core technology powers your dream console project?
              </p>

              <div className="space-y-1.5 mb-3 text-xs font-normal">
                {[
                  { id: "1", label: "Next.js 15 App Router + React 19 Engine" },
                  { id: "2", label: "TypeScript Strong-Typing Cartridge" },
                  { id: "3", label: "Nintendo 2001 Brushed Chrome Hardware UI" },
                  { id: "4", label: "Full-Stack Vibe Coding & AI Pair Synergy" },
                ].map((option) => (
                  <label
                    key={option.id}
                    className="flex items-center gap-2 p-1.5 bg-[#dedede] border border-white hover:bg-white cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="frontend_poll"
                      value={option.id}
                      checked={selectedPoll === option.id}
                      onChange={() => setSelectedPoll(option.id)}
                      className="accent-[#e60012]"
                    />
                    <span className="text-[11px] font-bold text-[#21242e]">{option.label}</span>
                  </label>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setPollVoted(true)}
                  className="bg-[#f68d1f] hover:bg-[#e48600] text-white text-[11px] font-black px-4 py-1.5 n-btn-raised uppercase tracking-wider"
                >
                  {pollVoted ? "✓ VOTE RECORDED" : "SUBMIT VOTE ►"}
                </button>

                {pollVoted && (
                  <span className="text-[10px] font-bold text-[#3d4f97] animate-pulse">
                    Thank you! 1,280 players have answered.
                  </span>
                )}
              </div>
            </div>

            {/* Section 3: Featured Systems 2x2 Grid */}
            <div className="bg-[#7a8aba] border border-[#3d4f97] p-2">
              <div className="text-[10px] font-black text-[#21242e] uppercase tracking-wider border-b border-[#3d4f97] pb-1 mb-2">
                ≡ FEATURED HARDWARE CHROME
              </div>
              <div className="grid grid-cols-2 gap-2">
                {featuredSystems.map((sys) => (
                  <div
                    key={sys.name}
                    className="p-2 bg-[#dedede] border-t border-l border-white border-b border-r border-[#3d4f97] flex items-center gap-2"
                  >
                    <div className="w-8 h-8 bg-[#21242e] text-white flex items-center justify-center text-lg flex-shrink-0">
                      {sys.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-black text-[#21242e] leading-tight truncate">
                        {sys.name}
                      </div>
                      <div className="text-[9px] text-[#3d4f97] font-bold truncate">
                        {sys.subtitle}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Action Rail (~1/3) */}
          <div className="space-y-3">
            
            {/* Carbon Command Buttons Slab */}
            <div className="bg-[#21242e] border-t border-l border-white/40 border-b-2 border-r-2 border-[#101217] p-2 space-y-1.5">
              <div className="text-[9px] font-black text-[#ecab37] uppercase tracking-widest px-1 mb-1">
                ► COMMAND DECK
              </div>

              <button
                onClick={() => handleCopy("p29522295@gmail.com", "EMAIL")}
                className="w-full text-left px-2 py-1.5 bg-[#2b303d] hover:bg-[#3d4f97] text-white text-[11px] font-bold uppercase tracking-wider border-t border-l border-white/20 border-b border-r border-black flex items-center justify-between"
              >
                <span>[✉] SEND TRANSMISSION</span>
                <span className="text-[#f68d1f]">►</span>
              </button>

              <a
                href="https://github.com/pdj0918"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-left px-2 py-1.5 bg-[#2b303d] hover:bg-[#3d4f97] text-white text-[11px] font-bold uppercase tracking-wider border-t border-l border-white/20 border-b border-r border-black flex items-center justify-between block"
              >
                <span>[💻] GITHUB PORTAL</span>
                <span className="text-[#f68d1f]">►</span>
              </a>

              <a
                href="https://velog.io"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-left px-2 py-1.5 bg-[#2b303d] hover:bg-[#3d4f97] text-white text-[11px] font-bold uppercase tracking-wider border-t border-l border-white/20 border-b border-r border-black flex items-center justify-between block"
              >
                <span>[📝] VELOG ARTICLES</span>
                <span className="text-[#f68d1f]">►</span>
              </a>

              <button
                onClick={() => handleCopy(window.location.href, "PAGE URL")}
                className="w-full text-left px-2 py-1.5 bg-[#2b303d] hover:bg-[#3d4f97] text-white text-[11px] font-bold uppercase tracking-wider border-t border-l border-white/20 border-b border-r border-black flex items-center justify-between"
              >
                <span>[🔗] SHARE CONSOLE URL</span>
                <span className="text-[#f68d1f]">►</span>
              </button>
            </div>

            {/* Info Box: "What Is — Vibe Coding & LinkHY" */}
            <div className="bg-white border-t-2 border-l-2 border-white border-b-2 border-r-2 border-[#3d4f97]">
              {/* Amber Header Tab */}
              <div className="bg-[#ecab37] px-2.5 py-1 border-b border-[#21242e] flex items-center justify-between">
                <span className="text-[10px] font-black text-[#21242e] uppercase tracking-wider">
                  WHAT IS — LINK HY 2001?
                </span>
                <span className="text-[9px] font-black text-[#21242e]">INFO</span>
              </div>
              <div className="p-3 text-[11px] text-[#21242e] leading-relaxed">
                <p className="font-bold mb-2">
                  Welcome to the hardware-styled developer console!
                </p>
                <p className="text-[11px] text-[#21242e]/85">
                  This station renders modern web technologies through the lens of early-2000s Nintendo hardware aesthetics: injection-molded brushed periwinkle chrome, chamfered edge plates, and signal-orange directional cues.
                </p>
              </div>
            </div>

            {/* Side Promo Card: Game Boy Advance Hardware Render */}
            <div className="bg-[#acace7] border-t border-l border-white border-b border-r border-[#3d4f97] p-3 text-center">
              <div className="bg-[#21242e] text-[#f68d1f] text-[9px] font-black tracking-widest py-0.5 uppercase mb-2">
                PORTABLE SYSTEM COMPATIBLE
              </div>
              <div className="text-3xl my-1 select-none">👾</div>
              <div className="n-boxart-display text-base text-white">
                GAME BOY ADVANCE
              </div>
              <p className="text-[10px] font-bold text-[#3d4f97] mt-1">
                Optimized for handheld and desktop web viewports.
              </p>
            </div>

            {/* ESRB Rating Stamp */}
            <div className="bg-[#dedede] border border-[#3d4f97] p-2 flex items-center gap-2">
              <div className="w-9 h-11 bg-white border border-[#21242e] flex flex-col items-center justify-center font-black leading-none flex-shrink-0">
                <span className="text-sm font-black">E</span>
                <span className="text-[7px]">EVERYONE</span>
              </div>
              <div className="text-[9px] leading-tight text-[#21242e]">
                <p className="font-black">CONTENT RATED BY ESRB</p>
                <p className="text-[#3d4f97] font-semibold mt-0.5">Clean Code · High Performance</p>
              </div>
            </div>

          </div>

        </div>

        {/* 6. Footer Bar (Carbon Navy Chamfered Slab) */}
        <footer className="n-carbon p-3 border-t-2 border-[#101217] flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
          {/* ESRB Privacy-Certified Amber Badge */}
          <div className="flex items-center gap-2">
            <div className="bg-[#ecab37] text-[#21242e] text-[9px] font-black px-2 py-1 rounded-[2px] border border-white tracking-wider uppercase shadow-sm">
              ESRB — PRIVACY CERTIFIED
            </div>
            <span className="text-[10px] text-[#9fbee7] font-bold hover:underline cursor-pointer">
              Privacy Policy
            </span>
          </div>

          {/* Copyright and Trademarks */}
          <div className="text-center sm:text-right text-[10px] text-[#9fbee7]/90 font-sans leading-tight">
            <p className="font-bold">
              © 1997–2001 NINTENDO OF AMERICA INC. / PARK DA JEONG ALL RIGHTS RESERVED.
            </p>
            <p className="text-[9px] text-[#9fbee7]/70 mt-0.5">
              GAMES, SYSTEMS, POKÉMON AND NINTENDO ARE TRADEMARKS OF NINTENDO.
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}
