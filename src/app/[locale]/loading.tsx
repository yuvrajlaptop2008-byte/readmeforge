'use client';

import { useEffect, useState } from 'react';
import { MonoForgeMonkeyIcon } from '#/components/common/MonoForgeLogo';
import { Sparkles, Terminal, Cpu } from 'lucide-react';

const LOADING_MILESTONES = [
  'Booting MonoForge Precision Engine...',
  'Compiling 85+ Archetypes & Telemetry Arsenal...',
  'Initializing 60fps Camo SVG Graphics Pipeline...',
  'Pre-rendering Design Tokens & Badge Shaders...',
  'Unlocking Studio Workspace...',
];

export default function Loading() {
  const [stepIdx, setStepIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIdx(prev => (prev + 1) % LOADING_MILESTONES.length);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-md p-4 font-sans text-neutral-950">
      {/* Background Cyber Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b0a_1px,transparent_1px),linear-gradient(to_bottom,#18181b0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Main Loading Card */}
      <div className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-white border-2 border-neutral-900 shadow-[8px_8px_0px_#18181b] space-y-6 text-center animate-in fade-in zoom-in-95 duration-200">
        {/* Header Badge */}
        <div className="flex items-center justify-between border-b-2 border-neutral-900 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400 border border-neutral-900" />
            <span className="w-3 h-3 rounded-full bg-[#ffe600] border border-neutral-900" />
            <span className="w-3 h-3 rounded-full bg-emerald-400 border border-neutral-900" />
            <span className="ml-1 text-[10px] font-mono font-black text-neutral-950 px-2 py-0.5 rounded bg-[#ffe600] border border-neutral-900 shadow-2xs">
              INITIALIZING
            </span>
          </div>
          <span className="text-[10px] font-mono font-black text-neutral-600 uppercase flex items-center gap-1">
            <Cpu className="w-3 h-3 text-cyan-600 animate-spin" />
            <span>60FPS CAMO</span>
          </span>
        </div>

        {/* Mascot Radar Icon */}
        <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
          {/* Outer radar pulse rings */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#ffe600] animate-[spin_8s_linear_infinite]" />
          <div className="absolute inset-2 rounded-full border-2 border-neutral-900 animate-pulse bg-neutral-50" />

          {/* Central Logo */}
          <div className="relative p-3 rounded-2xl bg-white border-2 border-neutral-900 shadow-[3px_3px_0px_#18181b]">
            <MonoForgeMonkeyIcon className="w-10 h-10" />
          </div>

          <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-neutral-900 animate-ping" />
          <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-neutral-900" />
        </div>

        {/* Title & Brand */}
        <div className="space-y-1.5">
          <h3 className="text-xl sm:text-2xl font-black text-neutral-950 uppercase tracking-tight font-sans">
            MONO<span className="text-[#ffe600] bg-neutral-950 px-1 rounded ml-0.5 border border-neutral-900">FORGE</span> STUDIO
          </h3>
          <p className="text-xs font-mono text-neutral-600 font-bold">
            Zero Monkey Business. Pure Precision Engineering.
          </p>
        </div>

        {/* Tactile Striped Neo-Brutalist Loading Bar */}
        <div className="space-y-2">
          <div className="h-4 w-full rounded-xl bg-neutral-100 border-2 border-neutral-900 p-0.5 overflow-hidden shadow-inner">
            <div
              className="h-full rounded-lg bg-[#ffe600] border border-neutral-900 animate-[pulse_1.2s_ease-in-out_infinite] transition-all"
              style={{
                width: `${((stepIdx + 1) / LOADING_MILESTONES.length) * 100}%`,
                backgroundImage: 'repeating-linear-gradient(45deg, #18181b 0, #18181b 10px, #ffe600 10px, #ffe600 20px)',
                backgroundSize: '28px 28px',
              }}
            />
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500 font-bold">
            <span>STAGE 0{stepIdx + 1} / 0{LOADING_MILESTONES.length}</span>
            <span>{Math.round(((stepIdx + 1) / LOADING_MILESTONES.length) * 100)}% COMPLETE</span>
          </div>
        </div>

        {/* Live Terminal Log Line */}
        <div className="p-3 rounded-xl bg-neutral-950 border-2 border-neutral-900 text-left font-mono text-xs shadow-inner flex items-center gap-2 overflow-hidden">
          <Terminal className="w-3.5 h-3.5 text-[#ffe600] shrink-0 animate-pulse" />
          <span className="text-emerald-400 font-bold truncate">
            &gt; {LOADING_MILESTONES[stepIdx]}
          </span>
          <span className="w-1.5 h-3.5 bg-[#ffe600] animate-pulse shrink-0 ml-auto" />
        </div>

        {/* Footer Security / Open Source Pill */}
        <div className="pt-2 flex items-center justify-center gap-2 text-[10px] font-mono text-neutral-600 font-bold">
          <Sparkles className="w-3 h-3 text-amber-500" />
          <span>100% OPEN SOURCE &bull; MIT LICENSE</span>
        </div>
      </div>
    </div>
  );
}

