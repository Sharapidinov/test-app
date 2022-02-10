import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header-bg">
            <div className="container">
                <div className="d-flex p-4 justify-content-between text-center align-items-center ">
                    <Link to={"/"} className="title text-decoration-none fw-bold text-black-50 fs-3">Tests</Link>
                    <div className="d-flex text-center">
                        <Link to={"/add-test"} className="text-black-50 text-decoration-none me-3">Add new test</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;