import React from "react";
import "./Benefit2.scss";
import { ReactComponent as LikeIcon } from "../../../static/like.svg";
import { useMediaQuery } from "react-responsive";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "./Card";

const CardA = () => {
  return (
    <Card
      bgColor="#EAF6FE"
      spanColor="#61BEF5"
      title="세무 서비스."
      desc="초기사업자 맞춤 세무서비스로 더 큰 절세 혜택을 경험해보세요."
      service="세무기장, 재산세, 영업권 평가"
      color="#32A6EC"
    />
  );
};

const CardB = () => {
  return (
    <Card
      bgColor="#F5F5F7"
      spanColor="#FFD14B"
      title="노무 서비스."
      desc="최고의 노무 서비스를 특가로 이용해보세요."
      service="근로계약서, 연차휴가, 급여대장, 취업규칙, 
      비정규직(일용직 등), 4대 보험, 노동법 상담"
      color="#F3BD1D"
    />
  );
};

const CardC = () => {
  return (
    <Card
      bgColor="#F5F5F7"
      spanColor="#B2D270"
      title="법률/법무 서비스."
      desc="기업전문 변호사/법무사 서비스를 특가로 이용해보세요."
      service="기업법률자문, 공정거래, 민형사소송, 실용신안/
      특허 출원, 법인설립, 변경등기, 부동산 등기"
      color="#8AB534"
    />
  );
};

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
