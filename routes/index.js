const exp = require('express')

const router = exp.Router()

router.get('/', (req, res) => {
    res.render('index')
})
module.exports = router