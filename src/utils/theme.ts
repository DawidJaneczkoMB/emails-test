import { importedTheme } from "@/importedTheme";
import * as R from "remeda";

// react-email tailwind theme requires all keys to be kebab-case and not use rems
// this file transforms the global repo theme to the required format

export const Theme = {
  color: withTransformedKeys(importedTheme.color),
  font: withTransformedKeys(importedTheme.font),
  fontWeight: withTransformedKeys(importedTheme.fontWeight),
  text: {
    ...withTransformedKeys(importedTheme.text, remToPx),
    ...Object.fromEntries(
      Array.from({ length: 100 }, (_, i) => [i + 1, `${i + 1}px`])
    ),
  },
  leading: {
    ...withTransformedKeys(importedTheme.leading, remToPx),
    ...Object.fromEntries(
      Array.from({ length: 100 }, (_, i) => [i + 1, `${i + 1}px`])
    ),
  },
  spacing: {
    ...withTransformedKeys(importedTheme.spacing, remToPx),
    ...Object.fromEntries(
      Array.from({ length: 600 }, (_, i) => [i + 1, `${i + 1}px`])
    ),
  },
  radius: withTransformedKeys(importedTheme.radius, remToPx),
  zIndex: withTransformedKeys(importedTheme.zIndex),
  breakpoint: withTransformedKeys(importedTheme.breakpoint),
  shadow: withTransformedKeys(importedTheme.shadow),
  animate: withTransformedKeys(importedTheme.animate),
} as const;

function withTransformedKeys<T extends Record<string, any>>(
  obj: T,
  valueFormatter?: (value: T[keyof T]) => any
): Record<string, any> {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      // We want to keep numbers after letters in kebab-case, e.g. h3, not h-3
      R.toKebabCase(key).replace(/([a-zA-Z])-(\d)/g, "$1$2"),
      valueFormatter ? valueFormatter(value) : value,
    ])
  );
}

function remToPx(value: string, base: number = 10): string {
  if (!value.includes("rem")) return value;
  return Number(value.replace("rem", "")) * base + "px";
}
