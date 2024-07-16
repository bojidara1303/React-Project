import { useEffect } from "react";
import { logout } from "../../services/authenticationService";

export default function Logout() {
    useEffect(() => {
        logout()
    }, [])

    return null;
}