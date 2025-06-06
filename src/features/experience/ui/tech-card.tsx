import type { ReactNode } from 'react';

export function TechCard({ name, icon }: { name: string; icon: ReactNode }) {
  return (
    <li key={name} className="flex items-center gap-1">
      {icon} {name}
    </li>
  );
}
