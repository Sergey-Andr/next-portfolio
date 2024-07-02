import Image from "next/image";
import cirle from "@/../public/circle.svg";
import programmer from "@/../public/programmer.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default async function About({ language }) {
  return (
    <section className="mb-96 flex">
      <aside className="relative w-fit mr-16">
        <Image
          width="396"
          height="396"
          src="/laptop.png"
          alt="laptop"
          className="rounded-xl min-w-96"
        />
        <div className="w-28 h-28 bg-white rounded-full absolute -bottom-8 -right-8 flex items-center justify-center">
          <div className="relative">
            <Image
              width={96}
              height={96}
              src={cirle as StaticImport}
              alt="animated circle"
              className="animate-circle-text"
            />
            <Image
              width={48}
              height={48}
              src={programmer as StaticImport}
              alt="programmer icon"
              className="absolute top-1/4 left-1/4"
            />
          </div>
        </div>
      </aside>
      <div>
        <h2 id="about" className="text-2xl uppercase text-sky-400 font-medium">
          {language("main.about.title")}
        </h2>
        <h3 className="text-2xl font-bold">
          {language("main.about.subTitle")}
        </h3>
        <sub className="text-lg text-black/80 tracking-wide">
          {language("main.about.text")}
        </sub>
      </div>
    </section>
  );
}
