export default function hasLoggedUser() {
    return localStorage.getItem('accessToken');
}