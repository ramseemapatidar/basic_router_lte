// import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {

  toggleDarkMode,

} from '@store/reducers/ui';
// import {
//   NAVBAR_DARK_VARIANTS,
//   NAVBAR_LIGHT_VARIANTS,
//   SIDEBAR_DARK_SKINS,
//   SIDEBAR_LIGHT_SKINS
// } from '@app/utils/themes';


export const ControlSidebar = () => {
    const dispatch = useDispatch();
    const handleDarkModeChange = () => {
        dispatch(toggleDarkMode());
      };
    const controlSideBarStyles = {

        'top': '0px',
        'bottom': '57px',
        'padding': '73px 16px 16px',
        // 'overflow-y': 'scroll',
    };
  return (

    <aside className="control-sidebar control-sidebar-dark" style={controlSideBarStyles}>
        <div className="p-3 control-sidebar-content">
            <h5>Customize AdminLTE</h5>
            <hr className="mb-2"/>
            <div className="mb-4">
                <input type="checkbox" value="1" className="mr-1" onChange={handleDarkModeChange}/>
                <span>Dark Mode</span>
            </div>
        </div>
    </aside>
  )
}
