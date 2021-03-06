import React from "react";
import "./NavBar.css"
import spikyLogo from "../../assets/icons/spiky.png"
import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <div id="navbar_container">
            <div id="navbar_icon_container">
                <div>
                    <img
                        src={spikyLogo}
                        alt="logo"
                        width="150"
                        height="auto"
                    ></img>
                </div>
            </div>
            <div id="link_container">
                <div id="link_wrapper">
                    <div className="link">
                        <NavLink className="link_text" to="/">Home</NavLink>
                    </div>
                    <div className="link">
                        <NavLink className="link_text" to="/charts">Charts</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;