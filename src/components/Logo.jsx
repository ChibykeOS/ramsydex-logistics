import React from 'react';

export default function Logo({ className = "h-11", variant = "auto", showText = true }) {
  // variant can be 'auto' (respects dark/light mode), 'light' (always white text), or 'dark' (always dark text)
  const isLightOnly = variant === 'light';
  const isDarkOnly = variant === 'dark';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* High-fidelity Vector & Brand Mark */}
      <div className="relative flex items-center">
        <svg
          viewBox="0 0 280 150"
          className="h-10 sm:h-12 w-auto drop-shadow-sm transition-transform hover:scale-105 duration-300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Red Speed Gradient */}
            <linearGradient id="rglRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DE141C" />
              <stop offset="60%" stopColor="#C4121A" />
              <stop offset="100%" stopColor="#8A080E" />
            </linearGradient>

            {/* Gold Velocity Gradient */}
            <linearGradient id="rglGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDCA13" />
              <stop offset="45%" stopColor="#EAB114" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>

            {/* Speed streak gradient */}
            <linearGradient id="speedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DE141C" stopOpacity="0" />
              <stop offset="70%" stopColor="#DE141C" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#C4121A" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Speed Streaks behind R */}
          <g>
            <rect x="5" y="42" width="65" height="4" rx="2" fill="url(#speedGrad)" />
            <rect x="18" y="52" width="55" height="4.5" rx="2" fill="url(#speedGrad)" />
            <rect x="2" y="62" width="75" height="5" rx="2" fill="url(#speedGrad)" />
            <rect x="12" y="73" width="68" height="5.5" rx="2.5" fill="url(#speedGrad)" />
            <rect x="25" y="84" width="58" height="5" rx="2" fill="url(#speedGrad)" />
            <rect x="40" y="94" width="46" height="4" rx="2" fill="url(#speedGrad)" />
          </g>

          {/* Slanted RGL Letters */}
          <g transform="skewX(-14)">
            {/* Letter 'R' */}
            <path
              d="M 92 36 L 118 36 C 132 36 142 44 142 56 C 142 66 135 73 125 76 L 143 102 L 126 102 L 110 78 L 107 78 L 107 102 L 92 102 Z M 107 48 L 107 66 L 117 66 C 124 66 128 62 128 57 C 128 51 123 48 117 48 Z"
              fill="url(#rglRedGrad)"
            />

            {/* Letter 'G' */}
            <path
              d="M 178 48 C 172 40 162 36 150 36 C 134 36 122 49 122 69 C 122 89 135 102 153 102 C 167 102 176 95 181 85 L 181 72 L 158 72 L 158 61 L 194 61 L 194 92 C 187 99 173 103 154 103 C 128 103 109 88 109 69 C 109 48 128 35 152 35 C 167 35 178 40 185 49 Z"
              fill="url(#rglGoldGrad)"
            />

            {/* Letter 'L' with forward Arrow */}
            <path
              d="M 188 36 L 202 36 L 202 90 L 235 90 L 235 80 L 255 96 L 235 112 L 235 102 L 188 102 Z"
              fill="url(#rglGoldGrad)"
            />
          </g>

          {/* "LOGISTICS" Subtext */}
          <text
            x="64"
            y="136"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontWeight="900"
            fontStyle="italic"
            fontSize="26"
            letterSpacing="6"
            className={
              isLightOnly 
                ? 'fill-white' 
                : isDarkOnly 
                ? 'fill-slate-900' 
                : 'fill-slate-900 dark:fill-white transition-colors duration-200'
            }
          >
            LOGISTICS
          </text>
        </svg>
      </div>

      {showText && (
        <div className={`flex flex-col border-l pl-3 leading-tight hidden sm:flex ${
          isLightOnly ? 'border-slate-700/60' : 'border-slate-300 dark:border-slate-700/60'
        }`}>
          <span className={`text-sm font-extrabold tracking-wider uppercase ${
            isLightOnly ? 'text-white' : 'text-slate-900 dark:text-slate-100'
          }`}>
            RAMSYDEX
          </span>
          <span className="text-[10px] font-semibold tracking-widest text-amber-500 uppercase">
            GLOBAL LOGISTICS
          </span>
        </div>
      )}
    </div>
  );
}
