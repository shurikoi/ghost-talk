import { Schema, model } from "mongoose"

const tokenSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  refreshToken: { type: String, required: true },
})

const tokenModule = model("Token", tokenSchema)

export default tokenModule