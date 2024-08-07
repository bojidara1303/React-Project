export default function hasLoggedUser() {
    return localStorage.getItem('accessToken');
}

export default function authUser(){
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
        response.headers['X-Authorization'] = accessToken;
    }
}

