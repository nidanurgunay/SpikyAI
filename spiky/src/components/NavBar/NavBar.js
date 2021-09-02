import React from "react";
import "./NavBar.css"
import spikyLogo from "../../assets/icons/spiky.png"
import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <div id="navbar_container">
            <div>
                <img
                    src={spikyLogo}
                    alt="logo"
                    width="150"
                    height="auto"
                ></img>
            </div>
            <div id="link_container">
                <div className="link">
                    <NavLink  className="link_text" to="/">Home</NavLink>
                </div>
                <div className="link">
                    <NavLink  className="link_text" to="/charts">Charts</NavLink>
                </div>
            </div>
        </div>
    );
};

export default NavBar;