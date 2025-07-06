import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Meta: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (title) {
      document.title = title;
    }

    const metaDescription = document.querySelector('meta[name="description"]');
    if (description && metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Set the canonical URL
    const canonicalUrl = `https://zenrootfeet.life${pathname}`;
    let linkEl = document.querySelector('link[rel="canonical"]');

    if (!linkEl) {
      linkEl = document.createElement('link');
      linkEl.setAttribute('rel', 'canonical');
      document.head.appendChild(linkEl);
    }

    linkEl.setAttribute('href', canonicalUrl);

  }, [title, description, pathname]);

  return null;
};

export default Meta;