class ApiResponse {
    constructor(statusCode, message = "success", data){
        this.data = data,
        this.success = statusCode,
        this.statusCode = statusCode < 400,
        this.message = message
    }
}

export {ApiResponse}