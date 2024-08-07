const BASE_URL = 'http://localhost:3030/data/books';
import { authUser } from '../utils/hasUser'

export const createBook = async (bookData) => {
    const response = await fetch(BASE_URL, {
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
    const response = await fetch(BASE_URL, {
        method: 'GET'
    });

    const result = await response.json();
    return Object.values(result);
};

export const getOneBook = async (bookId) => {
    const response = await fetch(`${BASE_URL}/${bookId}`, {
        method: 'GET'
    });

    const result = await response.json();
    return result;
}

export const editBook = async (bookId, bookData) => {
  
    const response = await fetch(`${BASE_URL}/${bookId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(bookData)
    })
    authUser();
    const result = await response.json();
    return result;
}

export const deleteBook = async (bookId) => {
    const response = await fetch(`${BASE_URL}/${bookId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
}
