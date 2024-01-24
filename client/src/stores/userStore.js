import { action, makeAutoObservable, observable } from "mobx"
import { serviceGetUserById } from "../services/userService"

class UserStore {
    email = ""

    constructor() {
        makeAutoObservable(this, {
            email: observable,
            setEmail: action,
        })
    }

    setEmail(email) {
        this.email = email
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