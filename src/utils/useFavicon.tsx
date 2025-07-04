import { useEffect } from "react";

export const useFavicon = (url: string) => {
  useEffect(() => {
    const changeFavicon = (url: string) => {
      const link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
      if (link) {
        link.href = url;
      } else {
        const newLink = document.createElement("link");
        newLink.rel = "icon";
        newLink.href = url;
        document.head.appendChild(newLink);
      }
    };
      changeFavicon(url);
  }, [url]);
}