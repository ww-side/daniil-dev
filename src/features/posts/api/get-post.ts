'use server';

import { SERVER_URL } from '@/shared/config/env';

export async function getPost(slug: string) {
  const response = await fetch(
    `${SERVER_URL}/api/posts?where[slug][in]=${slug}`,
  );
  const data = await response.json();

  return data.docs[0];
}
