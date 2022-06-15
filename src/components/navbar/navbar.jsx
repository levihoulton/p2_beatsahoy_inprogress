import React from "react";
//import { render } from "@testing-library/react";
import { Link } from "react-router-dom";

export default function NavBar() {

  //  const navigate = useNavigate();
    return (
        <nav>
            <Link to="/">
                <button>Home Page</button>
            </Link>
            <span> </span>
            <Link to="/login">
                <button>Login</button>
            </Link>
            <span> </span>
            <Link to="/register">
                <button>Sign up</button>
            </Link>
            <Link to="/about">
                <button>about</button>
            </Link>
            <span> </span>
            <Link to="/questions">
                <button>questions</button>
            </Link>
        </nav>
 
    );
}
