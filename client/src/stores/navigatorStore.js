import { action, makeAutoObservable, observable } from "mobx"

class NavigatorStore {
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

const navigatorStore = new NavigatorStore()
export default navigatorStore