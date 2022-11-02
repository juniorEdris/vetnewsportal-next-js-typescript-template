import { NextPage } from "next";
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
    />
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
      </div>
    </div>
  );
};

export default RandomNews;
