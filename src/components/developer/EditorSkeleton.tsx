'use client';

export function EditorSkeleton() {
  return (
    <div className="h-full w-full rounded-2xl bg-white border-2 border-neutral-900 shadow-[4px_4px_0px_#18181b] flex flex-col overflow-hidden font-mono text-xs select-none">
      {/* Editor Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-50 border-b-2 border-neutral-900">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400 border border-neutral-900" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffe600] border border-neutral-900" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-neutral-900" />
          <div className="ml-2 flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white border border-neutral-900 shadow-2xs text-[11px] font-bold text-neutral-950">
            <span className="text-amber-500 font-bold">&#123; &#125;</span>
            <span>config.json</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" />
          </div>
        </div>
        <span className="text-[10px] text-neutral-500 font-black tracking-wider uppercase">
          MONACO JSON VIRTUAL DOM
        </span>
      </div>

      {/* Editor Body with Line Numbers & Shimmer Tokens */}
      <div className="flex-1 p-4 bg-white flex overflow-hidden">
        {/* Line Numbers Gutter */}
        <div className="flex flex-col space-y-2 pr-4 text-neutral-400 border-r border-neutral-200 select-none text-[11px] font-mono shrink-0">
          {[...Array(14)].map((_, i) => (
            <span key={i} className="text-right w-5">
              {i + 1}
            </span>
          ))}
        </div>

        {/* Shimmer Code Lines */}
        <div className="flex-1 pl-4 space-y-2.5 animate-pulse">
          <div className="flex items-center gap-2">
            <span className="text-neutral-950 font-black">&#123;</span>
          </div>

          <div className="flex items-center gap-2 pl-4">
            <div className="h-3.5 w-20 rounded bg-cyan-200 border border-cyan-400" />
            <span className="text-neutral-400">:</span>
            <div className="h-3.5 w-32 rounded bg-amber-100 border border-amber-300" />
          </div>

          <div className="flex items-center gap-2 pl-4">
            <div className="h-3.5 w-16 rounded bg-cyan-200 border border-cyan-400" />
            <span className="text-neutral-400">:</span>
            <span className="text-neutral-950 font-black">&#123;</span>
          </div>

          <div className="flex items-center gap-2 pl-8">
            <div className="h-3.5 w-14 rounded bg-cyan-200 border border-cyan-400" />
            <span className="text-neutral-400">:</span>
            <div className="h-3.5 w-48 rounded bg-emerald-100 border border-emerald-300" />
          </div>

          <div className="flex items-center gap-2 pl-8">
            <div className="h-3.5 w-24 rounded bg-cyan-200 border border-cyan-400" />
            <span className="text-neutral-400">:</span>
            <div className="h-3.5 w-36 rounded bg-purple-100 border border-purple-300" />
          </div>

          <div className="flex items-center gap-2 pl-8">
            <div className="h-3.5 w-16 rounded bg-cyan-200 border border-cyan-400" />
            <span className="text-neutral-400">:</span>
            <div className="h-3.5 w-28 rounded bg-[#fff7a0] border border-[#ffe600]" />
          </div>

          <div className="flex items-center gap-2 pl-4">
            <span className="text-neutral-950 font-black">&#125;,</span>
          </div>

          <div className="flex items-center gap-2 pl-4">
            <div className="h-3.5 w-20 rounded bg-cyan-200 border border-cyan-400" />
            <span className="text-neutral-400">:</span>
            <span className="text-neutral-950 font-black">[</span>
            <span className="inline-block w-2 h-4 bg-[#ffe600] animate-ping" />
          </div>

          <div className="flex items-center gap-2 pl-8">
            <div className="h-3.5 w-56 rounded bg-neutral-100 border border-neutral-300" />
          </div>

          <div className="flex items-center gap-2 pl-4">
            <span className="text-neutral-950 font-black">]</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-neutral-950 font-black">&#125;</span>
          </div>
        </div>
      </div>

      {/* Editor Status Bar */}
      <div className="flex items-center justify-between px-4 py-1.5 bg-neutral-950 text-neutral-400 text-[10px] font-mono border-t-2 border-neutral-900">
        <span className="flex items-center gap-2 text-white font-bold">
          <span className="w-2 h-2 rounded-full bg-[#ffe600] animate-pulse" />
          <span>LOADING RUNTIME WORKERS</span>
        </span>
        <span>UTF-8 &bull; JSON SCHEMA V1.0</span>
      </div>
    </div>
  );
}
