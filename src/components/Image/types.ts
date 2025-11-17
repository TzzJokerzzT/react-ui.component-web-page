import type { ReactEventHandler, ReactNode } from "react";

/**
 * Radius variants for Image component
 */
export type ImageRadius = "none" | "sm" | "md" | "lg" | "full";

/**
 * Shadow variants for Image component
 */
export type ImageShadow = "none" | "sm" | "md" | "lg";

/**
 * Loading behavior for Image component
 */
export type ImageLoading = "eager" | "lazy";

/**
 * Props interface for the main Image component
 */
export interface ImageProps {
  /** Image source URL */
  src: string;
  /** Image source set for responsive images */
  srcSet?: string;
  /** Image sizes attribute for responsive images */
  sizes?: string;
  /** Alternative text for the image */
  alt: string;
  /** Image width */
  width?: number;
  /** Image height */
  height?: number;
  /** Border radius variant */
  radius?: ImageRadius;
  /** Shadow variant */
  shadow?: ImageShadow;
  /** Loading behavior */
  loading?: ImageLoading;
  /** Fallback image source URL when main image fails to load */
  fallbackSrc?: string;
  /** Whether to apply blur effect */
  isBlurred?: boolean;
  /** Whether to enable zoom on hover */
  isZoomed?: boolean;
  /** Whether to remove the wrapper div */
  removeWrapper?: boolean;
  /** Whether to disable skeleton loading animation */
  disableSkeleton?: boolean;
  /** Additional CSS classes to apply */
  className?: string;
  /** Custom class names for different slots */
  classNames?: Partial<Record<"img" | "wrapper" | "zoomedWrapper" | "blurredImg", string>>;
  /** Image load event handler */
  onLoad?: ReactEventHandler<HTMLImageElement>;
  /** Image error event handler */
  onError?: () => void;
  /** Test ID for testing frameworks */
  "data-testid"?: string;
}

/**
 * Props interface for ImageWrapper component
 */
export interface ImageWrapperProps {
  /** Content to wrap */
  children: ReactNode;
  /** Additional CSS classes to apply */
  className?: string;
  /** Whether to enable zoom */
  isZoomed?: boolean;
  /** Test ID for testing frameworks */
  "data-testid"?: string;
}

/**
 * Props interface for BlurredImage component
 */
export interface BlurredImageProps {
  /** Image source URL */
  src: string;
  /** Alternative text for the image */
  alt: string;
  /** Additional CSS classes to apply */
  className?: string;
  /** Test ID for testing frameworks */
  "data-testid"?: string;
}