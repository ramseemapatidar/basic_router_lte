import {Link} from 'react-router-dom';

export const Sidebar = () => {
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
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item menu-open">
                            <Link to="" className="nav-link active">
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>Starter Pages
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to="/active" className="nav-link active">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Active</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/inactive" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                         <p>Inactive</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/sample" className="nav-link">
                                <i className="nav-icon fas fa-th"></i>
                                <p>Simple Link</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
  )
}
