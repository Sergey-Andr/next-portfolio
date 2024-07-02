import aat from "@/../public/AAT.jpg";
import anime from "@/../public/anime.png";
import watop from "@/../public/watop.png";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";

interface IProjects {
  name: string;
  stack: string[];
  links?: { git: string; demo?: string };
  photo: StaticImageData;
}

export const projects: IProjects[] = [
  {
    name: "watop",
    stack: ["Next.js", "Tailwind CSS"],
    links: {
      git: "https://github.com/Sergey-Andr/watop",
      demo: "https://watop.vercel.app/",
    },
    photo: watop as StaticImageData,
  },
  {
    name: "anime",
    stack: ["React", "Material UI"],
    links: {
      git: "https://github.com/Sergey-Andr/ViewingAnime",
    },
    photo: anime as StaticImageData,
  },
  {
    name: "aat",
    stack: ["React", "Material UI"],
    photo: aat as StaticImageData,
  },
];
