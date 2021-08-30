import React from "react";
import "./NavBar.css"
import spikyLogo from "../../assets/icons/spiky.png"

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
            <div>

            </div>
        </div>
    );
};

export default NavBar;