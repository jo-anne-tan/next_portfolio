import Image from "next/image";

const AboutMe: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row pt-20 gap-x-10 gap-y-5">
      <Image
        className="rounded-xl object-cover"
        src="/images/casual.jpeg"
        width={400}
        height={400}
        alt="photo of Jo-Anne Tan"
      />
      <div className="grid gap-y-5 text-justify text-lg">
        <p>Hello! I&apos;m Jo-Anne, a full-stack software engineer currently residing in Malaysia.</p>
        <p>
          In 2016, I graduated from Monash University with a Bachelor&apos;s degree in Electrical and Computer Systems
          Engineering. For the first few years, I worked in the industrial automation industry as a sales engineer.
          While my role was rewarding in its own way, I couldn&apos;t help feeling like something was missing.
        </p>
        <p>In 2020, the pandemic got me rethinking about the path I was on.</p>
        <p>
          Do I want to continue down the same path as a sales engineer, or pursue something I find more fulfilment in?
          After much consideration, I decided on the latter, took a leap of faith and started a 3-month bootcamp on full
          stack web development.
        </p>
        <p>
          Shortly after, I landed my first web development job at a local e-commerce startup, Sharkbate. Here, I helped
          build the merchant dashboard which utilises Next.js and the mobile app on Flutter. I even had the opportunity
          to build an in-app gamified shopping experience with Bonfire. That was a lot of fun and learning.
        </p>
        <p>
          Today, I&apos;m happily and proudly working as a Software Engineer in StashAway impacting users across
          multiple regions including Malaysia, Singapore, Hong Kong, Thailand and UAE.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
