import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { login, register } from "../services/authenticationService";

const AuthenticationContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const navigate = useNavigate()
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken')

        return {}
    });

    const loginSubmitHandler = async (email, password) => {
        const result = await login(email, password);

        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken)
        navigate('/')
    }

    const registerSubmitHandler = async (username, email, password) => {
        const result = await register(username, email, password);

        setAuth(result)
        localStorage.setItem('accessToken', result.accessToken)
        navigate('/')
    }

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken')
        navigate('/')
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username,
        email: auth.email,
        userId: auth._id,
        isAuth: !!auth.accessToken
    }

    return (
        <AuthenticationContext.Provider value={values}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationContext;