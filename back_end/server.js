const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const BodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT
const firebase = require('firebase/app')
require("firebase/auth")
require('firebase/database')

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
}

firebase.initializeApp(firebaseConfig)

app.use(cors())
app.use(BodyParser.json())

app.get('/', (req, res) => {
    firebase.database().ref('/')
    .on('value', snapshot => {
        console.log(snapshot.val())
        res.json(snapshot.val())
    })
})

app.listen(port, () => {
    console.log(`Listening on PORT number ${port}`)
})