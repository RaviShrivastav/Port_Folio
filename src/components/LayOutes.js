import React, { useState } from "react";
import Home from "../pages/Home";

import "./Layout.css";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx"; // /rx start ke words likhna padate hai
import Menu from "./menus/Menu";

const LayOutes = () => {
  const [toggle, setToggle] = useState(true);

  // controll toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar " : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (
                <RxDoubleArrowLeft size={30} />
              ) : (
                <RxDoubleArrowRight size={30} />
              )}
            </p>
          </div>
          <Menu toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default LayOutes;
