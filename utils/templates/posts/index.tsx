import Image from "next/image";
import Link from "next/link";
import React from "react";

interface postProps {
  id: number;
  title: string;
  image: string;
  description: string;
  time?: string;
}

const Post = ({ id, title, image, description, time }: postProps) => {
  return (
    <Link href="/" className="" key={id}>
      <div className="group cursor-pointer  w-48% md:w-32% lg:w-24% ">
        <div className="w-full py-3  group-hover:opacity-75 transition duration-[300ms]">
          <Image src={image} alt={title} height="72px" width="100%" layout="responsive" />
        </div>
        <h2 className="font-semibold text-lg">
          {title}
        </h2>
        <p className="text-left">{description}</p>
      </div>
      {/**-------- */}
    </Link>
  );
};

export default Post;
