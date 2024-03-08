const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose')

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("HEllo alllllllll")
})

app.use('/api/products', require('./routes/products.route'))


const PORT = process.env.PORT || 8000

mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log("Connected to database")
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(`Connection failed, Error- ${err}`)
    })