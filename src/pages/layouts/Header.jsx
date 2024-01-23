import { useState, useCallback } from "react"
import {useDispatch, useSelector} from 'react-redux';
import {toggleControlSidebar, toggleSidebarMenu} from '@app/store/reducers/ui';
import { MessagesDropdown } from "@pages/layouts/header/MessagesDropdown"
import { NotificationDropdown } from "@pages/layouts/header/NotificationDropdown"

export const Header = () => {


    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const handleToggleSearch = () => {
        console.log('rr');
        setIsSearchOpen(!isSearchOpen);
      };


      const dispatch = useDispatch();
      const navbarVariant = useSelector((state) => state.ui.navbarVariant);
      const headerBorder = useSelector((state) => state.ui.headerBorder);

      const handleToggleMenuSidebar = () => {
        console.log('header is calling');
        dispatch(toggleSidebarMenu());
      };

      const handleToggleControlSidebar = () => {
        dispatch(toggleControlSidebar());
      };

      const getContainerClasses = useCallback(() => {
        let classes = `main-header navbar navbar-expand ${navbarVariant}`;
        if (headerBorder) {
          classes = `${classes} border-bottom-0`;
        }
        return classes;
      }, [navbarVariant, headerBorder]);

  return (
    <nav className={getContainerClasses()}>
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" data-widget="pushmenu" href="#" role="button" onClick={handleToggleMenuSidebar}><i className="fas fa-bars"></i></a>
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


