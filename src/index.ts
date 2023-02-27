import express from "express"
import { AppDataSource } from "./database/data-source"
import routers from "./app/routes/routes"

AppDataSource.initialize().then(async () => {
    const app = express()

    app.use(express.json())

    app.use(routers)

    app.get('/', (req, res) => {
        return res.json('esta funcionado')
    })

    return app.listen(process.env.PORT, () => {
        console.log('Server started')
    })
})