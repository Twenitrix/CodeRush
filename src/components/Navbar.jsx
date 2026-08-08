import React, { useState, useEffect } from 'react';
import { Linkedin, Instagram, Github, Mail, ArrowUpRight } from 'lucide-react';

/**
 * CodeRush 1.0 — Navbar
 * Only a custom animated 3-line hamburger is ever visible (desktop + mobile).
 * It sits at the hero's top-left, just above the vertical countdown notch panel.
 * Clicking opens a full-screen glassmorphism overlay (background stays visible).
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Sequence', href: '#sequence' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Vault', href: '#vault' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const socials = [
    { name: 'LinkedIn', Icon: Linkedin, href: 'https://www.linkedin.com/company/csi-tcet/' },
    { name: 'Instagram', Icon: Instagram, href: 'https://www.instagram.com/tcet_csi?igsh=cmk3MmE1ZXJydGI0' },
    { name: 'GitHub', Icon: Github, href: 'https://github.com/AyushRBuilds/CodeRush' },
    { name: 'Email', Icon: Mail, href: 'mailto:csitcettech07@gmail.com' },
  ];

  /* Lock scroll while the overlay is open + close on Escape */
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  /* Track the section in view so the active link glows lime */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const onScroll = () => {
      let current = 'home';
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ============ HAMBURGER — hero top-left, above the countdown notch ============ */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        className="group fixed top-5 left-4 sm:top-7 sm:left-7 z-[110] w-12 h-12 sm:w-14 sm:h-14 grid place-items-center rounded-2xl bg-[#140e28] border-2 border-[#2d1b54] shadow-[3px_3px_0px_#ccff00] transition-all duration-300 hover:border-[#ccff00] hover:shadow-[0_0_22px_rgba(204,255,0,0.55)] active:scale-95"
      >
        <span className="relative block w-6 sm:w-7 h-[15px] sm:h-[17px]">
          <span
            className={`absolute left-0 h-[2.5px] w-full rounded-full transition-all duration-500 ease-[cubic-bezier(.68,-0.55,.27,1.55)] ${
              open ? 'top-1/2 -translate-y-1/2 rotate-45 bg-[#ccff00]' : 'top-0 bg-white'
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 -translate-y-1/2 h-[2.5px] rounded-full bg-[#ccff00] transition-all duration-300 ${
              open ? 'w-0 opacity-0' : 'w-2/3 opacity-100 group-hover:w-full'
            }`}
          />
          <span
            className={`absolute left-0 h-[2.5px] w-full rounded-full transition-all duration-500 ease-[cubic-bezier(.68,-0.55,.27,1.55)] ${
              open ? 'top-1/2 -translate-y-1/2 -rotate-45 bg-[#ccff00]' : 'bottom-0 bg-white'
            }`}
          />
        </span>
      </button>

      {/* ================== FULL-SCREEN GLASSMORPHISM OVERLAY ================== */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Translucent glass sheet — page stays visible through the blur */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-[#140e28]/55 backdrop-saturate-150 transition-all duration-700 ${
            open ? 'backdrop-blur-2xl' : 'backdrop-blur-0'
          }`}
        />

        {/* Ambient purple + lime glows */}
        <div className="pointer-events-none absolute -top-28 -left-24 w-[28rem] h-[28rem] rounded-full bg-[#8b5cf6]/40 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-20 w-[26rem] h-[26rem] rounded-full bg-[#ccff00]/25 blur-[130px]" />
        <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-[#06b6d4]/20 blur-[140px]" />
        {/* Faint grid texture for the cyberpunk frame feel */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
            backgroundSize: '58px 58px',
          }}
        />

        <div className="relative h-full overflow-y-auto px-6 sm:px-12 lg:px-20 pt-24 sm:pt-28 pb-10 flex flex-col">
          {/* -------- Logo: CR + CODERUSH + CSI TCET -------- */}
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 w-fit transition-all duration-500 ${
              open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
            }`}
          >
            <span className="w-11 h-11 shrink-0 grid place-items-center rounded-2xl bg-[#8b5cf6] text-white font-mono font-bold text-lg border-2 border-[#c4b5fd] shadow-[3px_3px_0px_#ccff00]">
              CR
            </span>
            <span className="min-w-0">
              <span className="block font-sans text-2xl sm:text-3xl font-black tracking-tight text-white leading-none">
                CODE<span className="text-[#c4b5fd] ml-0.5">RUSH</span>
              </span>
              <span className="mt-1 block font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.28em] text-[#ccff00]/80">
                CSI TCET
              </span>
            </span>
          </a>

          {/* -------- Navigation -------- */}
          <nav className="mt-10 sm:mt-14 flex-1 flex flex-col gap-0.5 sm:gap-1">
            {navLinks.map((link, i) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${90 + i * 55}ms` : '0ms' }}
                  className={`group relative w-fit py-1 font-sans text-[2.1rem] sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] transition-all duration-500 ${
                    open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  } ${
                    isActive
                      ? 'text-[#ccff00] drop-shadow-[0_0_22px_rgba(204,255,0,0.75)]'
                      : 'text-white/85 hover:text-[#ccff00] hover:drop-shadow-[0_0_18px_rgba(204,255,0,0.5)]'
                  }`}
                >
                  <span className="mr-3 align-middle font-mono text-[10px] sm:text-xs font-bold text-[#8b5cf6]">
                    0{i + 1}
                  </span>
                  <span className="relative z-10">{link.name}</span>
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[3px] rounded-full bg-[#ccff00] shadow-[0_0_16px_#ccff00] transition-all duration-500 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* -------- Register CTA + Socials -------- */}
          <div
            className={`mt-10 pt-8 border-t border-[#2d1b54] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 transition-all duration-700 ${
              open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: open ? '560ms' : '0ms' }}
          >
            <a
              href="#register"
              onClick={() => setOpen(false)}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-purple-gradient bg-[linear-gradient(135deg,#8b5cf6_0%,#6d28d9_100%)] text-white font-mono text-xs sm:text-sm font-black uppercase tracking-[0.2em] border-2 border-[#c4b5fd]/60 shadow-[0_0_28px_rgba(139,92,246,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ccff00] hover:shadow-[0_0_32px_rgba(204,255,0,0.55)]"
            >
              Register Now
              <span className="w-7 h-7 grid place-items-center rounded-full bg-[#ccff00] text-[#140e28]">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>

            <div className="flex items-center gap-3">
              {socials.map(({ name, Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="w-11 h-11 grid place-items-center rounded-full bg-white/5 border border-[#2d1b54] text-white/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:text-[#ccff00] hover:border-[#ccff00] hover:shadow-[0_0_18px_rgba(204,255,0,0.45)]"
                >
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}