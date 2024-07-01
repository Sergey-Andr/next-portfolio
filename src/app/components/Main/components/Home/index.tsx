import Image from "next/image";
import hi from "@/../public/hi.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import Blob from "@/app/components/Main/components/Home/components/Blob";

export default async function Home() {
  return (
    <section className="w-3/5 m-auto mt-40">
      <div className="max-w-1/2">
        <h2 className="flex text-5xl font-bold items-center mb-2">
          Front-end Engineer
          <Image
            src={hi as StaticImport}
            alt="Image hello"
            className="w-10 h-10 ml-4"
          />
        </h2>
        <sub className="text-lg text-black/60 font-medium">
          Hi! I&apos;m Serhii Andriievskiy. A passionate Front-end Engineer
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
      <div className="w-1/2 bg-black">
        <Blob />
      </div>
    </section>
  );
}
