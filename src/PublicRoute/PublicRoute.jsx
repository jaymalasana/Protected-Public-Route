import {Outlet, Navigate} from 'react-router-dom';
import { userAuth } from '../Userauth/UseAuth';

function PublicRoute () {
    const token = userAuth()
    return token ? <Navigate to='/' /> : <Outlet />
}

export default PublicRoute;