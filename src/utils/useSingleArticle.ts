import { useEffect, useState } from "react";
import { fetchArticleById } from "./clients";

interface Article {
  id: string;
  title: string;
  body: string;
}

export const useSingleArticle = (id: string) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await fetchArticleById(id);
      setArticle(data);
      setLoading(false);
    };
    load();
  }, [id]);

  return { article, loading };
};


