
export const ControlSidebar = () => {
    const controlSideBarStyles = {

        'display': 'block',


      };
  return (
    <aside className="control-sidebar control-sidebar-dark" style={controlSideBarStyles}>
    <div className="p-3 control-sidebar-content">
        <h5>Customize AdminLTE</h5>
        <hr className="mb-2"/>
        <div className="mb-4">
            <input type="checkbox" value="1" className="mr-1" readOnly/>
            <span>Dark Mode</span>
        </div>
        <h6>Header Options</h6>
        <div className="mb-1">
            <input type="checkbox" value="1" className="mr-1" readOnly/>
            <span>Fixed</span>
        </div>
        <div className="mb-1">
            <input type="checkbox" value="1" className="mr-1" readOnly/>
            <span>Dropdown Legacy Offset</span>
        </div>
        <div className="mb-4">
            <input type="checkbox" value="1" className="mr-1" readOnly/>
            <span>No border</span>
        </div>
        <h6>Sidebar Options</h6>
        <div className="mb-1">
            <input type="checkbox" value="1" className="mr-1" readOnly/>
            <span>Collapsed</span>
        </div>
        <div className="mb-1">
            <input type="checkbox" value="1" className="mr-1" readOnly/>
            <span>Fixed</span>
        </div>
        <div className="mb-1">
            <input type="checkbox" value="1" checked="checked" className="mr-1" readOnly/>
            <span>Sidebar Mini</span>
        </div>
        <div className="mb-1">
            <input type="checkbox" value="1" className="mr-1" readOnly/>
            <span>Sidebar Mini MD</span>
        </div>
        <div className="mb-1">
            <input type="checkbox" value="1" className="mr-1" readOnly/>
            <span>Sidebar Mini XS</span>
        </div>
        <div className="mb-1">
            <input type="checkbox" value="1" className="mr-1" readOnly/>
            <span>Nav Flat Style</span>
        </div>
        <div className="mb-1">
            <input type="checkbox" value="1" className="mr-1" readOnly/>
            <span>Nav Legacy Style</span>
        </div>
        <div className="mb-1">
            <input type="checkbox" value="1" className="mr-1" readOnly/>
            <span>Nav Compact</span>
        </div>
        <div className="mb-1">
            <input type="checkbox" value="1" className="mr-1" readOnly/>
            <span>Nav Child Indent</span>
        </div>
        <div className="mb-1">
            <input type="checkbox" value="1" className="mr-1" readOnly/>
            <span>Nav Child Hide on Collapse</span>
        </div>
        <div className="mb-4">
            <input type="checkbox" value="1" className="mr-1" readOnly/>
            <span>Disable Hover/Focus Auto-Expand</span>
        </div>
        <h6>Footer Options</h6>
        <div className="mb-4">
            <input type="checkbox" value="1" className="mr-1" readOnly/>
            <span>Fixed</span>
        </div>
        <h6>Small Text Options</h6>
        <div className="mb-1">
            <input type="checkbox" value="1" className="mr-1" readOnly/>
            <span>Body</span>
        </div>
        <div className="mb-1">
            <input type="checkbox" value="1" className="mr-1" readOnly/>
            <span>Navbar</span>
        </div>
        <div className="mb-1">
            <input type="checkbox" value="1" className="mr-1" readOnly/>
            <span>Brand</span>
        </div>
        <div className="mb-1">
            <input type="checkbox" value="1" className="mr-1" readOnly/>
            <span>Sidebar Nav</span>
        </div>
        <div className="mb-4">
            <input type="checkbox" value="1" className="mr-1" readOnly/>
            <span>Footer</span>
        </div>
        <h6>Navbar Variants</h6>
        <div className="d-flex">
            <select className="custom-select mb-3 text-light border-0 bg-white">
                <option className="bg-primary">Primary</option>
                <option className="bg-secondary">Secondary</option>
                <option className="bg-info">Info</option>
                <option className="bg-success">Success</option>
                <option className="bg-danger">Danger</option>
                <option className="bg-indigo">Indigo</option>
                <option className="bg-purple">Purple</option>
                <option className="bg-pink">Pink</option>
                <option className="bg-navy">Navy</option>
                <option className="bg-lightblue">Lightblue</option>
                <option className="bg-teal">Teal</option>
                <option className="bg-cyan">Cyan</option>
                <option className="bg-dark">Dark</option>
                <option className="bg-gray-dark">Gray dark</option>
                <option className="bg-gray">Gray</option>
                <option className="bg-light">Light</option>
                <option className="bg-warning">Warning</option>
                <option className="bg-white">White</option>
                <option className="bg-orange">Orange</option>
            </select>
        </div>
        <h6>Accent Color Variants</h6>
        <div className="d-flex"></div>
        <select className="custom-select mb-3 border-0">
            <option>None Selected</option>
            <option className="bg-primary">Primary</option>
            <option className="bg-warning">Warning</option>
            <option className="bg-info">Info</option>
            <option className="bg-danger">Danger</option>
            <option className="bg-success">Success</option>
            <option className="bg-indigo">Indigo</option>
            <option className="bg-lightblue">Lightblue</option>
            <option className="bg-navy">Navy</option>
            <option className="bg-purple">Purple</option>
            <option className="bg-fuchsia">Fuchsia</option>
            <option className="bg-pink">Pink</option>
            <option className="bg-maroon">Maroon</option>
            <option className="bg-orange">Orange</option>
            <option className="bg-lime">Lime</option>
            <option className="bg-teal">Teal</option>
            <option className="bg-olive">Olive</option>
        </select>
        <h6>Dark Sidebar Variants</h6>
        <div className="d-flex"></div>
        <select className="custom-select mb-3 text-light border-0 bg-primary">
            <option>None Selected</option>
            <option className="bg-primary">Primary</option>
            <option className="bg-warning">Warning</option>
            <option className="bg-info">Info</option>
            <option className="bg-danger">Danger</option>
            <option className="bg-success">Success</option>
            <option className="bg-indigo">Indigo</option>
            <option className="bg-lightblue">Lightblue</option>
            <option className="bg-navy">Navy</option>
            <option className="bg-purple">Purple</option>
            <option className="bg-fuchsia">Fuchsia</option>
            <option className="bg-pink">Pink</option>
            <option className="bg-maroon">Maroon</option>
            <option className="bg-orange">Orange</option>
            <option className="bg-lime">Lime</option>
            <option className="bg-teal">Teal</option>
            <option className="bg-olive">Olive</option>
        </select>
        <h6>Light Sidebar Variants</h6>
        <div className="d-flex"></div>
        <select className="custom-select mb-3 border-0">
            <option>None Selected</option>
            <option className="bg-primary">Primary</option>
            <option className="bg-warning">Warning</option>
            <option className="bg-info">Info</option>
            <option className="bg-danger">Danger</option>
            <option className="bg-success">Success</option>
            <option className="bg-indigo">Indigo</option>
            <option className="bg-lightblue">Lightblue</option>
            <option className="bg-navy">Navy</option>
            <option className="bg-purple">Purple</option>
            <option className="bg-fuchsia">Fuchsia</option>
            <option className="bg-pink">Pink</option>
            <option className="bg-maroon">Maroon</option>
            <option className="bg-orange">Orange</option>
            <option className="bg-lime">Lime</option>
            <option className="bg-teal">Teal</option>
            <option className="bg-olive">Olive</option>
        </select>
        <h6>Brand Logo Variants</h6>
        <div className="d-flex"></div>
            <select className="custom-select mb-3 border-0">
                <option>None Selected</option>
                <option className="bg-primary">Primary</option>
                <option className="bg-secondary">Secondary</option>
                <option className="bg-info">Info</option>
                <option className="bg-success">Success</option>
                <option className="bg-danger">Danger</option>
                <option className="bg-indigo">Indigo</option>
                <option className="bg-purple">Purple</option>
                <option className="bg-pink">Pink</option>
                <option className="bg-navy">Navy</option>
                <option className="bg-lightblue">Lightblue</option>
                <option className="bg-teal">Teal</option>
                <option className="bg-cyan">Cyan</option>
                <option className="bg-dark">Dark</option>
                <option className="bg-gray-dark">Gray dark</option>
                <option className="bg-gray">Gray</option>
                <option className="bg-light">Light</option>
                <option className="bg-warning">Warning</option>
                <option className="bg-white">White</option>
                <option className="bg-orange">Orange</option>

            </select>
        </div>
    </aside>
  )
}
