import React from "react";
import { Link } from "react-router-dom";

function AllCard() {
    return (
        <ul>
            <li>
                <Link to="/">
                    HOME
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

export default AllCard;