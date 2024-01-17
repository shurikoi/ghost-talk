import { action, makeAutoObservable, observable } from "mobx"

export default class UserStore {
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