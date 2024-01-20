import express from "express"
import { signIn, checkUser, signUp, signOut, refresh } from "../controllers/UserController.js"
import { createSet } from "../controllers/SetController.js"

const router = express.Router()

router.post('/check-user', checkUser)
router.post('/sign-in', signIn)
router.post('/sign-up', signUp)
router.post('/sign-out', signOut)
router.get('/refresh', refresh)
router.post('/create-set', createSet)

export default router