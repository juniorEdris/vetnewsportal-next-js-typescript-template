import { NextPage } from "next";
import HeroTabs from "./HeroTabs";

const Hero: NextPage = () => {
  return (
    <div className="flex items-center justify-center flex-col md:flex-row my-5 gap-3">
      <div className="w-full md:w-8/12 h-60 bg-gray-400 mb-3 md:mb-0">hero 1</div>
      <div className="w-full md:w-2/6">
        <HeroTabs />
      </div>
    </div>
  );
};

export default Hero;
