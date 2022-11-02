import { NextPage } from "next";
import { worldNews } from "../utils/data";
import { SectionHeading } from "../utils/templates/atoms";
import Post from "../utils/templates/posts";

const RandomNews: NextPage = () => {
  const post = (
    <Post
      id={1}
      title={"Lorem Ipsum is simply dummy text."}
      image={"/images/image1.jpg"}
      description={
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum addolorum necessitatibus atque laborum consectetur unde nobis odio!"
      }
      route={`/`}
    />
  );
  return (
    <div className="my-8">
      <SectionHeading heading="wolrd news" />
      <div className="flex flex-wrap gap-3 items-center">
        {worldNews?.map((news, idx) => (
          <Post
            key={idx}
            id={idx}
            title={`${news?.title.substring(0,50)}...`}
            image={news?.image}
            description={
              `${news?.description.substring(0,90)}...`}
            route={`/${idx}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RandomNews;
