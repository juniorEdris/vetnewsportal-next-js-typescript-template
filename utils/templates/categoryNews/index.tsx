import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Heading, SectionHeading } from "../atoms";

interface News {
  author: string;
  title: string;
  description: string;
  url: string;
  source: string;
  image: string;
  category: string;
  language: string;
  country: string;
  published_at: string;
}
interface CategoryNews {
  newsCategory: News[];
}

const CategoryList = ({ newsCategory }: CategoryNews) => {
  return (
    <div className="">
      <SectionHeading heading={newsCategory[0]?.category} customClass="mb-5" />
      {newsCategory?.map((news, idx) => (
        <div
          className={`${
            idx === newsCategory.length - 1
              ? ""
              : "mb-4 border-b-2 border-gray-200"
          } group`}
          key={idx}
        >
          <Link href={`/${idx}`}>
            <a className="group-hover:text-slate-600">
              {idx === 0 ? (
                <div className="mb-2 ">
                  <Image
                    src={newsCategory[0]?.image}
                    alt={newsCategory[0]?.title}
                    height="55"
                    width="100%"
                    layout="responsive"
                    className="transition ease-in-out delay-150 group-hover:scale-125 duration-300"
                  />
                </div>
              ) : null}
              <Heading
                heading={news?.title}
                customClass="text-normal font-medium mb-5"
              />
              <div className="text-right px-3">
                <Heading heading={news?.source} customClass="font-normal" />
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
