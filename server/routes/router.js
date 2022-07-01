const express = require('express')
const controller = require('../controller/controller')
const services = require('../services/render')

const router = express.Router()  

//restful api books
router.post('/api/books',controller.addbook)
router.put('/api/books/:id',controller.updatebook)
router.get('/api/books/:id',controller.findbook)
router.get('/api/books',controller.findbook)
router.delete('/api/books/:id',controller.deletebook)

//restful api author
router.post('/api/author',controller.addauthor)
router.put('/api/author/:id',controller.updateauthor)
router.get('/api/author/:id',controller.findauthor)
router.get('/api/author',controller.findauthor)
router.delete('/api/author/:id',controller.deleteauthor)

//service routes
router.get('/',services.homeroute)
router.get('/singlebook/:id',services.singlebook)
router.get('/authors',services.authors)



module.exports = router