import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="h-full">
      <div className="h-full gap-x-5 flex flex-col md:flex-row items-center justify-center pt-20 md:pt-0">
        <div className="w-1/2 md:w-1/5">
          <Image
            className="rounded-full"
            src="/images/avatar.jpeg"
            alt="Jo-Anne Tan's portrait"
            width={300}
            height={300}
            objectFit="cover"
            layout="responsive"
          />
        </div>
        <div className="max-w-3xl text-[50px]">
          <p className="">Hello world! 👋</p>
          <h1 className="">I&apos;m Jo-Anne Tan, a Full-Stack Web Developer</h1>
          <hr className="my-5" />
          <p className="text-lg">
            Previously working as a sales engineer, I decided to pursue my
            passion in programming and I have never looked back since.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
