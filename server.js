const exp = require('express')
const { success, error } = require('consola')
const dotenv = require('dotenv')

dotenv.config()

const app = exp()
app.set('view engine', 'ejs')
app.use(exp.static('public'))

const PORT = process.env.PORT || 3000

// Get '/'
app.use('/', require('./routes/index'))

app.listen(PORT, (err) => {
    if (err) error({ message: `error ${err}`, badge: true })
    success({ message: `Server run on port: ${PORT}`, badge: true })
})