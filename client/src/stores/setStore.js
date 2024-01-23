import { action, makeAutoObservable, observable } from "mobx"
import { serviceCreateSet } from "../services/setService"

class SetStore {
  title = ""
  cards = []

  constructor() {
    makeAutoObservable(this)
  }

  setTitle(title) {
    this.title = title
  }

  setCards(object, index) {
    this.cards[index] = object
  }

  reset() {
    this.cards = []
    this.title = ""
  }

  async createSet() {
    try {
      const response = await serviceCreateSet(this.title, this.cards)
      this.reset()
    } catch (e) {
      console.log(e.response?.data?.message)
    }
  }
}

const setStore = new SetStore()
export default setStore
