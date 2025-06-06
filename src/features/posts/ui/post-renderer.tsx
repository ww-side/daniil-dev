import { type ContentNode, renderPost } from '../lib';

export const PostRenderer = ({ content }: { content: ContentNode[] }) => (
  <article className="flex flex-col pt-6">
    {!Array.isArray(content) ? null : <>{renderPost(content)}</>}
  </article>
);
