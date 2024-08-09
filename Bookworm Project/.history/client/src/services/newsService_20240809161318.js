const BASE_URL = 'http://localhost:3030/data/news';

export const getAllNews = async () => {
    const response = await fetch(BASE_URL, {
        method: 'GET'
    });

    const result = await response.json();
    return Object.values(result);
};

export const getOneNews = async (newsId) => {
    const response = await fetch(`${BASE_URL}/${newsId}`, {
        method: 'GET'
    });

    const result = await response.json();
    return result;
};