import express from "express"
import testRoutes from "./routes/testRoutes.js";
import cors from "cors"
import dotenv from "dotenv"
import path from "path";
import dbConnect from "./service/mongoose.js";

dotenv.config()

const port = process.env.PORT || 8080
const server = express()
dbConnect()
server.set("json spaces", 2)

server.use(express.json())

server.use(cors())

server.use("/api/tests", testRoutes)


server.use(express.static("client/build"))
server.get('*', (req, res) => {
    res.sendFile(path.resolve('client/build/index.html'))
})

server.listen(port, () => {
    console.log("server is running on http://localhost:8080")
})