import React, { useEffect } from 'react';

export default function SEO({ title, description }) {
  // Static SEO - No database connection
  const siteTitle = "Saran Developers";
  const finalTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  
  useEffect(() => {
    document.title = finalTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) {
      metaDesc.setAttribute('content', description);
    }
  }, [finalTitle, description]);

  return null;
}
