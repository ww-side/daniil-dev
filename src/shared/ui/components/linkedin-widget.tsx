'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowUp } from '@/shared/ui/icons';
import { Headline } from '@/shared/ui/kit';
import { Text } from '@/shared/ui/kit/text';

export const LinkedinWidget = () => (
  <Link
    href="https://www.linkedin.com/in/daniil-metelia/"
    className="group bg-bg-secondary mt-7 flex cursor-pointer items-center justify-between rounded-2xl border border-neutral-600 p-4"
  >
    <div className="flex items-center gap-3">
      <section className="relative h-16 w-16">
        <Image className="rounded-full" src="/me-passport.webp" alt="me" fill />
      </section>
      <section>
        <Headline level={5} as="h2">
          &#64;daniil-metelia
        </Headline>
        <Text color="secondary" size="sm">
          Let&#39;s connect with LinkedIn
        </Text>
      </section>
    </div>
    <ArrowUp size={20} color="white" />
  </Link>
);
