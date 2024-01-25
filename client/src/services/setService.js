import { $api, $apiBearer } from "../http"

export const serviceCreateSet = async (title, cards) => {
    return $apiBearer.post("/create-set", { title, cards })
}

export const serviceGetSet = async (link) => {
    return $api.post("get-set", { link })
}

export const serviceGetAllSets = async () => {
    return $apiBearer.get("get-all-sets")
}