import React from "react";
import { useMediaQuery } from "react-responsive";

import MobileContent from "./MobileContent";
import Content from "./Content";

const Section4 = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 475px)",
  });

  return (
    <section className="section4">
      {isMobile ? <MobileContent /> : <Content />}
    </section>
  );
};

export default Section4;
