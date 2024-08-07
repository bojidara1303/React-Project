import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { logout } from '../../services/authenticationService';
import AuthenticationContext from "../../contexts/authenticationContext";

export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthenticationContext)

    useEffect(() => {
        logout()
            .then(() => {
                logoutHandler();
                navigate('/')
            })
            .catch(() => {
                logoutHandler();
                navigate('/');
            })

    }, []);

    return null
}