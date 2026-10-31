'use client';

export function WizardSkeleton() {
  return (
    <div className="min-h-screen bg-white text-neutral-950 flex flex-col font-sans select-none animate-pulse">
      {/* TopNav Mock Header */}
      <div className="h-14 border-b-2 border-neutral-900 bg-white flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-neutral-200 border-2 border-neutral-900 shadow-2xs" />
          <div className="h-4 w-28 rounded bg-neutral-200 border border-neutral-900" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-8 w-24 rounded-lg bg-neutral-100 border border-neutral-900" />
          <div className="h-8 w-28 rounded-lg bg-[#ffe600] border border-neutral-900" />
        </div>
      </div>

      {/* Subheader Switcher Bar */}
      <div className="bg-white border-b-2 border-neutral-900 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-44 rounded-xl bg-neutral-200 border-2 border-neutral-900" />
          <div className="h-8 w-44 rounded-xl bg-neutral-100 border-2 border-neutral-900" />
        </div>
        <div className="h-4 w-64 rounded bg-neutral-100 hidden sm:block" />
      </div>

      {/* Canvas Studio Grid Skeleton */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Toolbox */}
        <div className="w-60 border-r-2 border-neutral-900 bg-neutral-50 p-4 space-y-3 hidden md:block">
          <div className="h-4 w-28 rounded bg-neutral-200 mb-4" />
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-10 w-full rounded-xl bg-white border-2 border-neutral-900 shadow-2xs" />
          ))}
        </div>

        {/* Center Canvas */}
        <div className="flex-1 p-6 md:p-10 flex flex-col items-center justify-center space-y-6 bg-white">
          <div className="w-full max-w-lg p-8 rounded-3xl border-2 border-neutral-900 bg-neutral-50 shadow-[6px_6px_0px_#18181b] space-y-4 text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#ffe600] border-2 border-neutral-900 mx-auto" />
            <div className="h-6 w-48 rounded bg-neutral-300 mx-auto" />
            <div className="h-4 w-72 rounded bg-neutral-200 mx-auto" />
            <div className="grid grid-cols-4 gap-3 pt-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-14 rounded-xl bg-white border-2 border-neutral-900 shadow-2xs" />
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-72 border-l-2 border-neutral-900 bg-neutral-50 p-4 space-y-4 hidden lg:block">
          <div className="h-4 w-32 rounded bg-neutral-200" />
          <div className="h-28 rounded-2xl bg-white border-2 border-neutral-900 shadow-2xs" />
          <div className="h-36 rounded-2xl bg-white border-2 border-neutral-900 shadow-2xs" />
        </div>
      </div>
    </div>
  );
}
