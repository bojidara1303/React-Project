// export const hasUser = localStorage.getItem('accessToken');

export default function hasLoggedUser() {
    return localStorage.getItem('accessToken');
}