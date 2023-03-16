import express from 'express'
import cookieParser from 'cookie-parser'
import __dirname from './utils.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(express.static(__dirname+'/public'))

app.post('/set', (req, res) => {
    let datos = { name: req.body.name, email: req.body.email }
    res.cookie('actividad', JSON.stringify(datos)).redirect('/index.html')
})

app.get('/get', (req, res) => {
    res.json(JSON.parse(req.cookies.actividad))
})

app.listen(8080, () => console.log('Server Up'))