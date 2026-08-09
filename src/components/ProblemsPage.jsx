import React, { useEffect } from 'react';
import { ArrowLeft, Brain, Volume2, Activity, LayoutGrid, Sliders, ShieldAlert, CheckSquare, FileText, Cpu, Laptop, Database, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProblemsPage({ onBack }) {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subjects = [
    { title: 'Asthma', desc: 'Respiratory tracking & airflow anomalies.', icon: WindIcon },
    { title: 'Cardiovascular', desc: 'Heart rate variation & speech stress markers.', icon: Activity },
    { title: 'Neurological', desc: 'Cognitive load & neuromotor speech patterns.', icon: Brain },
    { title: 'Post-Stroke', desc: 'Aphasia, slurring & articulation tracking.', icon: Laptop },
    { title: 'Parkinson\'s', desc: 'Vocal tremor & phonation stability metrics.', icon: Sliders },
    { title: 'Depression', desc: 'Acoustic flatness, tone & sentiment shifts.', icon: Volume2 }
  ];

  const biomarkers = [
    { title: 'Voice Tremors', desc: 'Detection of micro-oscillations in frequency and amplitude.' },
    { title: 'Breathlessness', desc: 'Analysis of involuntary intake gasps and spoken phrase length.' },
    { title: 'Pitch Variation', desc: 'Monitoring monotonic speech or erratic, unpredictable fluctuations.' },
    { title: 'Speech Rate', desc: 'Tracking cognitive load, pauses, and neurological response timing.' },
    { title: 'Pause Patterns', desc: 'Identifying abnormal silence gaps in verbal articulation.' }
  ];

  const features = [
    { title: 'Voice Recording Module', desc: '10–20 second audio input interface with clarity indicators.' },
    { title: 'Audio Preprocessing', desc: 'Sub-millisecond noise reduction, silence removal, and signal normalization.' },
    { title: 'Feature Extraction', desc: 'Extracting MFCCs (Mel-frequency cepstral coefficients), pitch dynamics, and frequency spectral data.' },
    { title: 'AI/ML Pipeline', desc: 'Integration of predictive models to analyze progression data and classify biomarkers.' },
    { title: 'Progress Dashboard', desc: 'Visual representation of patient health trends, vocal scores, and historical logs over time.' },
    { title: 'Alert System', desc: 'Real-time notifications for anomalous biomarker patterns indicating clinical deterioration.' }
  ];

  const techStack = [
    { category: 'Frontend', items: ['React.js / Next.js', 'Flutter / React Native', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js / Python', 'FastAPI / Flask', 'REST APIs'] },
    { category: 'AI / ML', items: ['TensorFlow / PyTorch', 'Librosa (Audio)', 'Scikit-learn'] },
    { category: 'Cloud / DB', items: ['Firebase / AWS', 'MongoDB / Postgres', 'Supabase'] }
  ];

  return (
    <div className="w-full min-h-screen bg-[#140e28] p-2 sm:p-4 md:p-6 overflow-hidden flex flex-col justify-center items-center">
      
      {/* Outer Dark Purple Frame */}
      <div className="w-full min-h-[calc(100vh-48px)] flex-1 relative rounded-[28px] bg-[#140e28] p-2 sm:p-3 border-4 border-[#2d1b54] shadow-2xl flex flex-col justify-between overflow-hidden">
        
        {/* Inner Clean Light Canvas */}
        <div className="relative flex-1 rounded-[20px] bg-[#f8f8fc] flex flex-col p-6 sm:p-10 lg:p-14 overflow-y-auto">
          
          {/* Iridescent Holographic Banner Overlay */}
          <div className="absolute top-0 left-0 right-0 h-[280px] holo-top-banner pointer-events-none z-0"></div>

          {/* Perspective Grid Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20 z-0"
            style={{
              backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.25) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          ></div>

          {/* Header Controls */}
          <div className="relative z-10 flex justify-between items-center mb-12">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white border-2 border-purple-light/50 hover:border-purple text-graphite hover:shadow-[4px_4px_0px_#ccff00] transition-all font-mono text-xs font-bold uppercase active:scale-95 group"
            >
              <ArrowLeft className="w-4 h-4 text-purple group-hover:-translate-x-0.5 transition-transform" />
              Back to Home
            </button>
            <div className="font-mono text-xs font-bold text-purple bg-purple-light/20 px-3.5 py-1.5 rounded-full border border-purple/20">
              MISSION STATUS: LIVE
            </div>
          </div>

          {/* Title Area */}
          <div className="relative z-10 max-w-4xl mb-12">
            <span className="font-mono text-xs font-bold tracking-[0.25em] text-purple uppercase mb-3 block">
              MISSION INTEL // PROBLEM STATEMENT
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black font-extrabold tracking-tight text-graphite uppercase leading-none mb-6">
              Voice Biomarker <br />
              <span className="purple-highlight">Disease Tracking</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-medium text-graphite/70 max-w-2xl leading-relaxed border-l-4 border-purple pl-6">
              Pharmaceutical companies lack continuous, real-world data on patient health between clinical visits. 
              We need a scalable, non-invasive, AI-driven daily voice monitoring system to bridge this critical diagnostic gap.
            </p>
          </div>

          {/* Bento Grid Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
            
            {/* Challenge Brief & Objective */}
            <div className="lg:col-span-8 codefusion-card p-8 bg-white/90 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-2xl font-sans font-black font-bold text-graphite flex items-center gap-3 pb-4 border-b border-[#e2e2f0] mb-6">
                  <FileText className="w-6 h-6 text-purple" />
                  THE CHALLENGE BRIEF
                </h3>
                <div className="space-y-4 font-sans text-sm sm:text-base text-graphite/80 leading-relaxed font-semibold">
                  <p>
                    Patients diagnosed with chronic respiratory, cardiovascular, or neurological conditions typically only consult doctors every three months. 
                    Consequently, medical professionals and research teams lack continuous data on patient symptoms and disease progression between visits.
                  </p>
                  <p>
                    This blank space in monitoring makes it exceptionally difficult to detect sudden health declines, measure medication efficacy, or step in before conditions become critical.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-lime/10 border-l-4 border-lime rounded-r-2xl font-mono text-xs sm:text-sm text-graphite font-bold leading-relaxed">
                <span className="text-purple-dark uppercase tracking-widest block mb-1">MISSION OBJECTIVE:</span>
                "Develop a daily 'Voice Diary' application that captures short (10–20s) voice samples to analyze vocal biomarkers such as tremors, breathlessness, and pitch variation."
              </div>
            </div>

            {/* Tracking Subjects */}
            <div className="lg:col-span-4 codefusion-card p-8 bg-white/90 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-sans font-black font-bold text-graphite flex items-center gap-3 pb-4 border-b border-[#e2e2f0] mb-6">
                  <Activity className="w-6 h-6 text-purple" />
                  TRACKING SUBJECTS
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {subjects.map((sub, idx) => {
                    const IconComp = sub.icon;
                    return (
                      <div key={idx} className="flex items-center gap-4 p-3 bg-[#f8f8fc] rounded-2xl border border-gray-100 hover:border-purple/30 transition-all">
                        <div className="p-2.5 rounded-xl bg-purple-light/20 text-purple">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-mono font-bold text-graphite uppercase">{sub.title}</h4>
                          <p className="text-[10px] text-graphite/60 font-semibold">{sub.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
            
            {/* Features to Implement */}
            <div className="lg:col-span-6 codefusion-card p-8 bg-white/90">
              <h3 className="text-2xl font-sans font-black font-bold text-graphite flex items-center gap-3 pb-4 border-b border-[#e2e2f0] mb-6">
                <LayoutGrid className="w-6 h-6 text-purple" />
                FEATURES TO IMPLEMENT
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-[#f8f8fc] rounded-2xl hover:bg-white hover:border-purple-light transition-all border border-transparent">
                    <span className="w-6 h-6 shrink-0 rounded-full bg-purple text-white font-mono font-bold text-[10px] flex items-center justify-center mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="text-xs font-mono font-black text-graphite uppercase tracking-wider mb-1">{feat.title}</h4>
                      <p className="text-[11px] text-graphite/70 font-semibold leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Biomarkers to Extract */}
            <div className="lg:col-span-6 codefusion-card p-8 bg-white/90 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-sans font-black font-bold text-graphite flex items-center gap-3 pb-4 border-b border-[#e2e2f0] mb-6">
                  <Brain className="w-6 h-6 text-purple" />
                  BIOMARKERS TO EXTRACT
                </h3>
                <div className="space-y-4">
                  {biomarkers.map((bio, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#f8f8fc] border-l-4 border-purple relative overflow-hidden group hover:bg-white transition-all">
                      <span className="absolute top-2 right-4 text-3xl font-mono font-black text-gray-200/50 group-hover:text-purple-light/20 transition-colors pointer-events-none select-none">
                        0{idx + 1}
                      </span>
                      <h4 className="text-xs font-mono font-black text-purple uppercase tracking-wider mb-1 relative z-10">{bio.title}</h4>
                      <p className="text-[11px] text-graphite/70 font-semibold relative z-10 leading-relaxed">{bio.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Suggested Tech Stack */}
            <div className="lg:col-span-8 codefusion-card p-8 bg-white/90">
              <h3 className="text-2xl font-sans font-black font-bold text-graphite flex items-center gap-3 pb-4 border-b border-[#e2e2f0] mb-6">
                <Cpu className="w-6 h-6 text-purple" />
                SUGGESTED TECH STACK
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono">
                {techStack.map((stack, idx) => (
                  <div key={idx} className="space-y-3 p-3.5 bg-[#f8f8fc] rounded-2xl border border-gray-100">
                    <h4 className="text-xs font-mono font-black text-purple uppercase tracking-wider border-b border-purple/10 pb-2">
                      {stack.category}
                    </h4>
                    <ul className="text-[11px] font-bold text-graphite/80 space-y-2">
                      {stack.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-lime shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Constraints */}
            <div className="lg:col-span-4 codefusion-card p-8 bg-graphite text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-lime/5 rounded-full blur-2xl pointer-events-none" />
              <div>
                <h3 className="text-2xl font-sans font-black font-bold text-[#ccff00] flex items-center gap-3 pb-4 border-b border-white/10 mb-6">
                  <ShieldAlert className="w-6 h-6 text-lime" />
                  CONSTRAINTS
                </h3>
                <ul className="space-y-4 font-mono text-xs font-bold text-purple-light/95">
                  <li className="flex items-start gap-2.5">
                    <span className="text-lime">»</span>
                    <span>Recording length MUST be strictly between 10–20 seconds.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-lime">»</span>
                    <span>Use non-invasive protocols only (standard mobile/web microphones).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-lime">»</span>
                    <span>Custom model feature extraction & training is highly encouraged.</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-white/15 pt-5 mt-6 text-[10px] font-mono text-lime/80 uppercase tracking-widest leading-relaxed">
                NOTICE: No pre-built complete voice solutions allowed. Plagiarism results in immediate disqualification.
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

// Custom wind icon for Asthma
function WindIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12.8 19.6A2 2 0 1 0 14 16H2" />
      <path d="M17.5 12.3A3.5 3.5 0 1 1 20 18H2" />
      <path d="M10.8 4.4A2.5 2.5 0 1 0 9.5 8H22" />
    </svg>
  );
}
