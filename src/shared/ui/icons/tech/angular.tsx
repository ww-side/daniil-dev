'use client';

import type { IconDef } from '../types';

export function Angular({ height = 16, width = 16 }: IconDef) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 242 256"
      width={width}
      height={height}
    >
      <g clipPath="url(#ng-icon-11-0)">
        <mask
          id="ng-icon-11-1"
          width="242"
          height="256"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          style={{ maskType: 'luminance' }}
        >
          <path fill="#fff" d="M0 0h242v256H0V0Z"></path>
        </mask>
        <g mask="url(#ng-icon-11-1)">
          <path
            fill="url(#ng-icon-11-2)"
            d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"
          ></path>
          <path
            fill="url(#ng-icon-11-3)"
            d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"
          ></path>
        </g>
      </g>
      <defs>
        <linearGradient
          id="ng-icon-11-2"
          x1="53.2"
          x2="245"
          y1="231.9"
          y2="140.7"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E40035"></stop>
          <stop offset=".2" stopColor="#F60A48"></stop>
          <stop offset=".4" stopColor="#F20755"></stop>
          <stop offset=".5" stopColor="#DC087D"></stop>
          <stop offset=".7" stopColor="#9717E7"></stop>
          <stop offset="1" stopColor="#6C00F5"></stop>
        </linearGradient>
        <linearGradient
          id="ng-icon-11-3"
          x1="44.5"
          x2="170"
          y1="30.7"
          y2="174"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF31D9"></stop>
          <stop offset="1" stopColor="#FF5BE1" stopOpacity="0"></stop>
        </linearGradient>
        <clipPath id="ng-icon-11-0">
          <path fill="#fff" d="M0 0h242v256H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}
