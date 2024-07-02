import Home from "@/app/[lng]/components/Main/components/Home";
import About from "@/app/[lng]/components/Main/components/About";
import Projects from "@/app/[lng]/components/Main/components/Projects";
import { TFunction } from "@/app/i18n";

export default async function Main({ language }: { language: TFunction }) {
  return (
    <main className="h-full w-3/5 m-auto">
      <Home language={language} />
      <About language={language} />
      <Projects language={language} />
    </main>
  );
}
