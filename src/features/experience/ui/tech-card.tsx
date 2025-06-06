import type { ReactNode } from 'react';

export const TechCard = ({ name, icon }: { name: string; icon: ReactNode }) => (
  <li key={name} className="flex items-center gap-1">
    {icon} {name}
  </li>
);
