class AppStorage {

    storeToken(token) {
        localStorage.setItem('token', token);
    }

    storeUser(user) {
        localStorage.setItem('user', user);
    }

    store(token, user) {
        this.storeToken(token)
        this.storeUser(user)
    }

    clear() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    getToken() {
        localSorage.getItem(token);
    }
    getUser() {
        localSorage.getItem(user);
    }
}
export default AppStorage = new AppStorage()
