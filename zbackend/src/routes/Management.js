import { Router} from "express";
import { loginUser , logoutUser, managementAllBookings, refreshAccessToken } from "../controllers/Management.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
const router  = Router();

router.post('/login',loginUser);
router.post('/logout',verifyJWT,logoutUser)
router.post('/refreshaccesstoken',refreshAccessToken);
router.get('/all-bookings',managementAllBookings);//post..?



export default router 