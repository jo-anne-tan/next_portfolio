import LogoCard from "../components/logo_card";

const MyStack: React.FC = () => {
  return (
    <div className="min-h-full flex gap-y-20 justify-center flex-col mt-12 md:mt-24 pb-20">
      <div className="w-full flex flex-col items-center">
        <p className="text-center mb-5">What I&apos;ve acquired so far</p>
        <div className="flex gap-5 justify-center items-center max-w-[70%] flex-wrap ">
          <LogoCard
            image="/images/logos/nextjs.png"
            subtitle="Next.js"
            link="https://nextjs.org/"
          />
          <LogoCard
            image="/images/logos/typescript.png"
            subtitle="Typescript"
            link="https://www.typescriptlang.org/"
          />
          <LogoCard
            image="/images/logos/react.png"
            subtitle="React.js"
            link="https://reactjs.org/"
          />
          <LogoCard
            image="/images/logos/javascript.png"
            subtitle="JavaScript"
            link="https://www.javascript.com/"
          />

          <LogoCard
            image="/images/logos/tailwind.png"
            subtitle="Tailwind CSS"
            link="https://tailwindcss.com/"
          />
          <LogoCard
            image="/images/logos/flutter.png"
            subtitle="Flutter"
            link="https://flutter.dev/"
          />
          <LogoCard
            image="/images/logos/bonfire.gif"
            subtitle="Bonfire"
            link="https://bonfire-engine.github.io/#/"
          />
          <LogoCard
            image="/images/logos/prisma.png"
            subtitle="Prisma"
            link="https://www.prisma.io/"
          />

          <LogoCard
            image="/images/logos/graphql.png"
            subtitle="GraphQL CSS"
            link="https://graphql.org/"
          />
          <LogoCard
            image="/images/logos/hasura.webp"
            subtitle="Hasura"
            link="https://hasura.io/"
          />
          <LogoCard
            image="/images/logos/heroku.png"
            subtitle="Heroku"
            link="https://www.heroku.com/"
          />
          <LogoCard
            image="/images/logos/netlify.png"
            subtitle="Netlify"
            link="https://www.netlify.com/"
          />
          <LogoCard
            image="/images/logos/vercel.svg"
            subtitle="Vercel"
            link="https://vercel.com/"
          />

          <LogoCard
            image="/images/logos/python.png"
            subtitle="Python"
            link="https://www.python.org/"
          />
          <LogoCard
            image="/images/logos/redis.webp"
            subtitle="Redis"
            link="https://redis.io/"
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <p className="text-center mb-5">
          What I wish to learn in the near future
        </p>
        <ul className="list-disc">
          <li>Progressive Web Apps</li>
          <li>Ionic Capacitor</li>
          <li>Ionic Capacitor</li>
          <li>Web3.js</li>
          <li>Solidity</li>
          <li>Ruby on Rails</li>
          <li>Golang</li>
        </ul>
      </div>
    </div>
  );
};

export default MyStack;
