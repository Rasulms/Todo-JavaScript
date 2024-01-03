const express = require('express')
const router = express.Router()
const controller = require('../controller/controller.js')


router.get('/', controller.getTodoHtml)

router.get('/getData', controller.getTodo)
router.post('/Postdata', controller.postTodo)


module.exports = router;