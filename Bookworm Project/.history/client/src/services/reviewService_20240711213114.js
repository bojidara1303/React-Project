const BASE_URL = 'http://localhost:3030/jsonstore/reviews';


export const createReview = async (reviewId, username, review) => {
    const response = await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ reviewId, username, review})
    });

    const result = await response.json();
    return result;
}