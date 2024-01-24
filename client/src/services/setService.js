import { $api, $apiBearer } from "../http"

export const serviceCreateSet = async (title, words) => {
    return $apiBearer.post("/create-set", { title, words })
}

export const serviceGetSet = async (setId) => {
    return $api.post("get-set", { setId })
}