import { Schema, model } from "mongoose"

const cardSchema = new Schema({
    _id: Schema.Types.ObjectId,
    word: { type: String, required: true },
    explanation: { type: String, required: true },
})

const setSchema = new Schema({
    _id: Schema.Types.ObjectId,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    cards: [cardSchema],
})

const setModule = model("Set", setSchema)

export default setModule