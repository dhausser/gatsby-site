import * as React from 'react'
import { Helmet } from 'react-helmet'
import useSiteMetadata from 'hooks/use-site-metadata'
import { SEOProps } from 'types'

function SEO({
  description,
  title,
  lang = 'en',
  meta = [],
}: SEOProps) {
  const siteMetadata = useSiteMetadata()

  const metaDescription = description || siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
