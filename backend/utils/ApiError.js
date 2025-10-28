class ApiError extends Error {
    constructor(
        statusCode,
        message = 'Something went wrong',
        errors = [],
        stack = ''
    ) {
        super(message)
        this.stack = stack,
            this.errors = errors,
            this.data = null,
            this.message = message
        this.statusCode = statusCode


        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {
    ApiError
}