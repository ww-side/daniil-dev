'use client';

import { Headline } from '@/shared/ui/kit/headline';
import { Text } from '@/shared/ui/kit/text';

import type { Post } from '../lib/types';

export const PostHeader = ({
  title,
  description,
}: Pick<Post, 'title' | 'description'>) => (
  <section className="flex flex-col gap-2">
    <Headline level={1}>{title}</Headline>
    <Text color="secondary">{description}</Text>
  </section>
);
