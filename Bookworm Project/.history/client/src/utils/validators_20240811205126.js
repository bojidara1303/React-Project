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

export  const nameValidator = () => {
    if (values.author === '') {
        setAuthorError('Name is required!')
    } else {
        setAuthorError('')
    }
};

export const coverValidator = () => {
    if (values.cover === '') {
        setCoverError('Cover image URL is required!')
    } else {
        setCoverError('')
    }
};

export const titleValidator = () => {
    if (values.title === '') {
        setTitleError('Title is required!')
    } else {
        setTitleError('')
    }
};

export const authorValidator = () => {
    if (values.author === '') {
        setAuthorError('Author is required!')
    } else {
        setAuthorError('')
    }
};

export const genreValidator = () => {
    if (values.genre === '') {
        setGenreError('Genre is required!')
    } else {
        setGenreError('')
    }
};

export const yearValidator = () => {
    if (values.year === '') {
        setYearError('Year is required!')
    } else if (values.year < 1990 || values.year > 2024) {
        setYearError('Year must be between 1900 and 2024!')
    } else {
        setYearError('')
    }
};

export const pagesValidator = () => {
    if (values.pages === '') {
        setPagesError('Pages is required!')
    } else if (values.pages < 0) {
        setPagesError('Pages must be a positive number!')
    } else {
        setPagesError('')
    }
};

export const publisherValidator = () => {
    if (values.publisher === '') {
        setPublisherError('Publisher is required!')
    } else {
        setPublisherError('')
    }
};

export const summaryValidator = () => {
    if (values.summary === '') {
        setSummaryError('Summary is required!')
    } else {
        setSummaryError('')
    }
};