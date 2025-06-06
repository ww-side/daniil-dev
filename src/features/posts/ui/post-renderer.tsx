import type { ContentNode } from '../lib/types';
import { renderPost } from '../lib/utils';

export function PostRenderer({ content }: { content: ContentNode[] }) {
  return (
    <article className="flex flex-col pt-6">
      {!Array.isArray(content) ? null : <>{renderPost(content)}</>}
    </article>
  );
}
