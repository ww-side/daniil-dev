import { getPosts } from '@/features/posts/api';
import type { Post } from '@/features/posts/lib';
import { PostPreview } from '@/features/posts/ui';

import { generateMetadata } from '@/shared/lib/metadata';

export const metadata = generateMetadata('Work | Daniil Dev');

export default async function Work() {
  const res = await getPosts();

  return (
    <main className="mt-14 flex flex-col gap-3">
      {res.posts.map((post: Post) => (
        <PostPreview key={post.id} {...post} />
      ))}
    </main>
  );
}
