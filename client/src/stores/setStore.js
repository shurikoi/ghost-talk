import { action, makeAutoObservable, observable } from "mobx"
import { serviceCreateSet } from "../services/setService"

class SetStore {
  title
  words = []

  constructor() {
    makeAutoObservable(this)
  }

  setTitle(title) {
    this.title = title
  }

  setWords(object, number) {
    this.words[number] = object
    console.log(this.words)
  }

  async createSet() {
    try {
      const response = await serviceCreateSet(this.title, this.words)
    } catch (e) {
      console.log(e.response?.data?.message)
    }
  }
}

const setStore = new SetStore()
export default setStore
