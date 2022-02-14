import React from "react";
import "./Benefit2.scss";
import { ReactComponent as LikeIcon } from "../../../static/like.svg";
import { useMediaQuery } from "react-responsive";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardA from "./Card/CardA";
import CardB from "./Card/CardB";
import CardC from "./Card/CardC";

const Benefit2 = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 475px)",
  });

  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <section className="section benefit" id="benefit2">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-header-top">
            <LikeIcon />
            베네핏 2
          </div>
          <div className="section-header-title">
            사업자 필수 전문 서비스,
            <br />
            특별한 수수료로 이용하세요
          </div>
          <div className="section-header-sub">
            밸런스 스페이스의 고객이시라면 검증된 전문가에게
            <br />
            시중보다 저렴한 가격으로 사업자 필수 서비스들을 이용하실 수 있어요.
          </div>
        </div>
        <div className="section-content">
          {isMobile ? (
            <Slider {...settings}>
              <CardA />
              <CardB />
              <CardC />
            </Slider>
          ) : (
            <div className="row">
              <div className="col">
                <CardA />
              </div>
              <div className="col">
                <CardB />
                <CardC />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Benefit2;
