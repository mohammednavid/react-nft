import navLogo from "../assets/images/navLogo.svg";
import "../assets/styles/Navbar.css";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { ChevronLeftSharp } from "@material-ui/icons";

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const tabStyle = {
    whiteSpace: "nowrap",
    margin: "20px 35px",
    fontFamily: "Nunito Sans",
    fontSize: "1rem",
    lineHeight: "100%",
    color: "#a9deee",
    transition: " all 0.3s linear",
    cursor: "pointer",
  };
  const buttonStyle = {
    whiteSpace: "nowrap",
    fontFamily: "Nunito Sans",
    fontSize: "1rem",
    cursor: "pointer",
    marginLeft: "35px",
    fontWeight: 800,
    lineHeight: "150%",
    color: " #123b53",
    flex: "none",
    order: 0,
    flexGrow: 0,
    margin: "0px 10px",
    padding: "0.7rem 1.2rem",
    background: "#a9deee",
    transition: "all 0.3s linear",
  };
  const containerStyle = {
    background: "#123b53",
    width: "100%",
    height: "100%",
    padding: "50px 50px 20px 0px",
    marginLeft: "-15px",
  };
  const iconStyle = {
    color: "#a9deee",
    marginLeft: "10px",
    marginTop:"-20px"
  };
  return (
    <div className="nav">
      <img src={navLogo} alt="" className="nav__logo" />
      <ul className="nav__tabs">
        <li className="nav__tab">Marketplace</li>
        <li className="nav__tab">Features</li>
        <li className="nav__tab">Activity</li>
        <li className="nav__tab">
          <button>Connect Wallet</button>
        </li>
      </ul>
      <div className="nav__mobile">
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)} style={iconStyle}>
              <MenuIcon />
            </Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              <div style={containerStyle} className="nav__tabs">
                <Button onClick={toggleDrawer(anchor, false)} style={iconStyle}>
                  <ChevronLeftSharp />
                </Button>
                <p className="nav__tab" style={tabStyle}>
                  Marketplace
                </p>
                <p className="nav__tab" style={tabStyle}>
                  Features
                </p>
                <p className="nav__tab" style={tabStyle}>
                  Activity
                </p>
                <Button className="nav__tab" style={buttonStyle}>
                  Connect Wallet
                </Button>
              </div>
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
