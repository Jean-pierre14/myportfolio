const exp = require('express')

const router = exp.Router()

router.get('/', (req, res) => {
    res.render('index')
})
router.get('/card', (req, res) => {
    res.render('card')
})
module.exports = router