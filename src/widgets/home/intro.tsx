'use client';

import Image from 'next/image';

import { Headline } from '@/shared/ui/kit';
import { Text } from '@/shared/ui/kit/text';

export const Intro = () => (
  <section className="flex flex-col gap-7">
    <Headline level={1}>Hi, it&#39;s Daniil! 👨🏻‍💻</Headline>
    <Text color="secondary">
      I&#39;m a dedicated Software Developer with a focus on building
      maintainable web applications. I enjoy working as part of a team and
      I&#39;m always eager to learn and contribute to the success of the
      project.
    </Text>
    <section className="relative h-[320px] max-md:h-[230px]">
      <Image
        src="/me.webp"
        alt="me"
        className="h-full w-full object-cover"
        unoptimized
        priority
        fill
      />
    </section>
  </section>
);
