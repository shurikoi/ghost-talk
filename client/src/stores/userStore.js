import { action, makeAutoObservable, observable } from "mobx"

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
}

const userStore = new UserStore()
export default userStore