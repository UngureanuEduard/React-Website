import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react'; 

const Nav = ({ updatePage, updateId } ) => {
    const [activeLink, setActiveLink] = useState(""); 

    const handleUsersLinkClick = () => {
        updatePage("/");
        updateId(null);
        setActiveLink("users");
    };

    const handleAdminLinkClick = () => {
        updatePage("/admin");
        updateId(null);
        setActiveLink("admin");
    };

    return (
        <nav>
            <NavLink
                to="/"
                className={`navLink ${activeLink === "users" ? "active" : ""}`}
                onClick={handleUsersLinkClick}
            >
                Users
            </NavLink>
            <NavLink
                to="/admin"
                className={`navLink ${activeLink === "admin" ? "active" : ""}`}
                onClick={handleAdminLinkClick}
            >
                Admin
            </NavLink>
        </nav>
    );
};

Nav.propTypes = {
    updatePage: PropTypes.func.isRequired,
    updateId: PropTypes.func.isRequired,
};

export default Nav;
