import { action, makeAutoObservable, observable } from "mobx"

class ModalMenuStore {
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

const modalMenuStore = new ModalMenuStore()
export default modalMenuStore