import { useState } from "react";
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
        <p>Our Story</p>
        <p>Services</p>
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
        <p>Our Story</p>
        <p>Services</p>
      </div>
    </>
  );
};

export { Navigation };
