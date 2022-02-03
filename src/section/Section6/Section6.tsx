import React from "react";
import "./Section6.css";
import { useMediaQuery } from "react-responsive";

const Section6 = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  return (
    <section className="section6">
      <div className="section-inner">
        {isMobile ? (
          <>
            오직,
            <br />
            밸런스 스페이스에서만
            <br />
            제공하는
            <span className="gradient-text gradient">Benefit</span>
            <br />
            서비스를 만나보세요
          </>
        ) : (
          <>
            오직, 밸런스 스페이스에서만 제공하는
            <br />
            <span className="gradient-text gradient">Benefit</span> 서비스를
            만나보세요
          </>
        )}
      </div>
    </section>
  );
};

export default Section6;
