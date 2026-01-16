import { CreditCardBrand } from "@/importedApi";
import { EmailFonts } from "@/importedUtils";
import { Column, Img, Row, Section } from "@react-email/components";
import { Text } from "./Text";
import { getParagraphTextFontStyleProps } from "@/utils/getTextProps";
import getPaymentIcon from "@/utils/getPaymentIcon";
import { ComponentProps } from "react";
import { emailsCn } from "@/utils/cn";

type DetailTableItem = {
  value: undefined | string | number | null;
  iconName?: CreditCardBrand;
  label: string;
};

type DetailsTableProps = {
  fontParagraphs?: EmailFonts;
  details: DetailTableItem[];
} & ComponentProps<typeof Section>;

export function DetailsTable({
  className,
  fontParagraphs,
  details,
  ...detailsTableProps
}: DetailsTableProps) {
  const paragraphTextProps = getParagraphTextFontStyleProps(fontParagraphs);

  return (
    <Section
      className={emailsCn("px-25 py-10", className)}
      {...detailsTableProps}
    >
      {details.map(({ iconName, label, value }, index) => (
        <Row
          key={label}
          className={emailsCn(
            "pt-20",
            index === details.length - 1 && "border-b border-mystic",
            index === 0 && "border-t border-mystic"
          )}
        >
          <Column
            className={emailsCn(
              "w-170",
              index === details.length - 1 && "pb-20"
            )}
          >
            <Text
              className={emailsCn(
                "text-waterloo wrap-break-word text-left",
                paragraphTextProps.className
              )}
              style={paragraphTextProps.style}
            >
              {label}
            </Text>
          </Column>
          <Column
            className={emailsCn(
              index === details.length - 1 && "pb-20",
              paragraphTextProps.className
            )}
            style={paragraphTextProps.style}
          >
            <Text
              className={emailsCn(
                "wrap-break-word text-left",
                paragraphTextProps.className
              )}
              style={paragraphTextProps.style}
            >
              {iconName ? (
                <Img
                  className="inline mr-4 h-auto w-20"
                  src={getPaymentIcon(iconName)}
                  alt="payment method icon"
                />
              ) : null}
              {value || "-"}
            </Text>
          </Column>
        </Row>
      ))}
    </Section>
  );
}
