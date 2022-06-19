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
          I took part in volunteer activities with NGOs. It was fun, but it
          didn&apos;t fill the gap in my heart. It wasn&apos;t until I
          participated in several coding training sessions that I finally
          realised what that was - the joy and satisfaction from creation.
        </p>
        <p>
          In pursuit of the feverish passion I once experienced completing
          coding assignments back in my university days, I did a quick research
          on the job market for software developers, pondered for a bit, then
          took a leap of faith and persued a 3-month bootcamp on full-stack web
          development.
        </p>
        <p>
          Here I am, 3 months later with a belt of shiny new skills alongside
          newfound confidence, passion and excitement!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
