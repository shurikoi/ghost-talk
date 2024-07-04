import axios from 'axios'
import dotenv from "dotenv"
dotenv.config({ path: ".env.local" })

export const $dictionaryApi = axios.create(({
    baseURL: process.env.DICTIONARY_SERVICE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
}))