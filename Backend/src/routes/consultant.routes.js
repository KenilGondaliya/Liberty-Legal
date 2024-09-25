import { Router } from "express";
import { consultantation } from "../Controllers/consultant.controllers.js";


const router = Router();

router.route("/consultantation").post(consultantation);

export default router;