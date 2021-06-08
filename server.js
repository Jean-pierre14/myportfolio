const exp = require('express')
const { success, error } = require('consola')

require('dotenv').config({ path: 'config.env' })



const app = exp()
app.set('views engine', 'ejs')

const PORT = 5000 || process.env.PORT

// Get /
app.get('/', require('./routes/index'))

app.listen(PORT, (err) => {
    if (err) throw err
    success({ message: `Server run on port: ${PORT}`, badge: true })
})