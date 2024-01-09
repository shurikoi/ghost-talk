import { Schema, model } from "mongoose"

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  password: { type: String,  required: true },
})

const userModule = model("User", userSchema)

export default userModule