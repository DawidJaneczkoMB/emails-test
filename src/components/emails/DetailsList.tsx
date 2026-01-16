import { Fragment, type ComponentProps } from "react";
import { Text } from "./Text";
import type { ReactNode } from "react";
import { EmailFonts } from "@/importedUtils";
import {
  getHeadingTextFontStyleProps,
  getParagraphTextFontStyleProps,
} from "@/utils/getTextProps";
import { emailsCn } from "@/utils/cn";

export type DetailsRow = {
  valueTextProps?: ComponentProps<typeof Text>;
  nameTextProps?: ComponentProps<typeof Text>;
  value: ReactNode;
  name: string;
};

type DetailsListProps = {
  fontParagraphs?: EmailFonts;
  fontHeaders?: EmailFonts;
  list: DetailsRow[];
  title: string;
};

export default function DetailsList({
  fontParagraphs,
  fontHeaders,
  title,
  list,
}: DetailsListProps) {
  const headingTextProps = getHeadingTextFontStyleProps(fontHeaders);
  const paragraphTextProps = getParagraphTextFontStyleProps(fontParagraphs);

  return (
    <>
      <Text
        className={emailsCn(
          "text-18 leading-small text-left pt-24",
          headingTextProps.className
        )}
        style={headingTextProps.style}
      >
        {title}
      </Text>
      {list.map(({ valueTextProps, nameTextProps, value, name }, index) => {
        const { className: valueTextClassName, ...valueTextPropsRest } =
          valueTextProps || {};
        const { className: nameTextClassName, ...nameTextPropsRest } =
          nameTextProps || {};

        return (
          <Fragment key={`${name}_${value}`}>
            <Text
              className={emailsCn(
                "text-waterloo text-left pt-16",
                paragraphTextProps.className,
                nameTextClassName
              )}
              style={paragraphTextProps.style}
              {...nameTextPropsRest}
            >
              {name}:
            </Text>
            <Text
              className={emailsCn(
                "text-left pt-2",
                index === list.length - 1 && "pb-32",
                paragraphTextProps.className,
                valueTextClassName
              )}
              style={paragraphTextProps.style}
              {...valueTextPropsRest}
            >
              {value}
            </Text>
          </Fragment>
        );
      })}
    </>
  );
}
