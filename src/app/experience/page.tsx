import { ExperienceList, TechStackList } from '@/widgets/experience';

import { generateMetadata } from '@/shared/lib/metadata';

export const metadata = generateMetadata('Experience | Daniil Dev');

export default function Experience() {
  return (
    <main className="mt-14 flex flex-col gap-14">
      <TechStackList />
      <ExperienceList />
    </main>
  );
}
