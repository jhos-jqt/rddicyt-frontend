import React from 'react';

const Navbar = () => {
    const [isActive, setisActive] = React.useState(false);
    return (
    <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">LOGO</a>
                <a href onClick={() => {setisActive(!isActive)}} role="button" className={`navbar-burger burger ${isActive ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                <div className="navbar-start">
                    <a href className="navbar-item">Home</a>
                    <a href className="navbar-item">Documentation</a>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a href className="navbar-item">MOre</a>
                        <div className="navbar-dropdown">
                            <a href className="navbar-item">About</a>
                            <a href className="navbar-item">Jobs</a>
                            <a href className="navbar-item">Contact</a>
                            <hr className="navbar-divider"/>
                            <a href className="navbar-item">Report an issue</a>
                        </div>
                    </div>
                </div>
                <div className="navabar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a href className="button is-primary"><strong>Sing up</strong></a>
                            <a href className="button is-light"><strong>Long in</strong></a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    )
}

export default Navbar