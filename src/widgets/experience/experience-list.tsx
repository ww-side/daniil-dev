'use client';

import { ExperienceCard } from '@/features/experience/components';
import { experience } from '@/features/experience/lib';

export function ExperienceList() {
  return (
    <section className="flex flex-col gap-8 pb-5">
      {experience.map(item => (
        <ExperienceCard key={item.companyName} value={item} />
      ))}
    </section>
  );
}
