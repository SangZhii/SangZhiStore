import React from "react";
import HomepageSlide from "./HomepageSlide";
import { HOMEPAGE3, MAINSLIDE } from "../../mainslide";

const Homepage3 = () => {
  return (
    <div>
      <HomepageSlide data={MAINSLIDE} datas={HOMEPAGE3} />
    </div>
  );
};

export default Homepage3;
