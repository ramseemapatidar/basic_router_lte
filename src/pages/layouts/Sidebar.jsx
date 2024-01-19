import { useState } from 'react'
import {Link,NavLink, useLocation} from 'react-router-dom';

export const Sidebar = () => {
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);

    const location = useLocation();

    const isStarterPagesActive = location.pathname === '/' || location.pathname === '/active' || location.pathname === '/inactive';

    const handleSubMenuToggle = () => {
        setSubMenuOpen(!isSubMenuOpen);
    };

    const handleSubMenuLinkClick = () => {
        // Close the submenu only when clicking on the submenu link
        setSubMenuOpen(false);
    };
    const submenuStyles = {

        cursor: 'pointer',


      };
  return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">

            <Link to="/" className="brand-link">
            <img src="https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"/>
            <span className="brand-text font-weight-light">AdminLTE 3</span>
            </Link>

            <div className="sidebar">

                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="https://adminlte.io/themes/v3/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"/>
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Alexander Pierce</a>
                    </div>
                </div>
                <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                                <i className="fas fa-search fa-fw"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false" style={submenuStyles}>
                        <li className={`nav-item ${isSubMenuOpen ? 'menu-open' : ''} `}>

                            <a className={`nav-link ${isStarterPagesActive ? 'active' : ''}`} onClick={handleSubMenuToggle} >
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>Starter Pages
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to="/active" className="nav-link" activeclassname="active">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Active</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/inactive" className="nav-link" activeclassname="active">
                                        <i className="far fa-circle nav-icon"></i>
                                         <p>Inactive</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/sample" className="nav-link" activeclassname="active" onClick={handleSubMenuLinkClick}>
                                <i className="nav-icon fas fa-th"></i>
                                <p>Simple Link</p>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
  )
}
