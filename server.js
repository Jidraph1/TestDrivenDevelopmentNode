import express from 'express'
import feeRouter from './studentsRoute.js'
const app = express()

app.use(json())

app.use('/fee', feeRouter)

const port = 4300

app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})


export default app;