const key = "user"

export function setToken(app, token) {
    app.$cookies.set(key, token);
}

export function getToken(app) {
    return app.$cookies.get(key);
}