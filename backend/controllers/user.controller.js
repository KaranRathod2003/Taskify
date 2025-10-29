import {asyncHandler} from '../utils/asyncHandler.js';
import { User } from '../models/user.models.js';
import { ApiError } from '../utils/apiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
const registerUser = asyncHandler(  async (req, res) =>{
    const {username, email, password, role} = req.body;
    console.log("username: ", username)
    if([username, email, password].some((field)=> field?.trim() === "")){
        throw new ApiError(400, "All fields are required")
    }
    const existedUser = await User.findOne({
        $or:[{username}, {email}]
    })

    if(existedUser){
        throw new ApiError(409, "User with email and username already exits")
    }
    const user = await User.create({
        username ,
        email,
        password,
        role
    })
    const createdUser = await User.findById(user._id).select(
        "-password"
    )
    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registration")
    }
    return res.status(201).json(
        new ApiResponse(200, "User registered successfully", createdUser)
    )

})

const loginUser = asyncHandler(async (req, res) =>{
    const {email, password} = req.body;
    if(!email || !password){
        throw new ApiError(400, "Email and password required")
    }
    const user = await User.findOne({email})
    if(!user){
        throw new ApiError(404, "User not found")
    }
    const isValidPassword = await user.isPasswordCorrect(password)
    if(!isValidPassword){
        throw new ApiError(401, "Invalid credentials");
    }
    const accessToken = user.generateAccessToken();
    const loggedInUser = await User.findById(user._id).select(
        "-password"
    )
    return res.status(201).json(
        new ApiResponse(
            200,
            "Login Successful",
            {user : loggedInUser, accessToken}
        )
    )

})



export  { registerUser, loginUser }
