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
};

export const usernameValidator = () => {
    if (values.username === '') {
        setUsernameError('Username is required!')
    } else {
        setUsernameError('')
    }
};

export const confirmPasswordValidator = () => {
    if (values["confirm-password"] !== values.password) {
        setConfirmPasswordError('Passwords do not match!')
    } else {
        setConfirmPasswordError('')
    }
};

export const urlValidator = () => {
    if (values.imageUrl === '') {
        setUrlError('Image URL is required!')
    } else {
        setUrlError('')
    }
};

export const quoteValidator = () => {
    if (values.quote === '') {
        setQuoteError('Quote is required!')
    } else {
        setQuoteError('')
    }
};

export  const authorValidator = () => {
    if (values.author === '') {
        setAuthorError('Name is required!')
    } else {
        setAuthorError('')
    }
};