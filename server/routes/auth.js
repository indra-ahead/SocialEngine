import { Router } from "express";
import * as controller from "../controllers/auth.js";
// import upload from "../../middleware/multer.js";
const router = Router();

router.get("/login", controller.getLogin);
router.post("/login", controller.login);
router.get("/signup", controller.getSignup);
router.post("/signup", controller.signup);

export default router;