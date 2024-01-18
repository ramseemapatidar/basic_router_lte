import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './routes/PrivateRoute'
import { PublicRoute } from './routes/PublicRoute'
import { Starter } from './pages/Starter'
import {Active } from './pages/Active'
import {Inactive } from './pages/Inactive'
import {Login } from './pages/auth/Login'
function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PublicRoute />}>
            <Route path="/login" element={<Login />}/>
        </Route>
        <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Starter />}>
                <Route path="/active" element={<Active />}/>
                <Route path="/inactive" element={<Inactive />}/>
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
