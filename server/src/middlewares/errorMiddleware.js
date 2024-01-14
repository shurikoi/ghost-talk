import ApiError from "../exceptions/ApiError.js"

export const errorMiddleware = (errors, req, res, next) => {
    console.log(errors)

    if (errors instanceof ApiError) {
        return res.status(errors.status).json({ message: errors.message, errors: errors.errors })
    }

    return res.status(500).json({ message: "Unexpected error" })
}