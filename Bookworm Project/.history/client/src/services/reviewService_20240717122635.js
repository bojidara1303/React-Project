const BASE_URL = 'http://localhost:3030/jsonstore/reviews';


export const createReview = async (bookId, username, review) => {
    const response = await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ bookId, username, review })
    });

    const result = await response.json();
    return result;
}

export const getAllReviews = async (bookId) => {
    const query = encodeURIComponent(`bookId="${bookId}"`)

    const response = await fetch(`${BASE_URL}?where=${query}`, {
        method: 'GET'
    });

    const result = await response.json();
    return Object.values(result).filter(review => review.bookId === bookId);
}