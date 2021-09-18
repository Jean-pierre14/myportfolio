const exp = require('express')

const router = exp.Router()
const title = 'Bisimwa'

router.get('/', (req, res) => {
    res.render('index', { title })
})
router.get('/card', (req, res) => {
    res.render('card')
})
module.exports = router