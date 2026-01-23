import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import type {
  ConfigExtension,
  DefaultClassGroupIds,
  DefaultThemeGroupIds,
} from "tailwind-merge";
import { type EmailsTheme, Theme } from "./theme";



const toKebabCase = (str: string): string => {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
};

const TailwindConfigToEmailsTwMergeThemeGroupIdMap: Partial<
  Record<keyof EmailsTheme, DefaultThemeGroupIds>
> = {
  animate: "animate",
  breakpoint: "breakpoint",
  color: "color",
  font: "font",
  fontWeight: "font-weight",
  leading: "leading",
  radius: "radius",
  spacing: "spacing",
  text: "text",
};

const TailwindConfigToEmailsTwMergeClassGroupMap: Partial<
  Record<keyof EmailsTheme, DefaultClassGroupIds>
> = {
  zIndex: "z",
};

function createEmailsTwMergeExtension(
  emailsTheme: EmailsTheme
): ConfigExtension<DefaultClassGroupIds, DefaultThemeGroupIds>["extend"] {
  const theme = Object.entries(
    TailwindConfigToEmailsTwMergeThemeGroupIdMap
  ).reduce((acc, [themeKey, twMergeGroupId]) => {
    if (twMergeGroupId && Object.hasOwn(emailsTheme, themeKey)) {
      const value = emailsTheme[themeKey as keyof EmailsTheme];
      if (value && typeof value === "object" && !Array.isArray(value)) {
        acc[twMergeGroupId] = Object.keys(value).map(toKebabCase);
      }
    }
    return acc;
  }, {} as Record<DefaultThemeGroupIds, string[]>);

  const classGroups = Object.entries(
    TailwindConfigToEmailsTwMergeClassGroupMap
  ).reduce((acc, [themeKey, twMergeClassGroupId]) => {
    if (twMergeClassGroupId && Object.hasOwn(emailsTheme, themeKey)) {
      const value = emailsTheme[themeKey as keyof EmailsTheme];
      if (value && typeof value === "object" && !Array.isArray(value)) {
        acc[twMergeClassGroupId] = [
          {
            [twMergeClassGroupId]: Object.keys(value).map(toKebabCase),
          },
        ];
      }
    }
    return acc;
  }, {} as Record<DefaultClassGroupIds, Array<Record<string, string[]>>>);

  return { theme, classGroups };
}

const emailsTwMerge = extendTailwindMerge({
  extend: createEmailsTwMergeExtension(Theme),
});

export function emailsCn(...inputs: ClassValue[]) {
  return emailsTwMerge(clsx(inputs));
}