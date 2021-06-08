const exp = require('express')
require('dotenv').config()


const app = exp()
const PORT = 5000 || process.env.PORT

app.listen(PORT, (err) => {
    if (err) throw err
    success({ message: `Server run on port: ${PORT}`, badge: true })
})