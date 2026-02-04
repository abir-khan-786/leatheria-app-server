import app from "./app"
import { prisma } from "./lib/prisma"

async function startServer() {
  try {
    await prisma.$connect()
    console.log("✅ Database connected")

    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.error("❌ DB connection failed", error)
    process.exit(1)
  }
}

startServer()
