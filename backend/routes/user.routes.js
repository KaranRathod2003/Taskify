import {Router} from "express";
import {registerUser, loginUser} from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

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

export default router;