import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Heading, SectionHeading } from "../utils/templates/atoms";
import { entertainmentNews, generalNews, sportsNews } from "../utils/data.js";
import CategoryList from "../utils/templates/categoryNews";

const CategoryNews: NextPage = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 items-center my-8">
      <div>
        <CategoryList newsCategory={generalNews} />
      </div>
      <div>
        <CategoryList newsCategory={entertainmentNews} />
      </div>
      <div>
        <CategoryList newsCategory={sportsNews} />
      </div>
    </div>
  );
};

export default CategoryNews;
