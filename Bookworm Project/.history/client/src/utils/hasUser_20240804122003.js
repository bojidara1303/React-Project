export const hasLoggedUser() {
    return localStorage.getItem('accessToken');
}

export const authUser(){
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
        return response.headers['X-Authorization'] = accessToken;
    }
    return {}
}

