import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { StructuredData } from './StructuredData';

type PageType = 'website' | 'article';

interface Organization {
  name: string;
  url: string;
  logo: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
    email: string;
    availableLanguage?: string[];
  };
  sameAs?: string[];
}

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  pageType?: PageType;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  keywords?: string[];
  organization?: Organization;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Platchem Ltd - Mining Support, Drilling & Shotcrete in Copperbelt, Zambia',
  description = 'Platchem Ltd provides expert mining support, surface and underground drilling, shotcrete, and industrial solutions across the Copperbelt region in Zambia.',
  image = '/lovable-uploads/f8693ab6-eddf-42aa-835c-1192015823ef.png',
  article = false,
  pageType = 'website',
  datePublished,
  dateModified,
  author = 'Platchem Ltd',
  canonicalUrl,
  noIndex = false,
  keywords = [
    'Copperbelt mining',
    'mining support',
    'shotcrete',
    'drilling',
    'underground drilling',
    'surface drilling',
    'industrial solutions Zambia',
    'mining equipment Zambia',
    'mining automation',
    'process control systems',
    'mechanical engineering',
    'electrical engineering'
  ]
}) => {
  const { pathname } = useLocation();
  const siteUrl = 'https://platchemzambia.com';
  const fullUrl = `${siteUrl}${pathname}`;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  // Default dates
  const publishedDate = datePublished || new Date().toISOString().split('T')[0];
  const modifiedDate = dateModified || publishedDate;

  // Remove duplicate keywords
  const allKeywords = Array.from(new Set(keywords));

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={allKeywords.join(', ')} />
        <meta name="author" content={author} />
        <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
        <meta name="theme-color" content="#1a365d" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="geo.region" content="ZM-08" />
        <meta name="geo.placename" content="Lusaka" />
        <meta name="geo.position" content="-15.3875259,28.3228165" />
        <meta name="ICBM" content="-15.3875259, 28.3228165" />

        {/* Canonical */}
        <link rel="canonical" href={canonicalUrl || fullUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={pageType} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={fullImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={title} />
        <meta property="og:site_name" content="Platchem Ltd" />
        <meta property="og:locale" content="en_ZM" />
        <meta property="og:country-name" content="Zambia" />
        <meta property="og:region" content="Copperbelt" />
        <meta property="og:locality" content="Lusaka" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={fullUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={fullImageUrl} />
        <meta name="twitter:image:alt" content={title} />
        <meta name="twitter:site" content="@PlatchemZambia" />
        <meta name="twitter:creator" content="@PlatchemZambia" />
        <meta name="twitter:label1" content="Established" />
        <meta name="twitter:data1" content="2008" />
        <meta name="twitter:label2" content="Location" />
        <meta name="twitter:data2" content="Lusaka, Zambia" />

        {/* Article specific tags */}
        {article && (
          <>
            <meta property="article:published_time" content={publishedDate} />
            <meta property="article:modified_time" content={modifiedDate} />
            {author && <meta property="article:author" content={author} />}
            <meta property="article:section" content="Mining & Industrial Solutions" />
            <meta property="article:tag" content={allKeywords[0]} />
            <meta property="article:tag" content={allKeywords[1]} />
            <meta property="article:tag" content={allKeywords[2]} />
          </>
        )}

        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1a365d" />
        <meta name="msapplication-TileColor" content="#1a365d" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#1a365d" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Platchem Ltd" />
        <meta name="application-name" content="Platchem Ltd" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Helmet>

      {/* Structured Data */}
      <StructuredData
        pageType={article ? 'Article' : 'WebPage'}
        title={title}
        description={description}
        image={fullImageUrl}
        datePublished={publishedDate}
        dateModified={modifiedDate}
        organization={{
          name: 'Platchem Ltd',
          url: siteUrl,
          logo: `${siteUrl}/lovable-uploads/f8693ab6-eddf-42aa-835c-1192015823ef.png`,
          address: {
            streetAddress: 'Plot 12536 Mulungushi Rd',
            addressLocality: 'Lusaka',
            addressRegion: 'Copperbelt',
            postalCode: '10101',
            addressCountry: 'ZM'
          },
          contactPoint: {
            telephone: '+260 967453361',
            contactType: 'customer service',
            email: 'info@platchemgroup.com',
            availableLanguage: ['en']
          },
          sameAs: [
            'https://www.facebook.com/PlatchemZambia',
            'https://www.linkedin.com/company/platchem-zambia',
            'https://twitter.com/PlatchemZambia'
          ]
        }}
        services={[
          {
            serviceType: 'Mining Support',
            areaServed: 'Copperbelt, Zambia',
            description: 'Expert mining support services across the Copperbelt region'
          },
          {
            serviceType: 'Shotcrete',
            areaServed: 'Copperbelt, Zambia',
            description: 'Shotcrete application services for mining and industrial projects'
          },
          {
            serviceType: 'Drilling',
            areaServed: 'Copperbelt, Zambia',
            description: 'Surface and underground drilling services'
          },
          {
            serviceType: 'Underground Drilling',
            areaServed: 'Copperbelt, Zambia',
            description: 'Specialized underground drilling for mining operations'
          },
          {
            serviceType: 'Surface Drilling',
            areaServed: 'Copperbelt, Zambia',
            description: 'Efficient surface drilling services for mining and construction'
          }
        ]}
      />
    </>
  );
};

export default SEO;
