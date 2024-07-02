export default async function Header({ language, lng }) {
  return (
    <header className="w-full h-16 flex justify-between sticky top-4">
      <h1 className="text-xl font-bold mr-8">Serhii.dev</h1>
      <nav className="text-lg font-medium">
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
  );
}
