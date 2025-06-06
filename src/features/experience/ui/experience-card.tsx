'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Headline } from '@/shared/ui/kit';
import { Text } from '@/shared/ui/kit/text';

import type { Experience } from '../lib';

export const ExperienceCard = ({ value }: { value: Experience }) => (
  <article>
    <section className="flex gap-3">
      <Link href={value.url} target="_blank" rel="noopener noreferrer">
        <Image
          src={value.iconUrl}
          alt="item.companyName"
          width="54"
          height="54"
        />
      </Link>
      <div className="flex flex-col justify-between">
        <Headline level={4}>{value.position}</Headline>
        <Text color="secondary">{value.companyName}</Text>
        <Text color="secondary" size="xs">
          {value.period}
        </Text>
      </div>
    </section>
    <section className="mt-4">
      <Text>{value.summary}</Text>
    </section>
    <ul className="mt-5">
      {value.experience.map(exp => (
        <li
          key={exp}
          className="text-text-secondary relative pl-4 before:absolute before:left-0 before:content-['-']"
        >
          {exp}
        </li>
      ))}
    </ul>
    <div className="mt-3 text-sm">
      <strong className="mr-1">Skills:</strong>
      <span>{value.skills.join(', ')}</span>
    </div>
  </article>
);
