import { action, makeAutoObservable, observable } from 'mobx'
import {
  serviceGetAllSets,
  serviceCreateSet,
  serviceGetSet,
  serviceDeleteSet,
} from '../services/setService'
import userStore from './userStore'

class SetStore {
  title = ''
  cards = []
  typeContent = 'link'
  source = ''
  partOfSpeech = ''
  amountOfCards = ''
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

  setTypeContent(typeContent) {
    this.typeContent = typeContent
  }

  setSource(source) {
    this.source = source
  }

  setPartOfSpeech(partOfSpeech) {
    this.partOfSpeech = partOfSpeech
  }

  setAmountOfCards(amountOfCards) {
    this.amountOfCards = amountOfCards
  }

  setLoading(bool) {
    this.isLoading = bool
  }

  reset() {
    title = ''
    cards = []
    typeContent = ''
    source = ''
    partOfSpeech = ''
    amountOfCards = ''
  }

  async createSet() {
    const response = await serviceCreateSet(this.title, this.cards)
    this.reset()
    return response.data[0]
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
    await serviceDeleteSet(setId, setUser)
  }
}

const setStore = new SetStore()
export default setStore
