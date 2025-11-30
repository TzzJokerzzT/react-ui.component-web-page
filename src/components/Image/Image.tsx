import React, { useState, useRef, useEffect } from "react";
import type {
  ImageProps,
  ImageWrapperProps,
  BlurredImageProps,
} from "./types";
import {
  getImageClasses,
  getImageWrapperClasses,
  getImageZoomedWrapperClasses,
  getBlurredImageClasses,
  getSkeletonClasses,
} from "./helper";

/**
 * Enhanced Image component with comprehensive features
 * Supports lazy loading, fallback images, zoom effects, and blur effects
 * @param props - Image component properties
 * @returns JSX element representing a styled image
 */
export const Image = ({
  src,
  srcSet,
  sizes,
  alt,
  width,
  height,
  radius = "lg",
  shadow = "none",
  loading = "lazy",
  fallbackSrc,
  isBlurred = false,
  isZoomed = false,
  removeWrapper = false,
  disableSkeleton = false,
  className = "",
  classNames,
  onLoad,
  onError,
  "data-testid": dataTestId,
}: ImageProps) => {
  const [isLoading, setIsLoading] = useState(!disableSkeleton);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const imgRef = useRef<HTMLImageElement>(null);

  // Handle image load
  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false);
    setHasError(false);
    onLoad?.(event);
  };

  // Handle image error
  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    
    // Try fallback image if available and not already tried
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setIsLoading(!disableSkeleton);
    }
    
    onError?.();
  };

  // Update current src when src prop changes
  useEffect(() => {
    if (src !== currentSrc && !hasError) {
      setCurrentSrc(src);
      setIsLoading(!disableSkeleton);
      setHasError(false);
    }
  }, [src, currentSrc, hasError, disableSkeleton]);

  // Update isLoading when disableSkeleton changes
  useEffect(() => {
    if (disableSkeleton) {
      setIsLoading(false);
    }
  }, [disableSkeleton]);

  // Get combined classes for the main image
  const imageClasses = getImageClasses(radius, shadow, isLoading);
  const combinedImageClasses = [
    imageClasses,
    classNames?.img,
    className,
  ].filter(Boolean).join(" ");

  // Skeleton loading component
  const skeletonElement = isLoading && !disableSkeleton && (
    <div
      className={`${getSkeletonClasses(radius)} ${classNames?.wrapper || ""}`}
      style={{ width, height }}
      data-testid={`${dataTestId}-skeleton`}
    />
  );

  // Main image element
  const imageElement = (
    <img
      ref={imgRef}
      src={currentSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      className={combinedImageClasses}
      onLoad={handleLoad}
      onError={handleError}
      data-testid={dataTestId}
    />
  );

  // Blurred background image
  const blurredImageElement = isBlurred && !isLoading && !hasError && (
    <BlurredImage
      src={currentSrc}
      alt={`${alt} (blurred background)`}
      className={`${getBlurredImageClasses(radius)} ${classNames?.blurredImg || ""}`}
      data-testid={`${dataTestId}-blurred`}
    />
  );

  // If removeWrapper is true, return just the image
  if (removeWrapper) {
    return (
      <>
        {skeletonElement}
        {!isLoading && imageElement}
      </>
    );
  }

  // Determine wrapper component and classes
  const WrapperComponent = isZoomed ? ImageZoomedWrapper : ImageWrapper;
  const wrapperClasses = [
    getImageWrapperClasses(isZoomed),
    classNames?.wrapper,
  ].filter(Boolean).join(" ");

  const zoomedWrapperClasses = isZoomed ? [
    getImageZoomedWrapperClasses(),
    classNames?.zoomedWrapper,
  ].filter(Boolean).join(" ") : "";

  return (
    <WrapperComponent
      className={isZoomed ? zoomedWrapperClasses : wrapperClasses}
      isZoomed={isZoomed}
      data-testid={`${dataTestId}-wrapper`}
    >
      {skeletonElement}
      {!isLoading && (
        <>
          {blurredImageElement}
          {imageElement}
        </>
      )}
    </WrapperComponent>
  );
};

/**
 * ImageWrapper component for containing image content
 * @param props - ImageWrapper component properties
 * @returns JSX element representing an image wrapper
 */
export const ImageWrapper = ({
  children,
  className = "",
  "data-testid": dataTestId,
}: ImageWrapperProps) => {
  return (
    <div className={className} data-testid={dataTestId}>
      {children}
    </div>
  );
};

/**
 * ImageZoomedWrapper component for zoom effect container
 * @param props - ImageWrapper component properties
 * @returns JSX element representing a zoomed image wrapper
 */
export const ImageZoomedWrapper = ({
  children,
  className = "",
  "data-testid": dataTestId,
}: ImageWrapperProps) => {
  return (
    <div className={className} data-testid={dataTestId}>
      {children}
    </div>
  );
};

/**
 * BlurredImage component for creating blurred background effect
 * @param props - BlurredImage component properties
 * @returns JSX element representing a blurred image
 */
export const BlurredImage = ({
  src,
  alt,
  className = "",
  "data-testid": dataTestId,
}: BlurredImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      aria-hidden="true"
      data-testid={dataTestId}
    />
  );
};