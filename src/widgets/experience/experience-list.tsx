'use client';

import { experience } from '@/features/experience/lib';
import { ExperienceCard } from '@/features/experience/ui';

export const ExperienceList = () => {
  return (
    <section className="flex flex-col gap-8 pb-5">
      {experience.map(item => (
        <ExperienceCard key={item.companyName} value={item} />
      ))}
    </section>
  );
};
