import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  image: string;
  subtitle: string;
  link: string;
};
const LogoCard: React.FC<Props> = ({ image, subtitle, link }) => {
  return (
    <Link href={link} passHref>
      <a target="_blank">
        <div className="hover:cursor-pointer hover:scale-110">
          <div className="border-2 border-white rounded-full flex items-center justify-center p-1">
            {/* TODO: add blur effect */}
            <Image
              className="bg-white rounded-full"
              src={image}
              alt={`${subtitle} logo`}
              width={100}
              height={100}
              objectFit="cover"
              // placeholder="blur"
            />
          </div>
          <p className="text-center mt-2">{subtitle}</p>
        </div>
      </a>
    </Link>
  );
};

export default LogoCard;
