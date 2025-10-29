import {asyncHandler} from '../utils/asyncHandler.js';
import { User } from '../models/user.models.js';
import { ApiError } from '../utils/apiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
const registerUser = asyncHandler(  async (req, res) =>{
    const {username, email, password, role} = req.body;
    console.log("email: ", email)
    if([username, email, password].some((field)=> field?.trim() === "")){
        throw new ApiError(400, "All fields are required")
    }
    const existedUser = User.findOne({
        $or:[{username}, {email}]
    })

    if(existedUser){
        throw new ApiError(409, "User with email and username already exits")
    }
    const user = await User.create({
        username : username.toLowerCase(),
        email,
        password,
        role
    })
    const createdUser = User.findById(user._id).select(
        "-password"
    )
    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registration")
    }
    return res.status(201).json(
        new ApiResponse(200, "User registered successfully", createdUser)
    )

})

export  { registerUser }
