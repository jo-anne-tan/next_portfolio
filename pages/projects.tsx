import Link from "next/link";
import PortfolioCard from "../components/portfolio/portfolio_card";
import { portfolio_data } from "../data/portfolio_data";

const Projects: React.FC = () => {
  return (
    <div className="min-h-full flex  flex-col gap-5 mt-12 md:mt-24 pb-20">
      <p className="italic text-sm text-gray-300 text-center mt-5 md:mt-0">
        Hey there! Thanks for looking through my portfolio. I&apos;m in the
        midst of cleaning up older projects and making new ones. This section
        will be updated soon. Please check back in a few weeks or{" "}
        <Link href="/contact">
          <a className="text-cyan-400 hover:text-rose-400">contact me</a>
        </Link>
        . Thanks!
      </p>
      {portfolio_data.map((data) => (
        <PortfolioCard
          key={data.title}
          image={data.image}
          title={data.title}
          subtitle={data.subtitle}
          github_link={data.github_link}
          website_link={data.website_link}
          description={data.description}
        />
      ))}
    </div>
  );
};

export default Projects;
