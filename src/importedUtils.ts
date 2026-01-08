const emailFonts = [
  "CourierNewPSMT",
  "CourierNewPS-BoldMT",
  "Georgia",
  "Georgia-Bold",
  "Helvetica",
  "Helvetica-Bold",
  "TimesNewRomanPSMT",
  "TimesNewRomanPS-BoldMT",
  "Source Sans Pro",
  "Ubuntu",
  "Source Sans Pro-Bold",
  "Ubuntu-Bold",
] as const;
export type EmailFonts = (typeof emailFonts)[number];
