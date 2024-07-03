import Image from "next/image";
import email from "@/../public/email.png";
import phone from "@/../public/phone.png";
import telegram from "@/../public/telegram.png";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { TFunction } from "@/app/i18n";

export default async function Footer({ language }: { language: TFunction }) {
  return (
    <footer id="contacts" className="mb-16 quad:mb-32">
      <h2 className="text-2xl quad:text-4xl lg:text-lg uppercase text-sky-400 font-medium">
        {language("footer.title")}
      </h2>
      <h3 className="text-2xl quad:text-4xl lg:text-lg font-bold mb-16 lg:mb-8">
        {language("footer.subTitle")}
      </h3>
      <ul className="flex max-sm:flex-col">
        <li className="flex items-center mr-8 quad:mr-16 max-sm:mb-4">
          <Image
            src={email as StaticImageData}
            alt="Email icon"
            className="w-10 h-10 mr-4 quad:w-16 quad:h-16 lg:w-8 lg:h-8"
          />
          <div>
            <label className="font-medium text-lg quad:text-2xl lg:text-base">
              {language("footer.email")}
            </label>
            <Link
              href="https://mail.google.com/mail"
              target="_blank"
              className="quad:text-xl lg:text-sm underline underline-offset-2 hover:text-black/60 duration-300 block"
            >
              andriievskiys@gmail.com
            </Link>
          </div>
        </li>
        <li className="flex items-center mr-8 quad:mr-16 max-sm:mb-4">
          <Image
            src={phone as StaticImageData}
            alt="Phone icon"
            className="w-10 h-10 mr-4 quad:w-16 quad:h-16 lg:w-8 lg:h-8"
          />
          <div>
            <label className="font-medium text-lg quad:text-2xl lg:text-base">
              {language("footer.phone")}
            </label>
            <p className="quad:text-xl lg:text-sm">+(380)-96-609-96-62</p>
          </div>
        </li>
        <li className="flex items-center">
          <Image
            src={telegram as StaticImageData}
            alt="Telegram icon"
            className="w-10 h-10 mr-4 quad:w-16 quad:h-16 lg:w-8 lg:h-8"
          />
          <div>
            <label className="font-medium text-lg quad:text-2xl lg:text-base">
              {language("footer.telegram")}
            </label>
            <Link
              href="https://t.me/Sergiucs"
              target="_blank"
              className="quad:text-xl lg:text-sm underline underline-offset-2 hover:text-black/60 duration-300 block"
            >
              @Sergiucs
            </Link>
          </div>
        </li>
      </ul>
    </footer>
  );
}
