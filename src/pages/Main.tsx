import React from "react";
import { Header } from "../components/base/Header";
import { Footer } from "../components/base/Footer";
import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section8,
  Section9,
  Section10,
  Section11,
} from "../section";
import FloatButton from "../components/base/FloatButton/FloatButton";
import Benefit1 from "../section/benefit/Benefit1/Benefit1";
import Benefit2 from "../section/benefit/Benefit2/Benefit2";
import Benefit3 from "../section/benefit/Benefit3/Benefit3";

const Main = () => {
  return (
    <>
      <FloatButton />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />

      <Benefit1 />
      <Benefit2 />
      <Benefit3 />

      <Section8 />
      <Section9 />
      <Section11 />
      <Section10 />
      <Footer />
    </>
  );
};

export default Main;
