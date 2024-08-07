import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import AuthenticationContext from "../../contexts/authenticationContext";

export default function RouteGuards() {
    const { isAuthenticated } = useContext(AuthenticationContext);

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    return <Outlet />;
}