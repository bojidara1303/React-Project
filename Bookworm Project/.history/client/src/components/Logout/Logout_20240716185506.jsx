import { useContext, useEffect } from "react";
import { logout } from "../../services/authenticationService";
import { useNavigate } from "react-router-dom";
import AuthenticationContext from "../../contexts/authenticationContext";

export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthenticationContext)

    useEffect(() => {
        logout()
            .then(() => logoutHandler())
            .catch(() => navigate('/'))
    }, [])

    return null;
}