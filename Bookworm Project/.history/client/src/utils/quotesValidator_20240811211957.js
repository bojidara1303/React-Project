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