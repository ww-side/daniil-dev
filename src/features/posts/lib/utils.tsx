import { type ReactNode } from 'react';
import Image from 'next/image';

import { SERVER_URL } from '@/shared/config/env';
import { cn } from '@/shared/lib/styles';
import { CodeWindow } from '@/shared/ui/components';
import { Headline } from '@/shared/ui/kit/headline';
import { Text } from '@/shared/ui/kit/text';

import type { ContentNode } from './types';

type ContentRenderer = (
  node: ContentNode,
  key: React.Key,
  parentType?: string,
) => ReactNode;

const contentRenderStrategies: Record<string, ContentRenderer> = {
  heading: (node, key) => {
    const level = Number(node.tag.slice(1)) as 1 | 2 | 3 | 4 | 5 | 6;
    return (
      <span key={key} className="mb-4">
        <Headline level={level}>
          {renderChildrenWithStrategies(node.children)}
        </Headline>
      </span>
    );
  },

  block: (node, key) => {
    if (!node.fields?.code) return null;
    return (
      <section key={key} className="mb-3">
        <CodeWindow value={node.fields.code} label={node.fields.blockName} />
      </section>
    );
  },

  paragraph: (node, key) => (
    <span key={key} className="mb-3">
      <Text weight={node.format === 1 ? 'bold' : 'normal'}>
        {renderChildrenWithStrategies(node.children, node.type)}
      </Text>
    </span>
  ),

  link: (node, key) => (
    <a
      key={key}
      href={node.fields?.url}
      target={node.fields?.newTab ? '_blank' : '_self'}
      rel="noopener noreferrer"
      className="font-bold underline"
    >
      {renderChildrenWithStrategies(node.children, node.type)}
    </a>
  ),

  list: (node, key) => (
    <ul
      key={key}
      className={cn(
        'mb-3 ml-3.5',
        node.listType === 'bullet' ? 'list-disc' : 'list-decimal',
      )}
    >
      {renderChildrenWithStrategies(node.children, node.type)}
    </ul>
  ),

  listitem: (node, key) => (
    <li key={key} style={{ marginLeft: 14 }}>
      {renderChildrenWithStrategies(node.children, node.type)}
    </li>
  ),

  upload: (node, key) => {
    if (!node.value?.mimeType?.startsWith('image/')) return null;
    return (
      <Image
        key={key}
        className="mb-3 object-cover"
        src={`${SERVER_URL}${node.value.url}`}
        alt={node.value.alt ?? 'img'}
        width={node.value.width}
        height={node.value.height}
        unoptimized
      />
    );
  },

  text: (node, key, parentType) => (
    <span
      key={key}
      className={cn(
        parentType === 'paragraph' && node.format === 1 && 'font-bold',
      )}
    >
      {node.text}
    </span>
  ),

  linebreak: (_, key) => <br key={key} />,
};

const fallbackRenderStrategy: ContentRenderer = (_, key) => <span key={key} />;

const dispatchRenderStrategy = (
  node: ContentNode,
  key: React.Key,
  parentType?: string,
): ReactNode => {
  const strategy = contentRenderStrategies[node.type] ?? fallbackRenderStrategy;
  return strategy(node, key, parentType);
};

const renderChildrenWithStrategies = (
  children?: ContentNode[],
  parentType?: string,
): ReactNode[] => {
  return !Array.isArray(children)
    ? []
    : children.map((child, index) =>
        dispatchRenderStrategy(child, `node-${index}`, parentType),
      );
};

export const renderPost = (json: ContentNode[]): ReactNode[] => {
  return !Array.isArray(json)
    ? []
    : json.map((node, index) => dispatchRenderStrategy(node, `node-${index}`));
};
