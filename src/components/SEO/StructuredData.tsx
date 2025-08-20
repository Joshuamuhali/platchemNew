import { useLocation } from 'react-router-dom';

type PageType = 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'Article' | 'Organization';

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

interface Service {
  serviceType: string;
  areaServed: string;
  description: string;
}

interface StructuredDataProps {
  pageType?: PageType;
  title: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  organization?: Organization;
  services?: Service[];
}

export const StructuredData: React.FC<StructuredDataProps> = ({
  pageType = 'WebPage',
  title,
  description,
  image = '/lovable-uploads/f8693ab6-eddf-42aa-835c-1192015823ef.png',
  datePublished = '2008-01-01',
  dateModified = new Date().toISOString().split('T')[0],
  organization = {
    name: 'Platchem Ltd',
    url: 'https://platchemzambia.com',
    logo: 'https://platchemzambia.com/lovable-uploads/f8693ab6-eddf-42aa-835c-1192015823ef.png'
  }
}) => {
  const { pathname } = useLocation();
  const baseUrl = 'https://platchemzambia.com';
  const currentUrl = `${baseUrl}${pathname}`;

  // Base schema that applies to all page types
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': pageType,
    name: title,
    description: description,
    url: currentUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl
    },
    image: image.startsWith('http') ? image : `${baseUrl}${image}`,
    datePublished: datePublished,
    dateModified: dateModified,
    publisher: {
      '@type': 'Organization',
      name: organization.name,
      logo: {
        '@type': 'ImageObject',
        url: organization.logo
      }
    }
  };

  // Organization specific schema
  const organizationSchema = pageType === 'Organization' ? {
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plot 1200, Mwambeshi Road',
      addressLocality: 'Kitwe',
      addressRegion: 'Copperbelt',
      postalCode: '10101',
      addressCountry: 'ZM'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+260 977 123456',
      contactType: 'customer service',
      email: 'info@platchemzambia.com',
      availableLanguage: ['en']
    },
    sameAs: [
      'https://www.facebook.com/PlatchemZambia',
      'https://www.linkedin.com/company/platchem-zambia',
      'https://twitter.com/PlatchemZambia'
    ]
  } : {};

  // Combine base schema with type-specific schema
  const schema = {
    ...baseSchema,
    ...(pageType === 'Organization' && organizationSchema)
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
