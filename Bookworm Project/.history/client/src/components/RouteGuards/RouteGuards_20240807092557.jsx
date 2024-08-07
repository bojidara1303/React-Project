import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import AuthContext from "../../contexts/authenticationContext";

export default function RouteGuards(e) {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        e.preventDefault()
        return <Navigate to="/login" />
    }

    return <Outlet />;
}