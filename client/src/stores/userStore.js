import { makeAutoObservable, observable } from "mobx"

export default class UserStore {
    email = ""

    constructor() {
        makeAutoObservable(this)
    }

    setEmail(email) {
        this.email = email
    }
}