const BASE_URL = 'http://localhost:3030/jsonstrore'

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
}