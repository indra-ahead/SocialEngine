import express from 'express';
import authRoutes from "./auth.js"

// import db from '../db';
// import form from "../functions/forms";

const router = express.Router();
router.use("/auth",authRoutes)



export default router;