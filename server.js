import express from 'express'
import feeRouter from './studentsRouter.js'
const app = express()

app.use(express.json())

app.use('/fee', feeRouter)

const port = 4300

app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})


export default app;