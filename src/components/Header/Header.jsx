import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'; // Importing the CSS file

export default function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img
                            src="data:image/png;base64,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"
                            className="logo"
                            alt="Logo"
                        />
                    </Link>
                    <div className="navbar-right">
                        <Link to="#" className="login-button">Log in</Link>
                        <Link to="#" className="get-started-button">Get started</Link>
                    </div>
                    <div className="navbar-menu" id="mobile-menu-2">
                        <ul className="navbar-list">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
