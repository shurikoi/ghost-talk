import { action, makeAutoObservable, observable } from "mobx"
import { serviceCheckUser, serviceRefresh, serviceSignIn, serviceSignOut, serviceSignUp } from "../services/authService"
import authFormStore from "./authFormStore"
import userStore from "./userStore"
import toast from "react-hot-toast"
class AuthStore {
    user = {}
    email = ""
    isAuth = false
    isLoading = false

    constructor() {
        makeAutoObservable(this, {
            user: observable,
            isAuth: observable,
            isLoading: observable,
            setUser: action,
            setAuth: action,
            setLoading: action,
        })
    }

    setUser(user) {
        this.user = user
    }

    setEmail(email) {
        this.email = email
    }

    setAuth(bool) {
        this.isAuth = bool
    }

    setLoading(bool) {
        this.isLoading = bool
    }

    async checkUser(email) {
        try {
            this.setEmail(email)
            const response = await serviceCheckUser(email)
            return response.data // { isExist }
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async signIn(email, password) {
        try {
            const response = await serviceSignIn(email, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            userStore.setUser(response.data.user) // ?
            authFormStore.removeClass()
        } catch (e) {
            toast.error(e.response?.data?.message)
        }
    }

    async signUp(email, name, surname, password) {
        try {
            const response = await serviceSignUp(email, name, surname, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            userStore.setUser(response.data.user)
            authFormStore.removeClass()
        } catch (e) {
            toast.error(e.response?.data?.message)
        }
    }

    async signOut() {
        // this.setLoading(true)
        try {
            await serviceSignOut()
            localStorage.removeItem('token')
            this.setAuth(false)
            userStore.setUser({})
        } catch (e) {
            console.log(e.response?.data?.message)
        } 
        // finally {
        //     this.setLoading(false)
        // }
    }

    async checkAuth() {
        this.setLoading(true)
        try {
            console.log(0)
            const response = await serviceRefresh()
            console.log(1)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            userStore.setUser(response.data.user)
            console.log(2)
        } catch (e) {
            console.log(e.response?.data?.message)
        } finally {
            this.setLoading(false)
        }
    }
}

const authStore = new AuthStore()
export default authStore