import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Description, Heading } from "../atoms";

interface postProps {
  id: number;
  title: string;
  image: string;
  description: string;
  time?: string;
  route?: string;
}

const Post = ({
  id,
  title,
  image,
  description,
  time,
  route = "/",
}: postProps) => {
  return (
    <div className="group cursor-pointer w-48% md:w-32% lg:w-24%">
    <Link href={route} className="" key={id}>
      <a>
        <div className="">
          <div className="w-full">
            <Image
              src={image}
              alt={title}
              height="72px"
              width="100%"
              layout="responsive"
              className="transition ease-in-out delay-150 group-hover:scale-125 duration-300 "
            />
          </div>
          <div className="p-2">
            <Heading heading={title} customClass="font-medium text-lg" />
            <Description content={description} customClass="text-left" />
          </div>
        </div>
      </a>
    </Link>
    </div>
  );
};

export default Post;
