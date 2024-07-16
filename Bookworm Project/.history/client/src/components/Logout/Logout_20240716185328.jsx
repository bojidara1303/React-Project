import { useEffect } from "react";
import { logout } from "../../services/authenticationService";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        logout()
            .then(() => )
            .catch(() => navigate('/'))
    }, [])

    return null;
}