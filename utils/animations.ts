import { Variants } from "framer-motion";

/**
 * Standard fade-in animation with upward motion
 * Framer Motion v10+ automatically respects prefers-reduced-motion
 */
export const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

/**
 * Page header animation configuration
 */
export const pageHeaderAnimation = fadeInUp(0);

/**
 * Section animation with standard delay
 */
export const sectionAnimation = (index: number) => fadeInUp(0.2 + index * 0.1);

/**
 * Footer/back link animation (typically last element)
 */
export const footerAnimation = fadeInUp(0.5);

/**
 * Tab content transition variants for AI Journey tabs
 * Used with AnimatePresence for smooth content swapping
 */
export const tabContentVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};
