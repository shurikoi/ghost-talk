// import { Schema, model } from "mongoose"
import mongoose from "mongoose"

// const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  surname: String,
  password: String,
})

const userModule = mongoose.model("User", userSchema)

export default userModule