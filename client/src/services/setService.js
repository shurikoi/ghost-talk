import { $apiBearer } from "../http"

export const serviceCreateSet = async (title, words) => {
    return $apiBearer.post("/create-set", { title, words })
}