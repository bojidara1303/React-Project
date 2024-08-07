// export const hasUser = localStorage.getItem('accessToken');

function hasLoggedUser() {
    return localStorage.getItem('accessToken');
}