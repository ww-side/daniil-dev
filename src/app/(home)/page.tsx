import { Intro } from '@/widgets/home';

import { generateMetadata } from '@/shared/lib/metadata';
import { Footer, LinkedinWidget } from '@/shared/ui/components';

export const metadata = generateMetadata('Daniil Dev');

export default function Home() {
  return (
    <main className="pt-12">
      <Intro />
      <LinkedinWidget />
      <Footer />
    </main>
  );
}
