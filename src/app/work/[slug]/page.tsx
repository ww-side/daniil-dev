import { getPost } from '@/features/posts/api';
import { PostHeader, PostRenderer } from '@/features/posts/ui';

export default async function WorkPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await getPost((await params).slug);

  return (
    <main className="py-6">
      <PostHeader title={post.title} description={post.description} />
      <PostRenderer content={post.content.root.children} />
    </main>
  );
}
