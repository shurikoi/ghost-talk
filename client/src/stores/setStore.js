import { action, makeAutoObservable, observable } from 'mobx'
import {
  serviceGetAllSets,
  serviceCreateSet,
  serviceGetSet,
  serviceDeleteSet,
  serviceCreateSetBySource,
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
    this.title = ''
    this.cards = []
    this.typeContent = 'link'
    this.source = ''
    this.partOfSpeech = ''
    this.amountOfCards = ''
  }

  async createSet() {
    const response = await serviceCreateSet(this.title, this.cards)
    this.reset()
    return response.data[0]
  }

  async createSetBySource() {
    if (this.typeContent === 'text') {
      const splitted = this.source.split(' ')
      const regex = /[?!.,"']/

      const sourceArray = splitted.map((value) => {
        const lastItem = value.slice(-1)
        return regex.test(lastItem) ? value.slice(0, -1) : value
      })

      this.setSource(sourceArray)
    }

    const response = await serviceCreateSetBySource(
      this.title,
      this.typeContent,
      this.source,
      this.partOfSpeech,
      Number(this.amountOfCards)
    )
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
