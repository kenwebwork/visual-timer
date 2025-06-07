const serviceDomain = import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.VITE_MICROCMS_API_KEY;

export const fetchArticleById = async (id: string) => {
  const res = await fetch(`https://${serviceDomain}.microcms.io/api/v1/pages/${id}`, {
    headers: {
      'X-MICROCMS-API-KEY': apiKey,
    },
  });
  const data = await res.json();
  return data;
};