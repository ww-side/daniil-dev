'use client';

import type { ElementType, ReactNode } from 'react';
import { type JSX } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const headlineVariants = cva('text-', {
  variants: {
    level: {
      1: 'text-2xl font-bold',
      2: 'text-xl font-semibold',
      3: 'text-lg font-semibold',
      4: 'text-base font-medium',
      5: 'text-sm font-medium',
      6: 'text-xs font-normal',
    },
    color: {
      main: 'text-text-main',
      secondary: 'text-text-secondary',
    },
  },
  defaultVariants: {
    level: 1,
    color: 'main',
  },
});

type HeadlineVariants = VariantProps<typeof headlineVariants>;

export function Headline({
  level,
  color,
  children,
  as,
}: HeadlineVariants & { children: ReactNode; as?: ElementType }) {
  const Tag = as ?? (`h${level}` as keyof JSX.IntrinsicElements);

  return <Tag className={headlineVariants({ level, color })}>{children}</Tag>;
}
