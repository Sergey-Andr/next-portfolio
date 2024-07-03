import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa6";
import { projects } from "./config";
import { TFunction } from "@/app/i18n";

export default async function Projects({ language }: { language: TFunction }) {
  return (
    <section className="mb-96 lg:mb-72 max-sm:mb-32">
      <h2
        id="projects"
        className="text-2xl quad:text-4xl lg:text-lg uppercase text-sky-400 font-medium"
      >
        {language("main.projects.title")}
      </h2>
      <h3 className="text-2xl quad:text-4xl lg:text-lg font-bold mb-16 lg:mb-8 max-sm:mb-4">
        {language("main.projects.subTitle")}
      </h3>
      <ul>
        {projects.map((project, index) => (
          <li
            key={project.name}
            className={`flex justify-between max-sm:flex-col mb-32 quad:mb-64 lg:mb-16 last:mb-0 ${index % 2 !== 0 ? "min-md:flex-row-reverse" : ""}`}
          >
            <aside className="max-sm:mb-4">
              <Image
                src={project.photo as StaticImport}
                alt={language(`main.${project.name}.title`)}
                className="min-w-96 max-w-lg quad:max-w-2xl lg:w-96 max-sm:w-full rounded-xl"
              />
            </aside>
            <div className="w-full flex items-center justify-center">
              <div className="w-72 quad:w-96 lg:w-60 flex flex-col items-center justify-center">
                <h3 className="text-xl quad:text-3xl lg:text-lg font-bold mb-4 lg:mb-2">
                  {language(`main.projects.${project.name}.title`)}
                </h3>
                <p className="text-center text-black/60 font-medium quad:text-xl quad:tracking-wide lg:text-sm mb-4">
                  {language(`main.projects.${project.name}.text`)}
                </p>
                <strong className="mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={`${project.name}_${tech}`}
                      className="mr-4 last:mr-0 quad:text-xl lg:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </strong>
                {project.links ? (
                  <nav className="flex">
                    <Link
                      href={project.links.git}
                      target="_blank"
                      className="flex items-center mr-4 hover:text-black/60 duration-300"
                    >
                      <p className="mr-2 font-medium quad:text-xl lg:text-sm">
                        {language(`main.projects.code`)}
                      </p>
                      <FaGithub className="quad:text-xl" />
                    </Link>
                    {project.links.demo ? (
                      <Link
                        href={project.links.demo}
                        target="_blank"
                        className="flex items-center hover:text-black/60 duration-300"
                      >
                        <p className="mr-2 font-medium quad:text-xl lg:text-sm">
                          {language(`main.projects.demo`)}
                        </p>
                        <FaLink className="quad:text-xl" />
                      </Link>
                    ) : (
                      <></>
                    )}
                  </nav>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
