import NavButton from "./navbutton";

const Navbar: React.FC = () => {
  return (
    <nav className="flex gap-x-10 py-5 fixed top-0 z-10 bg-zinc-800 w-full ">
      <NavButton label="Home" />
      <NavButton label="About Me" />
      <NavButton label="My Stack" />
      <NavButton label="Projects" />
      <NavButton label="Contact" />
    </nav>
  );
};

export default Navbar;
