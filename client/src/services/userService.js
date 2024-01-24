import { $apiBearer } from "../http"

export const serviceGetUserById = (userId) => {
    return $apiBearer.post("/get-user-by-id", { userId })
}