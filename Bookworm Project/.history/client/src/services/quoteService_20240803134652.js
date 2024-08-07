const BASE_URL = 'http://localhost:3030/data/quotes';

export const createQuote = async (quoteData) => {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(quoteData)
    });
    const result = await response.json();
    return result;
};

export const getAllQuotes = async () => {
    const response = await fetch(BASE_URL, {
        method: 'GET'
    });

    const result = await response.json();
    return Object.values(result);
};

export const getOneQuote = async (quoteId) => {
    const response = await fetch(`${BASE_URL}/${quoteId}`, {
        method: 'GET'
    });

    const result = await response.json();
    return result;
};

export const deleteQuote = async (quoteId) => {
    const response = await fetch(`${BASE_URL}/${quoteId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
};