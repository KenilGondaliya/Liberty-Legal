import {Router} from "express";
import {logoutUser, loginUser, registerUser, changeCurrentPassword, refreshAccessToken, getAllUsers,updateUser, deleteUser } from "../Controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router()

router.route("/").get(getAllUsers)

router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

router.route("/logout").post(verifyJWT, logoutUser)

router.route("/change-password").post(verifyJWT, changeCurrentPassword)

router.route("/refresh-token").post(refreshAccessToken)

router.route("/:id").put(updateUser)

router.route("/:id").delete(deleteUser)


export default router

