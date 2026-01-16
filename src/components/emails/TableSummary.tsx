import { EmailFonts } from "@/importedUtils";
import { Column, Row, Section } from "@react-email/components";
import { Text } from "./Text";
import { getParagraphTextFontStyleProps } from "@/utils/getTextProps";
import { ComponentProps } from "react";
import { emailsCn } from "@/utils/cn";

type TableSummaryItem = {
  value: undefined | string | number | null;
  label: string;
};

type TableSummaryProps = {
  fontParagraphs?: EmailFonts;
  items: TableSummaryItem[];
} & ComponentProps<typeof Section>;

export function TableSummary({
  className,
  fontParagraphs,
  items,
  ...tableSummaryProps
}: TableSummaryProps) {
  const paragraphTextProps = getParagraphTextFontStyleProps(fontParagraphs);

  return (
    <Section
      className={emailsCn("px-25 py-10", className)}
      {...tableSummaryProps}
    >
      {items.map(({ label, value }, index) => (
        <Row
          className={emailsCn(
            "border-b border-b-mystic",
            index === 0 && "border-t-2 border-t-dust-gray"
          )}
        >
          <Column className="pl-10">
            <Text
              className={emailsCn(
                "text-body-small wrap-break-word text-left py-15",
                index === items.length - 1 && "font-semibold",
                paragraphTextProps.className
              )}
              style={paragraphTextProps.style}
            >
              {label}
            </Text>
          </Column>

          <Column className="pr-10">
            <Text
              className={emailsCn(
                "text-body-small wrap-break-word text-right py-15",
                index === items.length - 1 && "font-semibold text-h6",
                paragraphTextProps.className
              )}
              style={paragraphTextProps.style}
            >
              {value || "-"}
            </Text>
          </Column>
        </Row>
      ))}
    </Section>
  );
}
