import Welcome from "@/app/[lng]/components/Main/components/Home/components/Welcome";
import TechStack from "@/app/[lng]/components/Main/components/Home/components/TechStack";

export default async function Home({ language }) {
  return (
    <section className="mt-40 mb-96" id="">
      <Welcome language={language} />
      <TechStack language={language} />
    </section>
  );
}
