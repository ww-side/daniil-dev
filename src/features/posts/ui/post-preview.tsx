'use client';

import Link from 'next/link';

import { SquareArrowRight } from '@/shared/ui/icons';
import { Headline } from '@/shared/ui/kit';
import { Text } from '@/shared/ui/kit/text';

import type { Post } from '../lib';

export const PostPreview = ({ title, description, slug }: Post) => (
  <Link
    href={`/work/${slug}`}
    className="hover:bg-bg-secondary flex w-full justify-between rounded-2xl border border-neutral-600 p-4 transition duration-300 ease-in-out"
  >
    <section className="flex flex-col gap-2">
      <Headline level={3} as="h2">
        {title}
      </Headline>
      <Text>{description}</Text>
    </section>
    <SquareArrowRight className="shrink-0" size={20} />
  </Link>
);
