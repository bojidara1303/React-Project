import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import AuthenticationContext from "../../contexts/authenticationContext";

export default function RouteGuards() {
    const { isAuth } = useContext(AuthenticationContext);

    if (!isAuth) {
        return <Navigate to="/login" />
    }

    return <Outlet />;
}