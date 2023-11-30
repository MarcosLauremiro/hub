import { Route, Routes } from 'react-router-dom'
import { Login } from '../Pages/Login'
import { Register } from '../Pages/Register'
import { Dash } from '../Pages/Dashboard'
import { Techs } from '../Components/Techs'
import { ProtectedRoutes } from './ProtectedRoutes'
import { PublicRoutes } from './PublicRoutes'

export const RoutesMain = () => {
    return(
        <Routes>
            <Route element={<PublicRoutes />}>
                <Route path='/' element={ <Login/>} />
                <Route path='/register' element={ <Register />} />    
            </Route>

            <Route element={<ProtectedRoutes/>}>
                <Route path='/dashboard' element={ <Dash />}/>
            </Route>
        </Routes>
    )
}