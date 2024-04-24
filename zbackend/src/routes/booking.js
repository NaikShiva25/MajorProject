import { Router } from "express";
import { BookAccomodation } from "../controllers/Booknow.controller.js";
const router  = Router();

router.post('/book-accomodation',BookAccomodation);


export default router 