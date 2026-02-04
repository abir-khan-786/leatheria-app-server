import { Request, Response } from "express"
import { userService } from "./user.service"

const getAllUsers = async (req: Request, res: Response) => {
  const data = await userService.getAllUsers()
  res.status(200).send({
    message: "Users fetched successfully",
    data,
  })
}

const createUser = async (req: Request, res: Response) => {
  const userData = req.body
  const data = await userService.createUser(userData)
  res.status(201).send({
    message: "User created successfully",
    status: true,
    data,
  })
}

// userController.ts
const makeAdmin = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string // GET রিকোয়েস্টে কুয়েরি থেকে ইমেইল নিন

    if (!email) {
      return res.status(400).json({ message: "Email is required" })
    }

    const result = await userService.makeAdmin(email)

    res.status(200).json({
      success: true,
      message: "User promoted to Admin successfully",
      data: result,
    })
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error })
  }
}

export const userController = {
  getAllUsers,
  createUser,
  makeAdmin,
}
