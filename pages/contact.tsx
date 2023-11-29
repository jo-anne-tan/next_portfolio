import Image from "next/image";
import Link from "next/link";

const Contact: React.FC = () => {
  return (
    <div className="h-full flex items-center justify-center text-center ">
      <div className=" max-w-3xl flex flex-col items-center p-2">
        <div className="text-3xl">Got a cool project to work on together? Just wanna say hi? Let&apos;s chat!</div>
        <div className="mt-10 w-1/2 flex flex-col items-center text-lg">
          <div>
            <a href="mailto:tanjoanne128@gmail.com" className="hover:text-cyan-400 block mb-2">
              <div className="flex items-center gap-x-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p>tanjoanne128@gmail.com</p>
              </div>
            </a>
            <a href="tel:+60163192090" className="hover:text-cyan-400 block mb-2">
              <div className="flex items-center gap-x-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <p>+60 16 319 2090</p>
              </div>
            </a>
          </div>
          <div className="flex gap-x-10 mt-10">
            {/* LinkedIn */}
            <div className="hover:text-cyan-400">
              <Link
                href="https://www.linkedin.com/in/jo-anne-tan/"
                target="_blank"
                className="grid place-items-center gap-y-2"
                rel="noreferrer"
              >
                <Image
                  className="bg-white rounded-md object-cover"
                  src="/images/logos/linkedin.png"
                  alt="LinkedIn logo"
                  width={50}
                  height={50}
                />
                <div className="flex items-center gap-x-10 ">LinkedIn</div>
              </Link>
            </div>
            {/* Github */}
            <div className="hover:text-cyan-400">
              <Link
                href="https://www.linkedin.com/in/jo-anne-tan/"
                target="_blank"
                className="grid place-items-center gap-y-2"
                rel="noreferrer"
              >
                <Image
                  className="rounded-md object-cover"
                  src="/images/logos/github.webp"
                  alt="Github logo"
                  width={50}
                  height={50}
                />
                <div className="flex items-center gap-x-10">Github</div>
              </Link>
            </div>
            {/* Whatsapp */}
            <div className="hover:text-cyan-400">
              <Link
                href="https://wa.me/+60163192090"
                target="_blank"
                rel="noreferrer"
                className="grid place-items-center gap-y-2"
              >
                <Image
                  className=" rounded-md"
                  src="/images/logos/whatsapp.png"
                  alt="Github logo"
                  width={50}
                  height={50}
                />
                <div>Whatsapp</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
