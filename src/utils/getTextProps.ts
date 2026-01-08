const fontSelectsOptionsWithFontWeight = [
  { value: "Ubuntu", fontWeight: "400" },
  { value: "Source Sans Pro", fontWeight: "400" },
  { value: "Ubuntu-Bold", fontWeight: "500" },
  { value: "Source Sans Pro-Bold", fontWeight: "600" },
] as const;

const getTextFontStyleProps = (font: string) => {
  let fontFamily: string = font;
  let fontWeight: string | number = "unset";

  const isFontWithFontWeight = fontSelectsOptionsWithFontWeight.find(
    (option) => option.value === font
  );

  if (isFontWithFontWeight) {
    fontFamily = font.split("-")[0];
    fontWeight = isFontWithFontWeight.fontWeight;
  }

  return {
    fontFamily: `${fontFamily}, sans-serif`,
    fontWeight,
  };
};

export const getParagraphTextFontStyleProps = (font?: string) =>
  getTextFontStyleProps(font || "Source Sans Pro");

export const getHeadingTextFontStyleProps = (font?: string) =>
  getTextFontStyleProps(font || "Ubuntu");
