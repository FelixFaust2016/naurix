import { useState } from "react";
import { Link } from "react-scroll";

import { Button, Logo } from "../../atoms";
import "./style.css";

const Navigation = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <>
      <nav className="landing_navigation">
        <img
          onClick={() => setToggleSidebar(true)}
          className="menu_bar"
          src={"/assets/menu.svg"}
          alt={""}
        />
        <Logo />
        <div className="spacer" />
        <p>
          <Link to="about" smooth={true} duration={500}>
            Our Story
          </Link>
        </p>
        <p>
          {" "}
          <Link to="services" smooth={true} duration={500}>
            Services
          </Link>
        </p>
        <Button label={"Work with us"} width={"174px"} />
      </nav>
      <div
        style={{
          left: toggleSidebar ? "0" : "-100%",
          opacity: toggleSidebar ? "1" : "0",
        }}
        className="responsive_landing_navigation"
      >
        <img
          onClick={() => setToggleSidebar(false)}
          src={"/assets/close.svg"}
          alt={""}
        />
        <p>
          <Link to="about" smooth={true} duration={500}>
            Our Story
          </Link>
        </p>
        <p>
          <Link to="services" smooth={true} duration={500}>
            Services
          </Link>
        </p>
      </div>
    </>
  );
};

export { Navigation };
