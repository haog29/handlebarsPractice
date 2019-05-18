const { Router } = require('express')

const router = Router()

router.get('/', (req, res)=>{
    // if (e) throw e
  return res.render('index')
})

router.get('/milkshake', (req, res)=>{
    // if (e) throw e
  return res.render('milkshakes')
})



module.exports = router