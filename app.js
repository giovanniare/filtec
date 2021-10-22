const express = require('express')
const hbs = require('hbs')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')

require('./hbs/helpers')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/views/partials')

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
})