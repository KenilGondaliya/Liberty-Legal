import { Router } from "express";
import { adminPassword } from "../Controllers/admin.controllers.js";

const router = Router();

router.route("/adminPassword").post(adminPassword);

export default router;
