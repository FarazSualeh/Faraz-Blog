import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown>;
}

const SITE_URL = "https://farazlabs.lovable.app";
const SITE_NAME = "FarazLabs";
const DEFAULT_OG_IMAGE = "/faraz-profile.jpg";

const SEOHead = ({ title, description, canonicalPath, ogType = "website", ogImage, jsonLd }: SEOHeadProps) => {
  const fullTitle = canonicalPath === "/" ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const ogImageUrl = ogImage || `${SITE_URL}${DEFAULT_OG_IMAGE}`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("name", "author", SITE_NAME);

    // Open Graph
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", ogImageUrl);
    setMeta("property", "og:site_name", SITE_NAME);

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImageUrl);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalUrl);

    // JSON-LD
    const existingScript = document.querySelector("script[data-seo-jsonld]");
    if (existingScript) existingScript.remove();

    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-jsonld", "true");
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      const script = document.querySelector("script[data-seo-jsonld]");
      if (script) script.remove();
    };
  }, [fullTitle, description, canonicalUrl, ogType, ogImageUrl, jsonLd]);

  return null;
};

export default SEOHead;
