'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function RouteLoadingIndicator() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Trigger loading animation on pathname change
  useEffect(() => {
    setLoading(true);
    setProgress(20);

    const timer1 = setTimeout(() => setProgress(65), 100);
    const timer2 = setTimeout(() => setProgress(90), 250);
    const timer3 = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 200);
    }, 400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [pathname]);

  if (!loading && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none h-1 bg-transparent">
      {/* Laser line with glowing edge */}
      <div
        className="h-full bg-[#ffe600] border-b border-neutral-900 shadow-[0_0_12px_#ffe600,0_0_4px_#18181b] transition-all duration-200 ease-out relative"
        style={{ width: `${progress}%` }}
      >
        {/* Pulsing leading spark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white border border-neutral-900 shadow-[0_0_8px_#ffe600] animate-ping" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-neutral-950" />
      </div>
    </div>
  );
}
