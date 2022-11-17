import React from "react";
import { Link } from "react-router-dom";

function MyCard() {
    return (
        <ul>
            <li>
                <Link to="/myCard">
                    HOME
                </Link>
            </li>
            <li>
                <Link to="/allCard">
                    ALL CARDS
                </Link>
            </li>
        </ul>

    )
}

export default MyCard;