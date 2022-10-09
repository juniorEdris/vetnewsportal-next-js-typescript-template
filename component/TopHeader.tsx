import { NextPage } from "next";
import React from "react";
import MenuDropDown from "../utils/dropdowns/MenuDropDown";

const TopHeader: NextPage = () => {
  return (
    <div className="flex py-2 items-center">
      <div className="w-full lg:w-1/2 text-sm md:font-medium">Friday, September 10</div>
      <div className="w-full lg:w-1/2 flex gap-5 items-center justify-end">
        <MenuDropDown
          title="vetnews special"
          custom_classes="text-primary capitalize text-sm md:font-medium hover:text-crystal z-5"
        />
        <MenuDropDown
          title="more news"
          custom_classes="text-primary capitalize text-sm md:font-medium hover:text-crystal z-5"
        />
      </div>
    </div>
  );
};

export default TopHeader;
