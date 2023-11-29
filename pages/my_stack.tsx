import LogoCard from "../components/logo_card";

const MyStack: React.FC = () => {
  return (
    <div className="min-h-full flex gap-y-20 justify-center flex-col mt-12 md:mt-24 pb-20">
      <div className="flex flex-col w-full justify-center gap-y-3">
        <p className="text-center">What I&apos;m good in</p>
        <div className="self-center flex gap-5 justify-center items-center max-w-[70%] flex-wrap ">
          <LogoCard image="/images/logos/nextjs.png" subtitle="Next.js" link="https://nextjs.org/" />
          <LogoCard image="/images/logos/typescript.png" subtitle="Typescript" link="https://www.typescriptlang.org/" />
          <LogoCard image="/images/logos/react.png" subtitle="React.js" link="https://reactjs.org/" />
          <LogoCard image="/images/logos/javascript.png" subtitle="JavaScript" link="https://www.javascript.com/" />
          <LogoCard image="/images/logos/tailwind.png" subtitle="Tailwind CSS" link="https://tailwindcss.com/" />
        </div>
      </div>
      <div className="flex flex-col w-full justify-center gap-y-3">
        <p className="text-center">What I&apos;m familiar with</p>
        <div className="self-center flex gap-5 justify-center items-center max-w-[70%] flex-wrap ">
          <LogoCard image="/images/logos/k8s.png" subtitle="Kubernetes" link="https://flutter.dev/" />
          <LogoCard image="/images/logos/datadog.jpeg" subtitle="Datadog" link="https://flutter.dev/" />
          <LogoCard image="/images/logos/sentry.png" subtitle="Sentry" link="https://sentry.io/" />
          <LogoCard
            image="https://lokalise.com/build/small_logo.848b4be7.svg"
            subtitle="Lokalise"
            link="https://lokalise.com/"
          />

          <LogoCard image="/images/logos/golang-gopher.png" subtitle="Golang" link="https://go.dev/" />
          <LogoCard image="/images/logos/flutter.png" subtitle="Flutter" link="https://flutter.dev/" />
          <LogoCard image="/images/logos/bonfire.gif" subtitle="Bonfire" link="https://bonfire-engine.github.io/#/" />
          <LogoCard image="/images/logos/prisma.png" subtitle="Prisma" link="https://www.prisma.io/" />
          <LogoCard image="/images/logos/graphql.png" subtitle="GraphQL CSS" link="https://graphql.org/" />
          <LogoCard image="/images/logos/hasura.webp" subtitle="Hasura" link="https://hasura.io/" />
          <LogoCard image="/images/logos/heroku.png" subtitle="Heroku" link="https://www.heroku.com/" />
          <LogoCard image="/images/logos/netlify.png" subtitle="Netlify" link="https://www.netlify.com/" />
          <LogoCard image="/images/logos/vercel.svg" subtitle="Vercel" link="https://vercel.com/" />
          <LogoCard image="/images/logos/redis.webp" subtitle="Redis" link="https://redis.io/" />
        </div>
      </div>
      <div className="flex flex-col w-full items-center  gap-y-3">
        <p>What I&apos;m learning next</p>
        <ul className="list-disc">
          <li>Progressive Web Apps</li>
          <li>Web3.js</li>
          <li>Solidity</li>
        </ul>
      </div>
    </div>
  );
};

export default MyStack;
