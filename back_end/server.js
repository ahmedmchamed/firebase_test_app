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

// Firebase config settings
// Using env file to hide sensitive data
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

// Initialising the firebase instance
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

app.post('/update', (req, res) => {
    // const newData = req.body
    // console.log(newData)
    firebase.database().ref('/').set(req.body.newData)
})

app.listen(port, () => {
    console.log(`Listening on PORT number ${port}`)
})