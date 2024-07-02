import Image from "next/image";
import hi from "@/../public/hi.png";
import face from "@/../public/face.jpg";
import {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default async function Welcome({ language }) {
  return (
    <div className="flex items-center mb-24">
      <div className="w-3/5 mr-16">
        <h2 className="flex text-5xl font-bold items-center mb-2 text-nowrap">
          {language("main.home.title")}
          <Image
            src={hi as StaticImport}
            alt="Image hello"
            className="w-10 h-10 ml-4"
          />
        </h2>
        <sub className="text-lg text-black/60 font-medium">
          {language("main.home.subTitle")}
        </sub>
        <nav className="flex text-3xl mt-6">
          <Link
            href="https://www.linkedin.com/in/serhii-andr/"
            target="_blank"
            className="mr-4 cursor-pointer hover:text-black/80 duration-300"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/Sergey-Andr"
            target="_blank"
            className="cursor-pointer hover:text-black/80 duration-300"
          >
            <FaGithub />
          </Link>
        </nav>
      </div>
      <div className="w-2/5">
        <Image
          src={face as StaticImageData}
          alt={"face"}
          className="animate-blob border-2 border-black"
        />
      </div>
    </div>
  );
}
