import React from "react";
import "./FloatButton.scss";
import { Link } from "react-router-dom";

const FloatButton = () => {
  const [visible, setVisible] = React.useState(false);
  const buttonRef = React.useRef<any>(null);

  React.useEffect(() => {
    function isVisible() {
      if (window.scrollY > 80) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }

    window.addEventListener("scroll", isVisible);
    return () => window.removeEventListener("scroll", isVisible);
  }, []);

  return (
    <div className={`float-button-container ${visible ? "visible" : ""}`}>
      <div className="float-button-wrapper">
        <p>서울 역세권 건물주소로 비즈니스의 신뢰도를 높여보세요.</p>
        <Link to="/consult">
          <button className="float-button" ref={buttonRef}>
            빠른 상담하기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FloatButton;
