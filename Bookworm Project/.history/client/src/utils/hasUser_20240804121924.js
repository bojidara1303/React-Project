export  function hasLoggedUser() {
    return localStorage.getItem('accessToken');
}

export  function authUser(){
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
       return response.headers['X-Authorization'] = accessToken;
    }
    return {}
}

