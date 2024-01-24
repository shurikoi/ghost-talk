import { Schema, model } from "mongoose"

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  email: { type: String, unique: true, required: true },
  name: { type: String, },
  surname: { type: String, },
  password: { type: String, },
})

const userModule = model("User", userSchema)

export default userModule