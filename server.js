/************************************/
/*** IMPORT DES MODULES NECESSAIRES */
const express = require('express')
const cors = require('cors')

/****************/
/*** PARAMS API */
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

/***********************/
/*** ROUTAGE PRINCIPAL */

app.get('/', (req, res) => res.send(`Good Job, this API is running now.`))

app.get('/second', (req, res) => res.send(`Another test`))

app.all('*', (req, res) => res.status(501).send(`What the hell are you doing ?`))

/***************/
/*** START API */

const server = app.listen(process.env.SERVER_PORT, () => {
    console.log(`This server is running on port ${process.env.SERVER_PORT}. Have Fun !`)
})

module.exports = server