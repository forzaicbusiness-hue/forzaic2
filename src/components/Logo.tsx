import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => {
  return (
    <svg 
      viewBox="0 0 500 200" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF1E39" />
          <stop offset="100%" stopColor="#D6162F" />
        </linearGradient>
        <linearGradient id="blackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#333333" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
        <filter id="foldShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="1" dy="1" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.4" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* F */}
      <g transform="translate(20, 20) skewX(-12)">
        {/* Main F Shape */}
        <path 
          d="M40 0 H180 C195 0 200 5 200 15 V35 C200 45 195 50 180 50 H85 V75 H140 C155 75 160 80 160 90 V110 C160 120 155 125 140 125 H85 V145 C85 155 80 160 70 160 H30 C15 160 10 155 10 145 V15 C10 5 15 0 40 0 Z" 
          fill="url(#redGrad)" 
        />
        {/* Fold shadow for F */}
        <path 
          d="M85 75 L110 75 L85 100 Z" 
          fill="black" 
          fillOpacity="0.2" 
        />
      </g>

      {/* Z */}
      <g transform="translate(210, 20) skewX(-12)">
        {/* Main Z Shape */}
        <path 
          d="M40 0 H180 C195 0 200 5 200 15 V35 C200 45 195 50 180 50 L80 110 H180 C195 110 200 115 200 125 V145 C200 155 195 160 180 160 H40 C25 160 20 155 20 145 V125 C20 115 25 110 40 110 L140 50 H40 C25 50 20 45 20 35 V15 C20 5 25 0 40 0 Z" 
          fill="url(#blackGrad)" 
        />
        {/* Fold shadows for Z */}
        <path 
          d="M140 50 L115 50 L140 75 Z" 
          fill="black" 
          fillOpacity="0.3" 
        />
        <path 
          d="M80 110 L105 110 L80 85 Z" 
          fill="black" 
          fillOpacity="0.3" 
        />
      </g>

      {/* Red Dot */}
      <circle cx="440" cy="150" r="25" fill="url(#redGrad)" />
    </svg>
  );
};
