import {Router} from "express";
import {registerUser, loginUser} from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { User } from "../models/user.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import  { ApiError}  from '../utils/ApiError.js'
import {ApiResponse} from '../utils/ApiResponse.js'

const router = Router();

router.route("/register").post(registerUser)
router.route("/login").post(loginUser);
router.route("/profile").get( verifyJWT, (req, res) =>{
    res.status(200).json(
        {
            success : true,
            message  : "Access granted to profile",
            user : req.user,
        }
    )
})
// user.routes.js
router.get("/all", verifyJWT, asyncHandler(async (req, res) => {
  if (req.user.role !== "admin") {
    throw new ApiError(403, "Only admin can view users");
  }
  const users = await User.find({role : "user"}, "username email");
  res.status(200).json(new ApiResponse(200, users, "User fetched"));
}));


export default router;