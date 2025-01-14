import express from "express"
import { signIn, checkUser, signUp, signOut, refresh, getUserById } from "../controllers/UserController.js"
import { createSet, createSetByLink, createSetByText, deleteSet, getAllSets, getLimitedSets, getSet } from "../controllers/SetController.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.post('/check-user', checkUser)
router.post('/sign-in', signIn)
router.post('/sign-up', signUp)
router.post('/sign-out', signOut)
router.get('/refresh', refresh)
router.post('/create-set', authMiddleware, createSet)
router.post('/get-set', getSet)
router.post('/get-user-by-id', authMiddleware, getUserById)
router.get('/get-limited-sets', getLimitedSets)
router.get('/get-all-sets', getAllSets)
router.post('/delete-set', authMiddleware, deleteSet)
router.post('/create-set-by-text', authMiddleware, createSetByText)
router.post('/create-set-by-link', authMiddleware, createSetByLink)

export default router