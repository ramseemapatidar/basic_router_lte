import { useState, useRef, useEffect } from 'react';
export const NotificationDropdown = () => {
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
        <a className="nav-link" data-toggle="dropdown" href="#" onClick={handleToggleDropdown}
        role="button"
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}>
            <i className="far fa-bell"></i>
            <span className="badge badge-warning navbar-badge">15</span>
        </a>
        <div className = {`dropdown-menu dropdown-menu-lg dropdown-menu-right ${isDropdownOpen ? 'show' : ''}`}>
            <span className="dropdown-header">15 Notifications</span>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
                <i className="fas fa-envelope mr-2"></i> 4 new messages
                <span className="float-right text-muted text-sm">3 mins</span>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
                <i className="fas fa-users mr-2"></i> 8 friend requests
                <span className="float-right text-muted text-sm">12 hours</span>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
                <i className="fas fa-file mr-2"></i> 3 new reports
                <span className="float-right text-muted text-sm">2 days</span>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
        </div>
    </li>
  )
}
