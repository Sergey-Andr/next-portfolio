export default async function Header() {
  return (
    <header className="w-full h-16 flex justify-between bg-white sticky top-4">
      <h1 className="text-xl font-bold">Serhii.dev</h1>
      <nav className="text-lg font-medium">
        <a href="/" className="mr-4 hover:text-black/60 duration-300">
          Home
        </a>
        <a href="/#about" className="mr-4 hover:text-black/60 duration-300">
          About
        </a>
        <a href="/#projects" className="mr-4 hover:text-black/60 duration-300">
          Projects
        </a>
        <a href="/#contacts" className="hover:text-black/60 duration-300">
          Contacts
        </a>
      </nav>
    </header>
  );
}
