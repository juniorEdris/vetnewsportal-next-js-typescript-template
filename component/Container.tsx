import { NextPage } from "next";

const Container: NextPage<{ children: JSX.Element }> = ({ children })  => {
  return <div className="container mx-auto px-4 lg:px-0">{children}</div>;
};

export default Container;
