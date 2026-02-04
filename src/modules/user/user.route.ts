import express from "express"
import { userController } from "./user.controller"

const userRoute = express.Router()

userRoute.get("/", userController.getAllUsers)
userRoute.post("/create", userController.createUser)
userRoute.get("/make-admin/:email", userController.makeAdmin)
export { userRoute }
