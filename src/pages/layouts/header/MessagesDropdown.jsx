import { useState, useRef, useEffect } from 'react';

export const MessagesDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Click is outside the dropdown, close it
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <li ref={dropdownRef} className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}>
      <a
        className="nav-link"
        href="#"
        onClick={handleToggleDropdown}
        role="button"
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
      >
        <i className="far fa-comments"></i>
        <span className="badge badge-danger navbar-badge">3</span>
      </a>
      <div className={`dropdown-menu dropdown-menu-lg dropdown-menu-right ${isDropdownOpen ? 'show' : ''}`}>
            <a href="#" className="dropdown-item">

                <div className="media">
                    <img src="https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle"/>
                    <div className="media-body">
                        <h3 className="dropdown-item-title">
                            Brad Diesel
                            <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                        </h3>
                        <p className="text-sm">Call me whenever you can...</p>
                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                    </div>
                </div>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">

                <div className="media">
                    <img src="https://adminlte.io/themes/v3/dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                    <div className="media-body">
                        <h3 className="dropdown-item-title">
                            John Pierce
                            <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                        </h3>
                        <p className="text-sm">I got your message bro</p>
                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                    </div>
                </div>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">

                <div className="media">
                    <img src="https://adminlte.io/themes/v3/dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                    <div className="media-body">
                        <h3 className="dropdown-item-title">
                            Nora Silvester
                            <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                        </h3>
                        <p className="text-sm">The subject goes here</p>
                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                    </div>
                </div>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
        </div>
    </li>
  );
};
