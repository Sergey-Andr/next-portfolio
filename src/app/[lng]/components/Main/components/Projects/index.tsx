import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa6";
import { projects } from "./config";

export default async function Projects({ language }) {
  return (
    <section className="mb-96">
      <h2 id="projects" className="text-2xl uppercase text-sky-400 font-medium">
        {language("main.projects.title")}
      </h2>
      <h3 className="text-2xl font-bold mb-16">
        {language("main.projects.subTitle")}
      </h3>
      <ul>
        {projects.map((project, index) => (
          <li
            key={project.name}
            className={`flex justify-between mb-32 last:mb-0 ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}
          >
            <aside>
              <Image
                src={project.photo as StaticImport}
                alt={language(`main.${project.name}.title`)}
                className="min-w-96 max-w-lg rounded-xl"
              />
            </aside>
            <div className="w-full flex items-center justify-center">
              <div className="w-72 flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold mb-4">
                  {language(`main.projects.${project.name}.title`)}
                </h3>
                <p className="text-center text-black/60 font-medium mb-4">
                  {language(`main.projects.${project.name}.text`)}
                </p>
                <strong className="mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={`${project.name}_${tech}`}
                      className="mr-4 last:mr-0"
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
                      <p className="mr-2 font-medium">
                        {language(`main.projects.code`)}
                      </p>
                      <FaGithub />
                    </Link>
                    {project.links.demo ? (
                      <Link
                        href={project.links.demo}
                        target="_blank"
                        className="flex items-center hover:text-black/60 duration-300"
                      >
                        <p className="mr-2 font-medium">
                          {language(`main.projects.demo`)}
                        </p>
                        <FaLink />
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
