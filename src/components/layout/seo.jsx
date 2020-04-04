import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import favicon from "images/icons/favicon.png";

const Seo = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query Seo {
      site {
        siteMetadata {
          lang
          title
          meta
        }
      }
    }
  `);

  return (
    <Helmet>
      <html lang={siteMetadata.lang} />
      <title>{siteMetadata.title}</title>
      <link rel="icon" href={favicon} />
      {siteMetadata.meta.map((values, i) => (
        <meta key={i} {...Object.fromEntries(values)} />
      ))}
    </Helmet>
  );
};

export default Seo;
