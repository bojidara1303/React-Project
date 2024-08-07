export const hasLoggedUser = () => {
    return localStorage.getItem('accessToken');
}

export const authUser = () => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
        response.headers['X-Authorization'] = accessToken;
    }
}

