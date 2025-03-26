import type { Metadata } from 'next';

const baseDescription =
  "Hi, I'm Daniil 👨🏻‍💻. Explore my website to learn more about my skills, experience, and the projects I've worked on.";
const ogImage = 'https://i.ibb.co/B2B35W6Q/meta.webp';

export function generateMetadata(title: string): Metadata {
  return {
    title,
    description: baseDescription,
    keywords: [
      'Daniil Metelia',
      'Daniil Dev',
      'Frontend Developer',
      'React Developer',
      'Next.js Developer',
      'Web Development',
      'JavaScript',
      'TypeScript',
      'Software Engineer',
      'Full Stack Developer',
    ],
    openGraph: {
      title,
      description: baseDescription,
      images: ogImage,
    },
  };
}
