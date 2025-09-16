import React from 'react';
import { getImageUrl } from '../../utils/simpleImageUrls';

interface SimpleImageProps {
  imageName: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number | string;
  height?: number | string;
}

/**
 * Simple image component that uses centralized URLs from Supabase
 * 
 * Usage:
 * <SimpleImage imageName="profile.jpg" alt="Profile Picture" className="w-32 h-32 rounded-full" />
 * 
 * This will automatically get the correct Supabase URL for the image
 */
export function SimpleImage({
  imageName,
  alt,
  className = '',
  loading = 'lazy',
  width,
  height
}: SimpleImageProps) {
  const imageUrl = getImageUrl(imageName);

  return (
    <img
      src={imageUrl}
      alt={alt}
      className={className}
      loading={loading}
      width={width}
      height={height}
    />
  );
}
