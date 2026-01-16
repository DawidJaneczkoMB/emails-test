/**
 * Utility functions for generating text font style properties.
 *
 * This module provides helpers to convert font names into React style props,
 * distinguishing between "internal" fonts (used throughout the app and in the default styles, handled via CSS classes)
 * and "external" fonts (from users customizations, handled via inline styles).
 */

/**
 * Registry of internal fonts that are pre-configured in the application.
 *
 * @property value - The font identifier/name
 * @property fontWeight - The font weight value (as string for CSS)
 * @property className - The CSS class(es) to apply for this font
 */
const internalFonts = [
  { value: "Ubuntu", fontWeight: "400", className: "font-heading" },
  { value: "Source Sans Pro", fontWeight: "400", className: "font-body" },
  {
    value: "Ubuntu-Bold",
    fontWeight: "500",
    className: "font-heading font-medium",
  },
  {
    value: "Source Sans Pro-Bold",
    fontWeight: "600",
    className: "font-body font-semibold",
  },
] as const;

/**
 * Converts a font name into React style props.
 *
 * For internal fonts (defined in internalFonts), returns only className (no inline styles).
 * For external fonts, returns only inline style props with fontFamily and fontWeight.
 *
 * @param font - The font name to convert (e.g., "Ubuntu", "Source Sans Pro", or a custom font)
 * @returns An object containing:
 *   - For internal fonts: { className: string, style: undefined }
 *   - For external fonts: { className: undefined, style: { fontFamily: string, fontWeight: string } }
 */
const getTextFontStyleProps = (font: string) => {
  // Check if the font is an internal font that should use CSS classes
  const internalFont = internalFonts.find((option) => option.value === font);

  if (internalFont) {
    // Internal fonts: only return className, no inline styles
    // This prevents undefined fontWeight from resetting the font weight
    return {
      className: internalFont.className,
      style: undefined,
    };
  }

  // External fonts: use inline styles with fallback to sans-serif
  return {
    className: undefined,
    style: {
      fontFamily: `${font}, sans-serif`,
      fontWeight: "unset",
    },
  };
};

/**
 * Gets font style props for paragraph/body text.
 *
 * @param font - Optional font name. Defaults to "Source Sans Pro" if not provided.
 * @returns Object with className (for internal fonts) or style (for external fonts)
 */
export const getParagraphTextFontStyleProps = (font?: string) =>
  getTextFontStyleProps(font || "Source Sans Pro");

/**
 * Gets font style props for heading text.
 *
 * @param font - Optional font name. Defaults to "Ubuntu" if not provided.
 * @returns Object with className (for internal fonts) or style (for external fonts)
 */
export const getHeadingTextFontStyleProps = (font?: string) =>
  getTextFontStyleProps(font || "Ubuntu");
