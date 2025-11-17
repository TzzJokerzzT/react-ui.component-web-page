import React, { useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAccordionContext } from "./Accordion";
import { getAccordionContentVariant, getAccordionSize } from "./variants";
import { mergeAnimationConfig } from "./animations";
import type { AccordionContentProps, AccordionMotionProps } from "./types";

/**
 * Unified Framer Motion wrapper for perfectly synchronized accordion animations
 * FIXED: Single container with combined height + content animations for uniform opening
 */
const AccordionMotion: React.FC<AccordionMotionProps> = ({
  isExpanded,
  disableAnimation = false,
  children,
  className = "",
  style,
  animationConfig,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  // Merge animation config with defaults
  const finalAnimationConfig = useMemo(() => {
    return mergeAnimationConfig(animationConfig, "spring");
  }, [animationConfig]);

  // If animations are disabled, use simple div
  if (disableAnimation) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  // SOLUTION: NO HEIGHT ANIMATION - Solo transformaciones suaves
  // height: "auto" no se puede animar uniformemente, causaba el problema de "dos fases"
  const unifiedVariants = useMemo(() => {
    const { spring } = finalAnimationConfig;

    // Single transition config for ALL properties - ensures perfect synchronization
    const transition = {
      type: "spring" as const,
      stiffness: spring?.stiffness || 280,
      damping: spring?.damping || 25,
    };

    return {
      closed: {
        opacity: 0,
        // scaleY: 0,
        transformOrigin: "top",
        transition,
      },
      open: {
        opacity: 1,
        // scaleY: 1,
        transformOrigin: "top",
        transition, // Animaciones perfectamente sincronizadas
      },
    };
  }, [finalAnimationConfig]);

  const motionStyle = {
    overflow: "hidden" as const,
    ...style,
  };

  // SINGLE motion.div with unified animation - no nested animations!
  return (
    <motion.div
      ref={contentRef}
      className={className}
      style={motionStyle}
      initial="closed"
      animate={isExpanded ? "open" : "closed"}
      variants={unifiedVariants}
    >
      {children}
    </motion.div>
  );
};

/**
 * Accordion content component with smooth animations
 */
export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  isExpanded,
  className = "",
  style,
  "data-testid": dataTestId,
}) => {
  const {
    color,
    variant,
    size,
    disableAnimation,
    keepContentMounted,
    animationConfig,
  } = useAccordionContext();

  const sizeClasses = getAccordionSize[size];
  const contentClasses = getAccordionContentVariant(color, variant);

  const finalClasses =
    `${contentClasses} ${sizeClasses.content} ${className}`.trim();

  // If animations are disabled, use simple show/hide
  if (disableAnimation) {
    return isExpanded ? (
      <div
        className={finalClasses}
        style={style}
        data-testid={dataTestId}
        role="tabpanel"
      >
        {children}
      </div>
    ) : null;
  }

  // Use AnimatePresence for mount/unmount animations when keepContentMounted is false
  if (!keepContentMounted) {
    return (
      <AnimatePresence initial={false}>
        {isExpanded && (
          <AccordionMotion
            key="accordion-content"
            isExpanded={isExpanded}
            disableAnimation={disableAnimation}
            className={finalClasses}
            style={style}
            animationConfig={animationConfig}
          >
            <div
              data-testid={dataTestId}
              role="tabpanel"
              aria-hidden={!isExpanded}
            >
              {children}
            </div>
          </AccordionMotion>
        )}
      </AnimatePresence>
    );
  }

  // Use framer-motion wrapper for smooth animations (content always mounted)
  return (
    <AccordionMotion
      isExpanded={isExpanded}
      disableAnimation={disableAnimation}
      className={finalClasses}
      style={style}
      animationConfig={animationConfig}
    >
      <div data-testid={dataTestId} role="tabpanel" aria-hidden={!isExpanded}>
        {children}
      </div>
    </AccordionMotion>
  );
};

AccordionContent.displayName = "AccordionContent";

