'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Text } from '@/shared/ui/kit/text';

export const CodeWindow = ({
  value,
  label,
}: {
  value: string;
  label?: string;
}) => (
  <div className="flex flex-col gap-1">
    {label && (
      <Text color="secondary" size="sm">
        {label}
      </Text>
    )}
    <SyntaxHighlighter
      language="tsx"
      className="m-0 rounded-lg p-4 !text-sm"
      style={oneDark}
      wrapLines
      wrapLongLines
      showLineNumbers
    >
      {value}
    </SyntaxHighlighter>
  </div>
);
