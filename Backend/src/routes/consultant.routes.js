import { Router } from "express";
import { consultantation, getAllConsultant , deleteConsultant ,ApproveConsultant} from "../Controllers/consultant.controllers.js";


const router = Router();

router.route("/consultantation").post(consultantation);

router.route("/:id").delete(deleteConsultant)

router.route("/:id").put(ApproveConsultant)

router.route("/").get(getAllConsultant)

export default router;