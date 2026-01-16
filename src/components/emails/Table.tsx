import { EmailFonts } from "@/importedUtils";
import { Text } from "./Text";
import { getParagraphTextFontStyleProps } from "@/utils/getTextProps";
import { ComponentProps } from "react";
import { emailsCn } from "@/utils/cn";

export type TableHeaderItem = string | number;
export type TableItem = (undefined | string | number | null)[];

type TableProps = {
  fontParagraphs?: EmailFonts;
  headerItems: TableHeaderItem[];
  items: TableItem[];
} & Omit<ComponentProps<"table">, "ref">;

export function Table({
  className,
  fontParagraphs,
  headerItems,
  items,
  ...tableProps
}: TableProps) {
  const paragraphTextProps = getParagraphTextFontStyleProps(fontParagraphs);

  return (
    <table
      className={emailsCn("w-full px-25 py-10", className)}
      cellSpacing={0}
      {...tableProps}
    >
      <thead>
        <tr className="border-t border-b border-whisper-blue bg-athens-gray overflow-auto">
          {headerItems.map((item, index) => (
            <th
              key={item}
              className={emailsCn(
                index === headerItems.length - 1 ? "pr-16" : "pr-8",
                index === 0 && "pl-16 max-w-150"
              )}
            >
              <Text
                className={emailsCn(
                  "uppercase text-small text-waterloo break-keep",
                  index === 0 ? "text-left" : "text-right",
                  paragraphTextProps.className
                )}
                style={paragraphTextProps.style}
              >
                {item}
              </Text>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr
            key={item[0]}
            className={emailsCn(
              "overflow-auto",
              index !== 0 && "border-t border-mystic"
            )}
          >
            {item.map((value, index) => (
              <td
                key={value}
                className={emailsCn(
                  "py-15",
                  index === item.length - 1 ? "pr-16" : "pr-8",
                  index === 0 && "pl-16 max-w-150"
                )}
              >
                <Text
                  className={emailsCn(
                    "text-body-small",
                    index === 0
                      ? "text-left break-all"
                      : "text-right wrap-break-word",
                    paragraphTextProps.className
                  )}
                  style={paragraphTextProps.style}
                >
                  {value}
                </Text>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
