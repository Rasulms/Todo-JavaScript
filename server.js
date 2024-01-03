const express = require('express')
const app = express()
const PORT = 8080;
const path = require('path')
const mongoose = require('mongoose');
const mongooseURL = 'mongodb://127.0.0.1:27017/appdb'

app.use(express.json())



app.use(express.urlencoded({ extended: false }))

app.use('/', express.static(path.join(__dirname, 'public')))


app.use('/', require('./routes/root'))


async function dbConn() {
    await mongoose.connect(mongooseURL)
}

app.listen(PORT, () => {
    console.log(`server started succesfully on ${PORT}`)
    dbConn().then(() => console.log('db connected successfully')).catch((err) => {
        console.log(err.message);
    })

})
