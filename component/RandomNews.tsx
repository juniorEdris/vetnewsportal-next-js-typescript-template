import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import image1 from "../utils/images/image1.jpg";

const RandomNews: NextPage = () => {
  const post = (
    <Link href="/" className="">
      <div className="group cursor-pointer  w-48% md:w-32% lg:w-24% ">
        <div className="w-full py-3  group-hover:opacity-75 transition duration-[300ms]">
          <Image src={image1} alt="image" layout="responsive" />
        </div>
        <h2 className="font-semibold text-lg">
          Lorem Ipsum is simply dummy text.
        </h2>
        <p className="text-left">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum ad
          dolorum necessitatibus atque laborum consectetur unde nobis odio!
        </p>
      </div>
      {/**-------- */}
    </Link>
  );
  return (
    <div className="my-8">
      <h2 className="my-2 text-xl font-semibold capitalize border-l-4 border-primary pl-2 text-primary">
        wolrd news
      </h2>
      <div className="flex flex-wrap gap-3 items-center">
        {post}
        {post}
        {post}
        {post}
        {post}
        {post}
        {post}
        {post}
      </div>
    </div>
  );
};

export default RandomNews;
