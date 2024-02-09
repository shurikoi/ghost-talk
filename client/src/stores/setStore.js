import { action, makeAutoObservable, observable } from "mobx"
import {
  serviceGetAllSets,
  serviceCreateSet,
  serviceGetSet,
  serviceDeleteSet,
} from "../services/setService"
import userStore from "./userStore"

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
    const { data } = await serviceGetSet(setId)
    return data
  }

  async getAllSets() {
    const { data } = await serviceGetAllSets()
    return data
  }

  async getSortedSets() {
    const { data } = await serviceGetAllSets()
    const userSets = data.filter((set) => set.user === userStore.user._id)
    const leftSets = data.filter((set) => set.user !== userStore.user._id)
    return [data, userSets, leftSets]
  }

  async deleteSet(setId, setUser) {
    try {
      await serviceDeleteSet(setId, setUser)
    } catch (error) {
      console.log(error)
    }
  }
}

const setStore = new SetStore()
export default setStore
