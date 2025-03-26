'use client';

import { Mailbox } from '@/shared/ui/icons';
import { Headline } from '@/shared/ui/kit';
import { Text } from '@/shared/ui/kit/text';

export function Footer() {
  return (
    <footer className="mt-10 flex justify-between max-md:flex-col max-md:gap-5 max-md:pb-8">
      <a href="mailto:daniil.metelia@gmail.com">
        <div className="flex items-center gap-2">
          <Headline level={5}>email me!</Headline>
          <Mailbox color="white" width={18} height={18} />
        </div>
        <Text color="secondary">daniil.metelia&#64;gmail.com</Text>
      </a>
      <a href="https://www.instagram.com/ww_side/">
        <div className="flex items-center gap-2">
          <Headline level={5}>follow me on</Headline>
        </div>
        <Text color="secondary">instagram</Text>
      </a>
      <a href="https://github.com/ww-side">
        <div className="flex items-center gap-2">
          <Headline level={5}>explore my code on</Headline>
        </div>
        <Text color="secondary">github</Text>
      </a>
    </footer>
  );
}
