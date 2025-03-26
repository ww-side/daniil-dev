'use client';

import type { IconDef } from '../types';

export function NextJS({ height = 16, width = 16 }: IconDef) {
  return (
    <svg
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
    >
      <mask
        id="ng-icon-10-0"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="180"
        height="180"
      >
        <circle cx="90" cy="90" r="90" fill="black"></circle>
      </mask>
      <g mask="url(#ng-icon-10-0)">
        <circle
          cx="90"
          cy="90"
          r="87"
          fill="black"
          stroke="white"
          style={{ strokeWidth: '6px' }}
        ></circle>
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="url(#ng-icon-10-1)"
        ></path>
        <rect
          x="115"
          y="54"
          width="12"
          height="72"
          fill="url(#ng-icon-10-2)"
        ></rect>
      </g>
      <defs>
        <linearGradient
          id="ng-icon-10-1"
          x1="109"
          y1="116.5"
          x2="144.5"
          y2="160.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="ng-icon-10-2"
          x1="121"
          y1="54"
          x2="120.799"
          y2="106.875"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
