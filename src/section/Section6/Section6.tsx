import React, { useEffect, useState } from "react";
import "./Section6.scss";
import { useMediaQuery } from "react-responsive";

const Section6 = () => {
  const [effect, setEffect] = useState("translate3d(0%, 0px, 0px)");

  const isMobile = useMediaQuery({
    query: "(max-width: 475px)",
  });

  useEffect(() => {
    function onScroll() {
      const startY = 3738;

      if (window.scrollY >= startY) {
        const scroll = window.scrollY - startY;
        setEffect(`translate3d(${scroll}%), 0px, 0px`);
        console.log(scroll, effect);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="section" id="section6">
      {/* <div className="effect" style={{ transform: effect }} />
      <div className="effect" style={{ transform: effect }} /> */}
      <div className="section-inner">
        {isMobile ? (
          <>
            오직,
            <br />
            밸런스 스페이스에서만
            <br />
            제공하는 <span className="gradient-text gradient">Benefit</span>
            <br />
            서비스를 만나보세요
          </>
        ) : (
          <>
            오직, 밸런스 스페이스에서만 제공하는 <br />
            <span className="gradient-text gradient">Benefit</span> 서비스를
            만나보세요
          </>
        )}
      </div>
    </section>
  );
};

export default Section6;
