import React from "react";
import HomepageSlide from "./HomepageSlide";
import { HOMEPAGE3, MAINSLIDE } from "../../mainslide";
import Navbar from "../../components/navbar/Navbar";

const Homepage3 = () => {
  return (
    <div>
      <Navbar />
      <HomepageSlide data={MAINSLIDE} datas={HOMEPAGE3} />
    </div>
  );
};

export default Homepage3;
