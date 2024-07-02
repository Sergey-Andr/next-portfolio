import Image from "next/image";
import { TFunction } from "@/app/i18n";

export default async function TechStack({ language }: { language: TFunction }) {
  return (
    <div className="flex items-center">
      <h3 className="text-xl font-bold mr-8 text-nowrap">
        {language("main.home.stack")}&nbsp;&nbsp;
        <span className="relative -top-0.5">|</span>
      </h3>
      <div className="flex grid-rows-1 gap-8 w-full">
        <Image width="38" height="26" src={"/html.png"} alt="html" />
        <Image width="28" height="26" src={"/css.png"} alt="css" />
        <Image width="32" height="20" src={"/js.png"} alt="js" />
        <Image width="32" height="20" src={"/ts.png"} alt="ts" />
        <Image width="38" height="20" src={"/react.png"} alt="react" />
        <Image width="28" height="16" src={"/next.png"} alt="nextJs" />
        <Image width="38" height="26" src={"/tailwind.png"} alt="tailwindCSS" />
        <Image width="28" height="16" src={"/mui.png"} alt="Material UI" />
      </div>
    </div>
  );
}
