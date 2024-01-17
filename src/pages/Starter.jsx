import { Header } from "./layouts/Header";
import { Sidebar } from "./layouts/Sidebar";
import { Footer } from "./layouts/Footer";
import { Outlet } from 'react-router-dom'
export const Starter = () => {
  return (

   <>
    <div className="wrapper">
        <Header/>
        <Sidebar/>

        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Starter Page</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Starter Page</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
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
