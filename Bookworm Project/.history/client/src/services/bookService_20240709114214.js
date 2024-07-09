const BASE_URL = 'http://localhost:3030/jsonstrore'

export const createBook = async (bookData) => {
    const respose = await fetch(`${BASE_URL}/books`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(bookData)
    });

    const result = await respose.json();
    return result;
}