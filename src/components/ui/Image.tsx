import React from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'eager' | 'lazy';
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  role?: string;
  ariaLabel?: string;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  width = 1920,
  height = 1080,
  className = '',
  loading = 'lazy',
  objectFit = 'cover',
  objectPosition = 'center',
  role = 'img',
  ariaLabel,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn(
        'rounded-lg shadow-sm transition-transform duration-200 hover:scale-[1.02]',
        'object-cover w-full h-auto',
        className
      )}
      loading={loading}
      style={{
        objectFit,
        objectPosition,
      }}
      role={role}
      aria-label={ariaLabel || alt}
    />
  );
};
