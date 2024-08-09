import { hasLoggedUser } from '../utils/hasUser';

const BASE_URL = 'http://localhost:3030/data/reviews';

export const createReview = async (bookId, username, review) => {
    const response = await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': hasLoggedUser()
        },
        body: JSON.stringify({ bookId, username, review })
    });

    const result = await response.json();
    return result;
};

export const getOneReview = async (reviewId) => {
    const response = await fetch(`${BASE_URL}/${reviewId}`, {
        method: 'GET'
    });

    const result = await response.json();
    return result;
}

export const getAllReviews = async (bookId) => {
    const query = new URLSearchParams({
        where: `bookId="${bookId}"`,
         load: `owner=_ownerId:users`
    })
    
    const response = await fetch(`${BASE_URL}?${query}`, {
        method: 'GET'
    });

    const result = await response.json();
    return result;
}

export const deleteReview = async (reviewId) => {
    const response = await fetch(`${BASE_URL}/${reviewId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': hasLoggedUser()
        }
    })

    const result = await response.json();
    return result
};