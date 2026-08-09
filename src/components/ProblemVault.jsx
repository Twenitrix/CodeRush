import React, { useState, useEffect } from 'react';
import { Lock, Unlock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProblemVault() {
  // Target Date: 22 August 2026, 10:00 AM IST
  const targetDate = new Date('2026-08-22T10:00:00+05:30').getTime();

  const [isUnlocked, setIsUnlocked] = useState(new Date().getTime() >= targetDate);

  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [vaultSpin, setVaultSpin] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = (now) => {
      const difference = targetDate - now;
      let tempTimeLeft = { days: '00', hours: '00', minutes: '00', seconds: '00' };

      if (difference > 0) {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const m = Math.floor((difference / 1000 / 60) % 60);
        const s = Math.floor((difference / 1000) % 60);

        tempTimeLeft = {
          days: String(d).padStart(2, '0'),
          hours: String(h).padStart(2, '0'),
          minutes: String(m).padStart(2, '0'),
          seconds: String(s).padStart(2, '0')
        };
      }
      return tempTimeLeft;
    };

    const updateStatus = () => {
      const now = new Date().getTime();
      setIsUnlocked(now >= targetDate);
      setTimeLeft(calculateTimeLeft(now));
    };

    updateStatus();
    const timer = setInterval(updateStatus, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      try {
        await fetch("https://formsubmit.co/ajax/csitcettech07@gmail.com", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            email: email,
            _subject: "CodeRush 1.0 - New Vault Notification Registration",
          })
        });
      } catch (err) {
        console.error("Form submission failed", err);
      }
      setTimeout(() => setSubmitted(false), 5000);
      setEmail('');
    }
  };

  return (
    <section 
      id="vault" 
      className="py-20 md:py-28 relative z-10 bg-purple-doodle text-white border-y-4 border-purple overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Vault Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full bg-[#181135]/65 border-2 border-purple-light/20 rounded-[2.5rem] p-10 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative overflow-hidden backdrop-blur-md shadow-2xl hover:border-lime/40 transition-colors duration-300"
        >
          {/* Decorative glows */}
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-purple/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
          <div className="absolute left-0 top-0 w-80 h-80 bg-cyanAccent/5 rounded-full blur-[80px] -z-10 pointer-events-none" />
          
          {/* Left Column: Form / Info */}
          <div className="lg:col-span-4 text-left space-y-6 z-10">
            {/* Section label */}
            <div className="flex flex-col items-start">
              <span className="font-mono text-xs font-bold tracking-[0.25em] text-lime uppercase leading-none mb-2">
                THE CHALLENGE
              </span>
              <h3 className="font-sans font-black font-extrabold text-3xl md:text-5xl tracking-tighter text-white uppercase leading-none">
                VAULT
              </h3>
            </div>

            {/* Typography Pairing */}
            <h2 className="font-sans font-black font-extrabold text-4xl md:text-5xl text-white tracking-tight leading-tight uppercase">
              THE PROBLEMS <br />
              ARE <span className="font-handwriting font-normal text-4xl md:text-6xl text-lime lowercase tracking-normal inline-block transform -rotate-2 select-none mx-2">
                {isUnlocked ? 'unlocked' : 'locked'}
              </span>
            </h2>

            {isUnlocked ? (
              <>
                <p className="text-purple-light/80 text-xs md:text-sm font-semibold leading-relaxed">
                  All challenge tracks and problem statements are now fully live. Choose your track, coordinate with your team, and begin coding!
                </p>
                <a
                  href="#/problems"
                  className="w-full inline-flex items-center justify-between bg-lime text-graphite hover:bg-lime-hover hover:scale-[1.02] px-6 py-3.5 rounded-full font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-lg active:scale-95 cursor-pointer font-mono"
                >
                  <span>Start Building (View Problems)</span>
                  <ArrowRight size={14} className="stroke-[3]" />
                </a>
              </>
            ) : (
              <>
                <p className="text-purple-light/80 text-xs md:text-sm font-semibold leading-relaxed">
                  Problem statements unlock only on Hackathon Day. Sign up to get notified the second they release.
                </p>
                {/* Email Sign-up */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="Enter email to get notified"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#0a0718] border border-purple-light/30 text-white px-5 py-3.5 rounded-full text-xs outline-none focus:border-lime focus:ring-2 focus:ring-lime/20 transition-all font-medium placeholder:text-purple-light/40"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-between bg-lime text-graphite hover:bg-lime-hover hover:scale-[1.02] px-6 py-3.5 rounded-full font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-lg active:scale-95 cursor-pointer font-mono"
                  >
                    <span>{submitted ? 'Notification Set!' : 'Notify Me'}</span>
                    <ArrowRight size={14} className="stroke-[3]" />
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Center Column: Safe Vault Dial */}
          <div className="lg:col-span-4 flex items-center justify-center relative z-10">
            <div 
              className={`relative w-64 h-64 rounded-full bg-gradient-to-br from-[#1b1238] to-[#0f0b1a] shadow-2xl border-4 flex items-center justify-center cursor-pointer group transition-all duration-300 ${
                isUnlocked ? 'border-lime/40 shadow-lime/5' : 'border-purple-light/20'
              }`}
              onMouseEnter={() => setVaultSpin(true)}
              onMouseLeave={() => setVaultSpin(false)}
            >
              {/* Outer ticking dial */}
              <div className={`absolute inset-4 rounded-full border border-dashed animate-spin-slow ${
                isUnlocked ? 'border-lime/30' : 'border-purple-light/20'
              }`} />
              
              {/* Safe Handle Dial */}
              <svg 
                className={`w-40 h-40 transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isUnlocked ? 'text-lime/55' : 'text-purple-light/40'
                } ${
                  vaultSpin ? 'rotate-180 scale-102' : 'rotate-0'
                }`}
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="14" fill="#0f0b1a" stroke={isUnlocked ? '#ccff00' : '#2e2254'} strokeWidth="3" />
                <path d="M50 14 V36M50 64 V86M14 50 H36M64 50 H86" stroke={isUnlocked ? '#ccff00' : '#2e2254'} strokeWidth="4" strokeLinecap="round" />
                <path d="M25 25 L40 40M60 60 L75 75M75 25 L60 40M40 60 L25 75" stroke={isUnlocked ? '#ccff00' : '#2e2254'} strokeWidth="4" strokeLinecap="round" />
                <circle cx="50" cy="14" r="5" fill={isUnlocked ? '#ccff00' : '#8b5cf6'} stroke={isUnlocked ? '#ccff00' : '#2e2254'} strokeWidth="2" />
                <circle cx="50" cy="86" r="5" fill={isUnlocked ? '#ccff00' : '#8b5cf6'} stroke={isUnlocked ? '#ccff00' : '#2e2254'} strokeWidth="2" />
                <circle cx="14" cy="50" r="5" fill={isUnlocked ? '#ccff00' : '#8b5cf6'} stroke={isUnlocked ? '#ccff00' : '#2e2254'} strokeWidth="2" />
                <circle cx="86" cy="50" r="5" fill={isUnlocked ? '#ccff00' : '#8b5cf6'} stroke={isUnlocked ? '#ccff00' : '#2e2254'} strokeWidth="2" />
              </svg>

              {/* Inner lock icon */}
              <div className={`absolute w-14 h-14 rounded-full bg-[#0a0718] border-2 flex items-center justify-center shadow-inner ${
                isUnlocked ? 'border-lime/30' : 'border-purple-light/25'
              }`}>
                {isUnlocked ? (
                  <Unlock size={18} className="text-lime animate-bounce" />
                ) : (
                  <Lock size={18} className="text-lime animate-pulse" />
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Status / Timer */}
          <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6 z-10">
            {/* Status indicator */}
            <div className={`flex items-center gap-3 bg-[#0a0718] border rounded-full px-5 py-2 shadow-inner ${
              isUnlocked ? 'border-lime/30' : 'border-purple-light/20'
            }`}>
              <span className={`flex items-center justify-center w-5 h-5 rounded-full ${
                isUnlocked ? 'bg-lime/20' : 'bg-lime/10'
              }`}>
                {isUnlocked ? (
                  <Unlock size={10} className="text-lime" />
                ) : (
                  <Lock size={10} className="text-lime" />
                )}
              </span>
              <div className="text-left">
                <div className="text-[8px] font-mono font-bold tracking-widest text-[#ccff00]/60 uppercase leading-none">
                  ACCESS LEVEL
                </div>
                <div className="text-xs font-mono font-extrabold text-lime tracking-wide leading-tight mt-0.5">
                  {isUnlocked ? 'GRANTED' : 'LOCKED'}
                </div>
              </div>
            </div>

            {/* Countdown / Active State */}
            {isUnlocked ? (
              <div className="flex flex-col items-center lg:items-start space-y-2">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lime/10 text-lime font-mono text-[10px] font-bold uppercase border border-lime/30 shadow-[0_0_15px_rgba(204,255,0,0.15)] animate-pulse">
                  <span className="w-2.5 h-2.5 rounded-full bg-lime"></span>
                  MISSION IN PROGRESS
                </span>
                <p className="text-xs sm:text-sm font-mono font-semibold text-purple-light/80">
                  HACKATHON IS NOW LIVE
                </p>
              </div>
            ) : (
              <div className="flex gap-4 items-center">
                {/* Days */}
                <div className="flex flex-col items-center">
                  <span className="font-mono text-4xl md:text-5xl font-black text-white tracking-tighter">
                    {timeLeft.days}
                  </span>
                  <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-[#ccff00]/60 uppercase mt-1">
                    DAYS
                  </span>
                </div>
                
                <span className="text-purple-light/40 font-bold text-xl mb-4">:</span>

                {/* Hours */}
                <div className="flex flex-col items-center">
                  <span className="font-mono text-4xl md:text-5xl font-black text-white tracking-tighter">
                    {timeLeft.hours}
                  </span>
                  <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-[#ccff00]/60 uppercase mt-1">
                    HOURS
                  </span>
                </div>

                <span className="text-purple-light/40 font-bold text-xl mb-4">:</span>

                {/* Minutes */}
                <div className="flex flex-col items-center">
                  <span className="font-mono text-4xl md:text-5xl font-black text-white tracking-tighter">
                    {timeLeft.minutes}
                  </span>
                  <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-[#ccff00]/60 uppercase mt-1">
                    MINUTES
                  </span>
                </div>

                <span className="text-purple-light/40 font-bold text-xl mb-4">:</span>

                {/* Seconds */}
                <div className="flex flex-col items-center">
                  <span className="font-mono text-4xl md:text-5xl font-black text-lime tracking-tighter">
                    {timeLeft.seconds}
                  </span>
                  <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-lime uppercase mt-1">
                    SECONDS
                  </span>
                </div>
              </div>
            )}

          </div>

        </motion.div>

      </div>
    </section>
  );
}
