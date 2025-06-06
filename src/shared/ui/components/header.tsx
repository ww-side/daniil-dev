'use client';

import Link from 'next/link';

import { GitHub, Linkedin } from '@/shared/ui/icons';
import { Text } from '@/shared/ui/kit/text';

const navLinks = [
  { label: 'home', path: '/' },
  { label: 'experience', path: '/experience' },
  { label: 'work', path: '/work' },
];

const socialNetworks = [
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/daniil-metelia/',
    label: 'LinkedIn profile',
  },
  { icon: GitHub, url: 'https://github.com/ww-side', label: 'GitHub profile' },
];

export const Header = () => (
  <header className="flex items-center justify-between pt-14">
    <ul className="flex items-center gap-6">
      {navLinks.map(({ label, path }) => (
        <li key={label}>
          <Link
            href={path}
            className="transition duration-300 ease-in-out hover:opacity-80"
            aria-label={`Go to ${label} page`}
          >
            <Text>{label}</Text>
          </Link>
        </li>
      ))}
    </ul>
    <ul className="flex items-center gap-4">
      {socialNetworks.map(({ icon: Icon, url, label }) => (
        <li key={url}>
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-max transition duration-300 ease-in-out hover:opacity-80"
            aria-label={label}
          >
            <Icon />
          </Link>
        </li>
      ))}
    </ul>
  </header>
);
