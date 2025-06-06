import type { ElementType } from 'react';

import { React } from '@/shared/ui/icons';
import { Headline } from '@/shared/ui/kit';

import { TechCard } from './tech-card';

export const TechCategory = ({
  title,
  stack,
}: {
  title: string;
  stack: { icon: ElementType; name: string }[];
}) => (
  <article>
    <Headline level={3}>{title}</Headline>
    <ul className="mb-4 flex flex-wrap gap-x-4 gap-y-1">
      {stack.map(({ icon: Icon, name }) => (
        <TechCard key={name} name={name} icon={<Icon />} />
      ))}
    </ul>
  </article>
);
