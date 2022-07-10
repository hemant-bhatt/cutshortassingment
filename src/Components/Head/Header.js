import React from "react";
import "./header.css";
import icon from "./icon.png";

function Header() {
    return (
        <div id="head">
            <div id="insta">
                <img src={icon} id="icon" alt=''></img>
                <text>Eden</text>
            </div>
        </div>
    );
}

export default Header;