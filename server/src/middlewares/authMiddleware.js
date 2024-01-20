import ApiError from "../exceptions/ApiError.js"
import { serviceValidateAccessToken } from "../services/tokenService.js"

export const authMiddleware = (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization
        if (!authorizationHeader) return next(ApiError.UnauthorizedError())

        const accessToken = authorizationHeader.split(" ")[1]
        if (!accessToken) return next(ApiError.UnauthorizedError())

        const userData = serviceValidateAccessToken(accessToken)
        if(!userData) {
            next(ApiError.UnauthorizedError())
        }

        req.user = userData
        next()
    } catch (e) {
        next(ApiError.UnauthorizedError())
    }
}