const BASE_URL = `http://localhost:3030/users`

export const login = async (userData) => {
    const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    const result = await response.json();
    return result;
}