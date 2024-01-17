import { makeAutoObservable } from "mobx"
import { serviceCheckUser, serviceSignIn, serviceSignOut, serviceSignUp } from "../services/authService"

export default class AuthStore {
    user = {}
    isAuth = false

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool) {
        this.isAuth = bool
    }

    setUser(user) {
        this.user = user
    }

    async checkUser(email) {
        try {
            const response = await serviceCheckUser(email)
            return response.data
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async signIn(email, password) {
        try {
            const response = await serviceSignIn(email, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async signUp(email, name, surname, password) {
        try {
            const response = await serviceSignUp(email, name, surname, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async signOut() {
        try {
            await serviceSignOut()
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({})
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }
}