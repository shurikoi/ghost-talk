import { action, makeAutoObservable, observable } from "mobx"

class AuthFormStore {
    isFormActive = false

    constructor() {
        makeAutoObservable(this, {
            isFormActive: observable,
            setFormActive: action,
        })
    }

    setFormActive(bool) {
        this.isFormActive = bool
    }

    addClass() {
        this.isFormActive = true
    }

    removeClass() {
        this.isFormActive = false
    }
}

const authFormStore = new AuthFormStore()
export default authFormStore