import { Img } from "@react-email/components";

import getImage from "@/utils/getImage";

export function Logo() {
  return (
    <Img
      src={getImage("logo-color.png")}
      alt="Payments AI logo"
      className="w-120 h-auto pb-16"
    />
  );
}
