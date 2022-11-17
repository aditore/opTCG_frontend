import React from "react";
import { Link } from "react-router-dom";

function Select() {
    return (
        <ul>
            <li>
                <Link to="/allCard">
                    ALL CARDS
                </Link>
            </li>
            <li>
                <Link to="/myCard">
                    MY CARDS
                </Link>
            </li>
        </ul>
    )
}

export default Select;