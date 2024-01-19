import { Header } from "./layouts/Header"
import { Sidebar } from "./layouts/Sidebar"
import { Footer } from "./layouts/Footer"
import { Outlet } from 'react-router-dom'
import { ControlSidebar } from './layouts/ControlSidebar'
export const Starter = () => {
  return (

   <>
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
    </>
  )
}
