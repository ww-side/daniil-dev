'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/shared/lib/styles';

import { SplitText } from './split-text';

export const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hasShown = sessionStorage.getItem('preloaderShown');
    if (hasShown) {
      setIsVisible(false);
      return;
    }

    const hidePreloader = () => {
      setIsAnimating(false);
      setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem('preloaderShown', 'true');
      }, 500);
    };

    const timeoutId = setTimeout(hidePreloader, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        'bg-bg-main fixed inset-0 z-50 flex h-full w-full items-center justify-center transition-opacity duration-500',
        isAnimating ? 'opacity-100' : 'opacity-0',
      )}
    >
      <SplitText text="Hello!" />
    </div>
  );
};
