import { useState } from "react"
import { MessagesDropdown } from "@pages/layouts/header/MessagesDropdown"
import { NotificationDropdown } from "@pages/layouts/header/NotificationDropdown"

export const Header = () => {

    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isControlSidebarCollapsed, setControlSidebarCollapsed] = useState(false);
    const handleToggleSidebar = () => {
        console.log('123')
        document.body.classList.toggle('sidebar-mini', isSidebarCollapsed);
        document.body.classList.toggle('layout-fixed', isSidebarCollapsed);
        document.body.classList.toggle('sidebar-collapse', isSidebarCollapsed);

        setSidebarCollapsed(!isSidebarCollapsed);

    };
    const handleToggleControlSidebar = () => {
        console.log('123')
        document.body.classList.toggle('sidebar-mini', isControlSidebarCollapsed);
        document.body.classList.toggle('control-sidebar-slide-open', isControlSidebarCollapsed);

        setControlSidebarCollapsed(!isControlSidebarCollapsed);

    };
    const handleToggleSearch = () => {
        console.log('rr');
        setIsSearchOpen(!isSearchOpen);
      };
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" data-widget="pushmenu" href="#" role="button" onClick={handleToggleSidebar}><i className="fas fa-bars"></i></a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
                <a href="index3.html" className="nav-link">Home</a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
                <a href="#" className="nav-link">Contact</a>
            </li>
        </ul>

        <ul className="navbar-nav ml-auto">

            <li className="nav-item">
                <a className="nav-link" data-widget="navbar-search" href="#" role="button" onClick={handleToggleSearch}>
                    <i className="fas fa-search"></i>
                </a>
                <div className={`navbar-search-block ${isSearchOpen ? 'navbar-search-open' : ''}`}>
                    <form className="form-inline">
                        <div className="input-group input-group-sm">
                            <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
                            <div className="input-group-append">
                                <button className="btn btn-navbar" type="submit">
                                <i className="fas fa-search"></i>
                                </button>
                                <button className="btn btn-navbar" type="button" data-widget="navbar-search" onClick={handleToggleSearch}>
                                <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </li>
            <MessagesDropdown/>
            <NotificationDropdown/>




            <li className="nav-item">
                <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button" onClick={handleToggleControlSidebar}>
                    <i className="fas fa-th-large"></i>
                </a>
            </li>
        </ul>
    </nav>

  )
}


