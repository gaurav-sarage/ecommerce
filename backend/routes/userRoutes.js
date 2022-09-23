import express from 'express'
const router = express.Router()
import { protect } from '../middleware/authMiddleware.js'
import { authUser, registerUser, getUserProfile } from '../controllers/userController.js'


router.route('/').post(registerUser)

router.post('/login', authUser)

router.route('/profile').get(protect, getUserProfile)

export default router
