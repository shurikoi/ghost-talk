import { action, makeAutoObservable, observable } from "mobx"
import { serviceCreateSet } from "../services/setService"

class SetStore {

    constructor() {
        makeAutoObservable(this)
    }

    async createSet(title, words) {
        try {
            const response = serviceCreateSet(title, words)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }
}

const setStore = new SetStore()
export default setStore