import jwt from 'jsonwebtoken';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { User } from '../models/user.models.js';

const verifyJWT = asyncHandler  (async (req, res, next) =>{
    try {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if(!token){
        throw new ApiError(401, "Access denied: No token provided")
    }
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    const user = await User.findById(decoded._id).select("-password");
    if(!user){
        throw new ApiError(401, "Invalid token : User not found")
    }
    req.user = user;
    next();
    } catch (error) {
        throw new ApiError(401, " Invalid or expired token");
    }
})

export { verifyJWT }