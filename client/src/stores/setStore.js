import { action, makeAutoObservable, observable } from "mobx"
import { serviceGetAllSets, serviceCreateSet, serviceGetSet } from "../services/setService"

class SetStore {
  title = ""
  cards = []
  isLoading = false

  constructor() {
    makeAutoObservable(this)
  }

  setTitle(title) {
    this.title = title
  }

  setCards(object, index) {
    this.cards[index] = object
  }

  setLoading(bool) {
    this.isLoading = bool
  }

  reset() {
    this.cards = []
    this.title = ""
  }

  async createSet() {
    try {
      const response = await serviceCreateSet(this.title, this.cards)
      this.reset()
      return response.data[0]
    } catch (e) {
      console.log(e.response?.data?.message)
    }
  }

  async getSet(setId) {
    this.setLoading(true)
    try {
      const response = await serviceGetSet(setId)
      return response.data
    } catch (e) {
      console.log(e.response)
    } finally {
      this.setLoading(false)
    }
  }

  async getAllSets() {
    this.setLoading(true)
    try {
      const response = await serviceGetAllSets()
      return response.data
    } catch (e) {
      console.log(e.response)
    } finally {
      this.setLoading(false)
    }
  }
}

const setStore = new SetStore()
export default setStore
