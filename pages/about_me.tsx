import Image from "next/image";

const AboutMe: React.FC = () => {
  return (
    <div className="h-full flex items-center justify-center gap-x-10 flex-col md:flex-row pt-20 md:pt-0 overflow-auto">
      <Image
        className="rounded-xl flex-1"
        src="/images/casual.jpeg"
        alt="photo of Jo-Anne Tan"
        width={300}
        height={400}
        objectFit="cover"
      />
      <div className="flex flex-col gap-y-5 text-xl max-w-xl mt-10 md:mt-0 max-h-[50%] md:max-h-[80%] text-justify px-5">
        <p>
          Hello! I&apos;m Jo-Anne, a full-stack web developer currently residing
          in Malaysia.
        </p>
        <p>
          I graduated from Monash University in 2016 with a Bachelor&apos;s
          degree in Electrical and Computer Systems Engineering and worked in
          the industrial automation industry for several years. While my role
          was rewarding, it felt like something was missing.
        </p>
        <p>
          It wasn&apos;t until I participated in programming trainings at work
          that I finally realised what the missing piece was - the joy of
          creation.
        </p>
        <p>
          In pursuit of the passion I experienced, I took a leap of faith and
          persued a 3-month bootcamp on full stack web development in November
          2020 at Next Academy.
        </p>
        <p>
          I&apos;m currently happily working as a software engineer at Sharkbate
          Sdn. Bhd.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
