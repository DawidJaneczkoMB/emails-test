import { Font, Head as REHead } from "@react-email/components";

export function Head() {
  return (
    <REHead>
      <style>{`html { font-size: 10px; } body { margin: 0; padding-top: 40px; } * { box-sizing: border-box; } strong { font-weight: 600; font-size: inherit; font-family: inherit; }`}</style>
      <Font
        fontFamily="Source Sans Pro"
        fallbackFontFamily="sans-serif"
        webFont={{
          url: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap",
          format: "woff2",
        }}
      />
      <Font
        fontFamily="Ubuntu"
        fallbackFontFamily="sans-serif"
        webFont={{
          url: "https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap",
          format: "woff2",
        }}
      />
      <style type="text/css">
        {`@import url(https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&amp;display=swap); @import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&amp;display=swap);`}
      </style>
    </REHead>
  );
}
