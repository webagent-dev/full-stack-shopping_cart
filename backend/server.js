require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 5000
const host = `server started at http://localhost:${PORT}`
const connectToDb = require('./db/database')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res) => {
    res.status(200).json({msg: 'welcome to web page'})
})


const start = async () => {
    try{
        await connectToDb()
        app.listen(PORT, () => console.log(host))
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

start()