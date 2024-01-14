import express from "express"
import { signIn, checkUser, createUser, signOut, refresh } from "../controllers/userController.js"

const router = express.Router()

router.post('/check-user', checkUser)
router.post('/sign-in', signIn)
router.post('/create-user', createUser)
router.post('/sign-out', signOut)
router.post('/refresh', refresh)

export default router