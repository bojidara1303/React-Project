const BASE_URL = 'http://localhost:3030/data'

export const createBook = async (bookData) => {
    const response = await fetch(`${BASE_URL}/books`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(bookData)
    });

    const result = await response.json();
    return result;
};

export const getAllBooks = async () => {
    const response = await fetch(`${BASE_URL}/books`, {
        method: 'GET'
    });

    const result = await response.json();
    return Object.values(result);
};

export const getOneBook = async (bookId) => {
    const response = await fetch(`${BASE_URL}/books/${bookId}`, {
        method: 'GET'
    });

    const result = await response.json();
    return result;
}

