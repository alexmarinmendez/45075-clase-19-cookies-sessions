import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cookieParser())

app.get('/preference', (req, res) => {
    let preference = {
        language: 'es',
        mode: 'dark',
        login: true
    }
    res.cookie('preference', JSON.stringify(preference)).send('Configuraciones guardadas con éxito.')
})

app.get('/control-panel', (req, res) => {
    if (req.cookies.preference) {
        let preference = JSON.parse(req.cookies.preference)
        res.send(`Bienvenido de vuelta. Tus configuraciones son: MODE=${preference.mode} LANGUAGE=${preference.language}`)
    } else {
        res.send('No estas logueado.')
    }
})

// //set the cookie
// app.get('/cookie/set', (req, res) => {
//     res.cookie('login', 'true').send('Cookie seteada')
// })

// //get the cookie
// app.get('/cookie/get', (req, res) => {
//     res.send(req.cookies)
// })

// //delete the cookie
// app.get('/cookie/delete', (req, res) => {
//     res.clearCookie('login').send('Cookie removed!')
// })

app.listen(8080, () => console.log('Server Up'))