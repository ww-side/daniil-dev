'use client';

import type { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const headlineVariants = cva('', {
  variants: {
    size: {
      lg: 'text-lg',
      md: 'text-base',
      sm: 'text-sm',
      xs: 'text-xs',
    },
    color: {
      main: 'text-text-main',
      secondary: 'text-text-secondary',
    },
    weight: {
      bold: 'font-bold',
      semibold: 'font-semibold',
      medium: 'font-medium',
      normal: 'font-normal',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'main',
    weight: 'normal',
  },
});

type HeadlineVariants = VariantProps<typeof headlineVariants>;

export const Text = ({
  size,
  color,
  weight,
  children,
}: HeadlineVariants & { children: ReactNode }) => (
  <p className={headlineVariants({ size, color, weight })}>{children}</p>
);
