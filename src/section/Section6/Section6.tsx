import React, { useEffect, useRef } from "react";
import "./Section6.scss";
import { useMediaQuery } from "react-responsive";

const Section6 = () => {
  const containerRef = useRef<any>(null);

  const isMobile = useMediaQuery({
    query: "(max-width: 475px)",
  });

  useEffect(() => {
    function onScroll() {
      if (window.scrollY >= 3738) {
      }
    }

    if (containerRef.current) {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, []);

  return (
    <section className="section" id="section6" ref={containerRef}>
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
