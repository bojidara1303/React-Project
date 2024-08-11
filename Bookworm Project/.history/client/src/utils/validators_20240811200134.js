export const emailValidator = () => {
    if (values.email === '') {
        setEmailError('Email is required!')
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(values.email)) {
        setEmailError('Incorrect email format!')
    } else {
        setEmailError('')
    }
};


export const passwordValidator = () => {
    if (values.password === '') {
        setPasswordError('Password is required!')
    } else if (values.password.length < 6) {
        setPasswordError('Password must have a minimum 6 characters')
    } else {
        setPasswordError('')
    }
}