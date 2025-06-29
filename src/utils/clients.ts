import { createClient } from 'microcms-js-sdk';

const serviceDomain = import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.VITE_MICROCMS_API_KEY;

export const client = createClient({
  serviceDomain: serviceDomain!,
  apiKey: apiKey!,
});

export const getArticleList = async () => {
  const data = await client.get({
    endpoint: 'articles',
    queries: { limit: 10, offset: 0, orders: '-publishedAt' },
  });
  return data.contents;
};

export const fetchArticleById = async (id: string) => {
  const res = await fetch(`https://${serviceDomain}.microcms.io/api/v1/articles/${id}`, {
    headers: {
      'X-MICROCMS-API-KEY': apiKey,
    },
  });
  const data = await res.json();
  return data;
};