import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cookieParser())

app.get('/', (req, res) => res.send('0k'))

//set the cookie
app.get('/cookie/set', (req, res) => {
    res.cookie('login', 'true').send('Cookie seteada')
})

//get the cookie
app.get('/cookie/get', (req, res) => {
    res.send(req.cookies)
})

//delete the cookie
app.get('/cookie/delete', (req, res) => {
    res.clearCookie('login').send('Cookie removed!')
})

app.listen(8080, () => console.log('Server Up'))