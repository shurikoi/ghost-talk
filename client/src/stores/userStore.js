import { action, makeAutoObservable, observable } from "mobx"
import { serviceGetUserById } from "../services/userService"

class UserStore {
    email = ""
    user = {}

    constructor() {
        makeAutoObservable(this, {
            email: observable,
            user: observable,
            setEmail: action,
            setUser: action,
        })
    }

    setEmail(email) {
        this.email = email
    }

    setUser(user) {
        this.user = user
    }

    async getUserById(userId) {
        try {
            const response = await serviceGetUserById(userId)
            return response.data
        } catch (e) {
            console.log(e.response)
        }
    }
}

const userStore = new UserStore()
export default userStore