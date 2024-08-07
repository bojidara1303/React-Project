const BASE_URL = `http://localhost:3030/users`

export const login = async (email, password) => {

    let response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })

    let tmpResponse = response;
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
        tmpResponse.headers = ({
            ...tmpResponse.headers,
            'X-Authorization': accessToken
        })
    }
    
    const result = await response.json();
    return result;
}

export const register = async (username, email, password) => {
    const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    });

    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
        headers = {
            ...headers,
            'X-Authorization': accessToken
        }
    }

    const result = await response.json();
    return result;
}

export const logout = async () => {
    const response = await fetch(`${BASE_URL}/logout`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });

    if (response.status === '204') {
        return {};
    }
}