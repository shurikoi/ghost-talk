export default class ApiError extends Error {
    status
    errors

    constructor(status, message, errors = []) {
        super(message)
        this.status = status
        this.errors = errors
    }

    static UnauthorizedError() {
        return new ApiError(401, "User is not authorized")
    }

    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors)
    }

    static NotFound(message, errors = []) {
        return new ApiError(404, message, errors)
    }

    static FailedDependency(message, errors = []) {
        return new ApiError(424, message, errors)
    }
}