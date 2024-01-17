import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './routes/PrivateRoute'
import { PublicRoute } from './routes/PublicRoute'
import { Starter } from './pages/Starter'
import {Active } from './pages/Active'
import {Inactive } from './pages/Inactive'
function App() {


  return (

    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<PublicRoute />}/>
        <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Starter />}>
                <Route path="/" element={<Inactive />} />
                <Route path="/active" element={<Active />}/>
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
