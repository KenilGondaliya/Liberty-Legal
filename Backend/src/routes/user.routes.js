import {Router} from "express";
import {logoutUser, loginUser, registerUser, changeCurrentPassword, refreshAccessToken } from "../Controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router()

router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

router.route("/logout").post(verifyJWT, logoutUser)

router.route("/change-password").post(verifyJWT, changeCurrentPassword)

router.route("/refresh-token").post(refreshAccessToken)



export default router

