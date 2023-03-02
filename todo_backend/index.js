import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { connection } from './database/connections.js'
import userRouter from './src/modules/user/user.routes.js'
import cors from 'cors'
import noteRouter from './src/modules/note/note.routes.js'

const app = express()
const port = 3004

app.use(express.json())
app.use(cors())

connection()

app.use("/user", userRouter)
app.use("/note", noteRouter)

app.listen(port, ()=>{
    console.log("Server is Running ....");
})