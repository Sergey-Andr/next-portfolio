import { TFunction } from "@/app/i18n";
import HeaderMobile from "@/app/[lng]/components/Header/components/HeaderMobile";

export default async function Header({ language }: { language: TFunction }) {
  return (
    <>
      <header className="w-full h-16 flex lg:bg-white lg:z-50 max-sm:hidden items-center justify-between sticky top-0">
        <h1 className="text-2xl quad:text-4xl lg:text-xl font-bold">
          Serhii.dev
        </h1>
        <nav className="text-xl quad:text-2xl lg:text-lg font-medium">
          <a href="#" className="mr-4 hover:text-black/60 duration-300">
            {language("header.home")}
          </a>
          <a href="#about" className="mr-4 hover:text-black/60 duration-300">
            {language("header.about")}
          </a>
          <a href="#projects" className="mr-4 hover:text-black/60 duration-300">
            {language("header.projects")}
          </a>
          <a href="#contacts" className="hover:text-black/60 duration-300">
            {language("header.contacts")}
          </a>
        </nav>
      </header>
      <HeaderMobile />
    </>
  );
}
