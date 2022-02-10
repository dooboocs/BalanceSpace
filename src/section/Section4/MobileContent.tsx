import React from "react";
import "./MobileContent.scss";
import { Card1, Card2, Card3, Card4 } from "./Cards";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MobileContent = () => {
  const [active, setActive] = React.useState(0);

  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 1,
    speed: 500,
    afterChange: (index: number) => {
      setActive(index);
    },
  };

  return (
    <div className={`section-inner mode-${active}`}>
      <h1 className="title">
        왜 밸런스 스페이스를
        <br />
        선택해야 할까요?
      </h1>
      <Slider {...settings}>
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </Slider>
    </div>
  );
};

export default MobileContent;
