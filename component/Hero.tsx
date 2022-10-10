import { NextPage } from "next";
import HeroTabs from "./HeroTabs";
import HeroVideo from "./HeroVideo";

const Hero: NextPage = () => {
  return (
    <div className="flex items-center justify-center flex-col md:flex-row my-5 gap-3">
      <div className="w-full md:w-8/12 bg-gray-400 mb-3 md:mb-0">
        <HeroVideo videoId="HFu8rks-4tE"/>
      </div>
      <div className="w-full md:w-2/6 h-[400px]">
        <HeroTabs />
      </div>
    </div>
  );
};

export default Hero;
