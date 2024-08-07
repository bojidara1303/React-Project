import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { login, register } from "../services/authenticationService";

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const navigate = useNavigate()
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken')

        return {}
    });

    const loginSubmitHandler = async (values) => {
        const result = await login(values.email, values.password);

        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken)
        navigate('/')
    }

    const registerSubmitHandler = async (values) => {
        const result = await register(values.username, values.email, values.password);

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
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;