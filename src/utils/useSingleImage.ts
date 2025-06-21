import { useEffect, useState } from "react";
import { fetchImage } from "./clients";

interface Image {
  id: string;
}

export const useSingleImage = (id: string) => {
  const [image, setImage] = useState<Image | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await fetchImage(id);
      setImage(data);
      setLoading(false);
    };
    load();
  }, [id]);

  return { image, loading };
};


