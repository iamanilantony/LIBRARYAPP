const express = require('express')
const controller = require('../controller/controller')
const services = require('../services/render')

const router = express.Router()  

router.get('/',services.homeroute)
router.post('/api/books',controller.addbook)
router.put('/api/books/:id',controller.updatebook)
router.get('/api/books/:id',controller.findbook)
router.get('/api/books',controller.findbook)
router.delete('/api/books/:id',controller.deletebook)

module.exports = router