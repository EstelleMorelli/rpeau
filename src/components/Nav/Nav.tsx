import './Nav.scss';
import logo from '../../../public/images/logo_rpeau.png';
import { Menu, X } from 'react-feather'; // Importez une icône de fermeture si nécessaire
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Nav() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className="Nav--mobile">
                <img className="Nav--logo" src={logo} alt="Logo" />
                <Menu className="Nav--menu" size={40} onClick={toggleSidebar} />
            </div>
            <div className={`Nav--sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="Nav--sidebar-header">
                    <X className="Nav--close" size={50} onClick={toggleSidebar} />
                </div>
                <nav className="Nav--sidebar-links">
                    <div className='Nav--sidebar-links__cat1'>
                    <NavLink
                        className="Nav--item__mobile"
                        to="/"
                        onClick={toggleSidebar}
                    >
                        Accueil
                    </NavLink>
                    <NavLink
                        className="Nav--item__mobile"
                        to="/apropos"
                        onClick={toggleSidebar}
                    >
                        A propos
                    </NavLink>
                    <NavLink
                        className="Nav--item__mobile"
                        to="/services"
                        onClick={toggleSidebar}
                    >
                        Les services
                    </NavLink>
                    <NavLink
                        className="Nav--item__mobile"
                        to="/projets"
                        onClick={toggleSidebar}
                    >
                        Les projets
                    </NavLink>
                    <NavLink
                        className="Nav--item__mobile"
                        to="/contact"
                        onClick={toggleSidebar}
                    >
                        Contact
                    </NavLink>
                    </div>
                    <div className='Nav--sidebar-links__cat2'>
                    <NavLink
                        className="Nav--item__mobile"
                        to="/mentions-legales"
                        onClick={toggleSidebar}
                    >
                        Mentions légales
                    </NavLink>
                    <NavLink
                        className="Nav--item__mobile"
                        to="/connexion"
                        onClick={toggleSidebar}
                    >
                        Espace administrateur
                    </NavLink>
                    </div>
                </nav>
            </div>
            <div className="Nav--desktop">
                <div className='Nav--logoandtitle'>
                    <img className="Nav--logo" src={logo} alt="Logo" />
                </div>
                <nav>
                    <NavLink
                        className="Nav--item"
                        to="/"
                    >
                        Accueil
                    </NavLink>
                    <NavLink
                        className="Nav--item"
                        to="/apropos"
                    >
                        A propos
                    </NavLink>
                    <NavLink
                        className="Nav--item"
                        to="/services"
                    >
                        Les services
                    </NavLink>
                    <NavLink
                        className="Nav--item"
                        to="/projets"
                    >
                        Les projets
                    </NavLink>
                    <NavLink
                        className="Nav--item"
                        to="/contact"
                    >
                        Contact
                    </NavLink>
                </nav>
            </div>
        </>
    );
}

export default Nav;