import React from "react";
import { Link } from "react-router-dom";

function Select() {
    return (
        <div className="sideNavWrapper">
            <div className="sideNavBar">
        <ul className="sideNavUl">
            <li className="sideNavLi">
                <Link to="/allCard">
                    ALL CARDS
                </Link>
            </li>
            <li className="sideNavLi">
                <Link to="/myCard">
                    MY CARDS
                </Link>
            </li>
        </ul>
            </div>
        </div>
    )
}

export default Select;