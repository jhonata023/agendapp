import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
    const login = localStorage.getItem('token');

    if (!login) return <Navigate to="/auth/login" replace />

    return <Outlet/>
}