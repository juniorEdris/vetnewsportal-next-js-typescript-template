import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import logo from "../utils/images/logo.png";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";

const Header: NextPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (searchValue) {
      console.log(`/search/${searchValue}`);
    }
  };
  return (
    <div className="flex items-center md:gap-x-4 justify-between md:justify-evenly z-4">
      <div className="flex items-center gap-2">
        <div className="lg:hidden cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
        <Link href="/">
          <div className="w-[100px] md:w-[129px] md:h-[30px] h-[38px]">
            <Image
              src={logo}
              alt="logo image"
              layout="responsive"
              className="cursor-pointer"
            />
          </div>
        </Link>
        {/* <div className="md:hidden cursor-pointer">
          <BiSearch />
        </div> */}
      </div>
      <div className="relative hidden md:block">
        <form
          onSubmit={handleSearch}
          className="absolute md:static top-10 -left-20 bg-white"
        >
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="bg-light p-3 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-primary md:w-[350px] lg:w-[700px] rounded-full  md:top-0"
            placeholder="Enter keywords"
          />
          <button
            onClick={handleSearch}
            className="absolute md:right-5 right-6 top-4 border-l-2 border-gray-300 pl-4 text-2xl text-primary"
          >
            <BiSearch />
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center">
        <span className="cursor-pointer mr-3 text-sm md:text-base font-medium hover:text-crystal">
          Sign up for newsletters
        </span>
        <Link href="/signup">
          <span className="text-sm md:text-base font-medium cursor-pointer hover:text-crystal">
            SIGN UP
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
