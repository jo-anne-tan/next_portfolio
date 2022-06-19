import Image from "next/image";
import Link from "next/link";

type Props = {
  image: string;
  title: string;
  subtitle: string;
  github_link: string;
  website_link: string;
  description: string[];
};
const PortfolioCard: React.FC<Props> = ({
  image,
  title,
  subtitle,
  github_link,
  website_link,
  description,
}) => {
  return (
    <div className="border border-gray-600 p-5 rounded-xl flex flex-col md:flex-row gap-x-10 ">
      <Image
        className="rounded-xl"
        src={image}
        alt="screenshot of coffee connoisseur web app"
        objectFit="cover"
        width={600}
        height={400}
      />
      <div className="md:w-1/2 mt-5 md:mt-0">
        <h1 className="text-3xl">{title}</h1>
        <p className="mt-2">{subtitle}</p>
        <div className="flex gap-x-5 mt-2">
          <Link href={github_link}>
            <a className="text-cyan-400 hover:text-rose-400">
              View Github Repository
            </a>
          </Link>
          <Link href={website_link}>
            <a className="text-cyan-400 hover:text-rose-400">
              View Live Website
            </a>
          </Link>
        </div>
        {description.map((des) => (
          <p className="mt-5 text-justify" key={des}>
            {des}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCard;
