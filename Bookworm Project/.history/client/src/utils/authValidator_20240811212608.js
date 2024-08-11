const { values } = useForm({
    email: '',
    password: '',
    username: '',
    "confirm-password": ''
});

export const emailValidator = () => {
    if (values.email === '') {
        return('Email is required!')
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(values.email)) {
        return('Incorrect email format!')
    } else {
        return('')
    }
};


export const passwordValidator = () => {
    if (values.password === '') {
        return('Password is required!')
    } else if (password.length < 6) {
        return('Password must have a minimum 6 characters')
    } else {
        return('')
    }
};

export const usernameValidator = () => {
    if (values.username === '') {
        return('Username is required!')
    } else {
        return('')
    }
};

export const confirmPasswordValidator = () => {
    if (values["confirm-password"] !== password) {
        return('Passwords do not match!')
    } else {
        return('')
    }
};



