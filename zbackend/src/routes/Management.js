import { Router} from "express";
import { loginUser , logoutUser, managementAllBookings, refreshAccessToken , createUser } from "../controllers/Management.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
const router  = Router();
router.post('/createuser',createUser)
router.post('/login',loginUser);
router.post('/logout',verifyJWT,logoutUser)
router.post('/refreshaccesstoken',refreshAccessToken);
router.post('/all-bookings',verifyJWT,managementAllBookings);//post..?



export default router 