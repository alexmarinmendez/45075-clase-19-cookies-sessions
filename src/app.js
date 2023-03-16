import express from 'express'
import session from 'express-session'

const app = express()

app.use(session({
    secret: 'c0d3r',
    resave: true,
    saveUninitialized: true
}))

app.get('/preference', (req, res) => {
    let preference = {
        language: 'es',
        mode: 'dark',
        login: true
    }
    req.session.preference = preference
    res.send('Configuraciones guardadas con éxito.')
})

app.get('/control-panel', (req, res) => {
    if (req.session.preference) {
        let preference = req.session.preference
        res.send(`Bienvenido de vuelta. Tus configuraciones son: MODE=${preference.mode} LANGUAGE=${preference.language}`)
    } else {
        res.send('No estas logueado.')
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) return res.send('Logout error')
        return res.send('Loogout OK')
    })
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