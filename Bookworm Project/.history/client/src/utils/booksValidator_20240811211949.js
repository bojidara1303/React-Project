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