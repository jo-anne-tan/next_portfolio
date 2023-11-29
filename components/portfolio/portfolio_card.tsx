import Image from "next/image";
import Link from "next/link";
import { PortfolioData } from "../../data/portfolio_data";

type Props = PortfolioData;
const PortfolioCard: React.FC<Props> = ({ image, title, subtitle, github_link, website_link, description }) => {
  return (
    <div className="border border-gray-600 p-5 rounded-xl flex flex-col md:flex-row gap-x-10 ">
      <Image
        className="rounded-xl"
        src={image}
        alt="screenshot of coffee connoisseur web app"
        objectFit="cover"
        width={500}
        height={800}
      />
      <div className="md:w-1/2 mt-5 md:mt-0">
        <h1 className="text-3xl">{title}</h1>
        <p className="mt-2">{subtitle}</p>
        <div className="flex gap-x-5 mt-2">
          {github_link && (
            <Link href={github_link} target="_blank" className="text-cyan-400 hover:text-rose-400">
              Github Repository
            </Link>
          )}
          <Link href={website_link} target="_blank" className="text-cyan-400 hover:text-rose-400">
            Live Website
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
