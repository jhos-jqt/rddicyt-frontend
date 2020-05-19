import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

//TODO: corregir los href de las eqtiquetas a

const Navbar = () => {
    const [isActive, setisActive] = useState(false);

    return (
        <header>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <NavLink exact to="/" className="navbar-item">
                        <h1>LOGO</h1>
                    </NavLink>
                    <a onClick={() => { setisActive(!isActive) }} role="button" className={`navbar-burger burger ${isActive ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                    <div className="navbar-start">
                        <a className="navbar-item">
                            Documentation
                        </a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-item">
                                More
                            </a>
                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    About
                                </a>
                                <a className="navbar-item">
                                    Jobs
                                </a>
                                <a className="navbar-item">
                                    Contact
                                </a>
                                <hr className="navbar-divider"/>
                                <a className="navbar-item">
                                    Report
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Sing up</strong>
                                </a>
                                <NavLink to="login" className="button is-light">
                                    Log in
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar