import { useEffect } from "react"
import { useSelector } from 'react-redux';

import { Header } from "./layouts/Header"
import { Sidebar } from "./layouts/Sidebar"
import { Footer } from "./layouts/Footer"
import { Outlet } from 'react-router-dom'
import { ControlSidebar } from './layouts/ControlSidebar'
import { addWindowClass, removeWindowClass } from '@app/utils/helpers';
export const Starter = () => {

    const menuSidebarCollapsed = useSelector((state) => state.ui.menuSidebarCollapsed);

    const screenSize = useSelector((state) => state.ui.screenSize);

    useEffect(() => {

        if (menuSidebarCollapsed && screenSize === 'lg') {
            addWindowClass('sidebar-mini');
            addWindowClass('sidebar-collapse');


        } else {
            removeWindowClass('sidebar-mini');
            removeWindowClass('sidebar-collapse');
        }

      }, [screenSize, menuSidebarCollapsed]);
  return (


    <div className="wrapper">
        <Header/>
        <Sidebar/>
        <div className="content-wrapper">

            <div className="content">
                <Outlet />
            </div>
        </div>


       <ControlSidebar/>

        <Footer/>

    </div>

  )
}
