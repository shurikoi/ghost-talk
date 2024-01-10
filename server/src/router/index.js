import express from "express"
import { checkPassword, checkUser, createUser } from "../controllers/userController.js"

const router = express.Router()

router.post('/check-user', checkUser)
router.post('/check-password', checkPassword)
router.post('/create-user', createUser)
router.post('/refresh') // TODO

export default router