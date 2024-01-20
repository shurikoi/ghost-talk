import { $api } from "../http"

export const serviceCheckUser = async (email) => {
    return $api.post("/check-user", { email })
}

export const serviceSignIn = async (email, password) => {
    return $api.post("/sign-in", { email, password })
}

export const serviceSignUp = async (email, name, surname, password) => {
    return $api.post("/sign-up", { email, name, surname, password })
}

export const serviceSignOut = async () => {
    return $api.post("/sign-out")
}

export const serviceRefresh = async () => {
    return $api.get("/refresh")
}