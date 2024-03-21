import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login,logout } from './authActions'

import AdminLogin from "./AdminLogIn";
import Dashboard from "./AdminDashBoard";

const AdminPanel =()=>{
    const isAdminLoggedIn = useSelector(state => state.auth.isAdminLoggedIn);
    const dispatch = useDispatch();

    const handleLogin = async (username,password) => {
        try {
            await login(username,password);
            dispatch(login());
        }
        catch(error){
            console.error('Login failed:', error);
        }
    };

    const handleLogout = () => {
        logout();
        dispatch(logout());
    };

    return(
        <div>
            {isAdminLoggedIn ? (
                <Dashboard handleLogout={handleLogout}/>
            ): (
                <AdminLogin handleLogin={handleLogin}/>
            )}
        </div>
    );
};

export default AdminPanel;