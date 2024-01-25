const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require("./middleware/errorMiddleware")
const connectDb = require("./config/db")
const PORT = process.env.PORT || 5000

connectDb()
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) =>{
    res.send('Hello')
})
app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/agendas", require("./routes/agendaRoutes"))
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))