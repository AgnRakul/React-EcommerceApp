import React from "react";
import Announcement from "../Components/Announcement";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Home;
