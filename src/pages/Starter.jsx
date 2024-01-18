import { Header } from "./layouts/Header"
import { Sidebar } from "./layouts/Sidebar"
import { Footer } from "./layouts/Footer"
import { Outlet } from 'react-router-dom'

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


        <aside className="control-sidebar control-sidebar-dark">

            <div className="p-3">
                <h5>Title</h5>
                <p>Sidebar content</p>
            </div>
        </aside>

        <Footer/>

    </div>
    </>
  )
}
