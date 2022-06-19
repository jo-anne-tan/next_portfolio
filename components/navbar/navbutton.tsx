import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  label: string;
};
const NavButton: React.FC<Props> = ({ label }) => {
  const link = `/${label.toLowerCase().split(" ").join("_")}`;

  const router = useRouter();
  const path = router.pathname;
  const isHome = path === "/" && label === "Home";

  return (
    <Link href={link}>
      <div
        className={`hover:text-cyan-300 hover:scale-110 hover:cursor-pointer ${
          path === link || isHome ? "text-rose-400" : "text-white"
        }`}
      >
        {label}
      </div>
    </Link>
  );
};

export default NavButton;
