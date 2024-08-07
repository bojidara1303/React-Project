import { createContext, useState } from "react";
import * as authService from "../services/authenticationService";
import { useNavigate } from "react-router-dom";
// import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const navigate = useNavigate()
    const [auth, setAuth] = useState();

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken)
        navigate('/')
    }

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.username, values.email, values.password);

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


