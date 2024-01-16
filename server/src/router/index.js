import express from "express"
import { signIn, checkUser, signUp, signOut, refresh } from "../controllers/UserController.js"

const router = express.Router()

router.post('/check-user', checkUser)
router.post('/sign-in', signIn)
router.post('/sign-up', signUp)
router.post('/sign-out', signOut)
router.get('/refresh', refresh)

export default router