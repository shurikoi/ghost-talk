import { action, makeAutoObservable, observable } from "mobx"
import { serviceGetUserById } from "../services/userService"

class UserStore {
  email = ""
  user = {}

  constructor() {
    makeAutoObservable(this, {
      email: observable,
      user: observable,
      setEmail: action,
      setUser: action,
    })
  }

  setEmail(email) {
    this.email = email
  }

  setUser(user) {
    this.user = user
  }

  async getUserById(userId) {
    const response = await serviceGetUserById(userId)
    return response.data
  }
}

const userStore = new UserStore()
export default userStore
