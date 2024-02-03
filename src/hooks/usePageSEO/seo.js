import { useEffect } from "react";

const usePageSEO = ({
  title,
  description,
  keywords = [],
  ogTitle,
  ogDescription,
  ogImage,
  ogImageType,
  ogUrl,
}) => {
  useEffect(() => {
    document.title = title;

    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywords);
    setMetaTag("property", "og:title", ogTitle || title);
    setMetaTag("property", "og:description", ogDescription || description);
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:image:type", ogImageType);
    setMetaTag("property", "og:url", ogUrl || window.location.href);

    return () => {
      // cleanup if neede
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl]);

  const setMetaTag = (attr, value, content) => {
    if (content) {
      let element = document.querySelector(`meta[${attr}="${value}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, value);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    }
  };
};

export default usePageSEO;
