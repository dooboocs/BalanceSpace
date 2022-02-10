import React from "react";
import "./MobileHeader.scss";
import { Link } from "react-router-dom";

const MobileHeader = () => {
  const headerRef = React.useRef<any>(null);
  const [collapse, setCollapse] = React.useState(true);

  const toggleCollapse = () => {
    setCollapse(!collapse);
  };

  React.useEffect(() => {
    function onScroll() {
      if (headerRef.current) {
        if (window.scrollY === 0) {
          headerRef.current.style.position = "fixed";
        } else {
          setCollapse(true);
          headerRef.current.style.position = "static";
          headerRef.current.style.marginBottom = "-70px";
        }
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`mobile-header ${collapse ? "collapse" : "expand"}`}
      >
        <div className="gnb">
          <Link to="/">
            <img
              className="logo"
              src={require("../../../static/logo@2x.png")}
              alt="Balance Space"
            />
          </Link>
          <button onClick={toggleCollapse} className="menu-toggle">
            <div className="toggle-icon">
              <span />
              <span />
            </div>
          </button>
        </div>
        <nav className="mobile-nav">
          <ul>
            <a href="#">
              <li>제공 서비스</li>
            </a>
            <a href="#">
              <li>베네핏 서비스</li>
            </a>
            <a href="#section8">
              <li>비용 안내</li>
            </a>
            <a href="#">
              <li>이용 방법</li>
            </a>
            <a href="#">
              <li>결합 서비스</li>
            </a>
          </ul>
          <ul>
            <Link to="/location">
              <li>
                <img src={require("../../../static/location.png")} />
                위치 안내
              </li>
            </Link>
          </ul>
          <ul>
            <Link to="/consult">
              <li>
                <img src={require("../../../static/messages.png")} />
                빠른 상담하기
              </li>
            </Link>
          </ul>
        </nav>
      </header>
      <div className={`mobile-header-overlay ${collapse ? "" : "visible"}`} />
    </>
  );
};

export default MobileHeader;
