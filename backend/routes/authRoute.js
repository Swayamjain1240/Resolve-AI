import express from "express"

const router = express.Router()

router.post("/login", Login)
router.post("/signup", Signup)
router.post("/logout", Logout)

export default router