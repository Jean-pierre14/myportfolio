const exp = require('express')
const { success, error } = require('consola')

require('dotenv').config({ path: 'config.env' })

const app = exp()
app.set('view engine', 'ejs')
app.use(exp.static('public'))

const PORT = 5000 || process.env.PORT

// Get 
app.get('/', require('./routes/index'))

app.listen(PORT, (err) => {
    if (err) error({ message: `error ${err}`, badge: true })
    success({ message: `Server run on port: ${PORT}`, badge: true })
})