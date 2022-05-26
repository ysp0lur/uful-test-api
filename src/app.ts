import express, { Express } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes'

import { config } from "dotenv";
config();
const app: Express = express()

const PORT: string | number = process.env.PORT || 4000
const URI: string = `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`

app.use(cors())
app.use(express.json());
app.use(todoRoutes)


mongoose
    .connect(URI)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on http://${process.env.MONGO_HOST}:${PORT}`)
        )
    )
    .catch((error) => {
        throw error
    })
