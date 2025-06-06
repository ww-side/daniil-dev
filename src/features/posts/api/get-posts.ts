'use server';

import { SERVER_URL } from '@/shared/config/env';

export async function getPosts() {
  const response = await fetch(`${SERVER_URL}/api/posts`);
  const data = await response.json();

  return {
    total: data.totalDocs,
    page: data.page,
    totalPages: data.totalPages,
    limit: data.limit,
    posts: data.docs,
  };
}
