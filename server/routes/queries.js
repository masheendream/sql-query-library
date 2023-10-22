const express = require('express')
const Query = require('../models/queryModel')

const {
    getQueries,
    getQuery,
    createQuery
} = require('../controllers/queries')


const router = express.Router()

//Get all 
router.get('/', getQueries)

//Get one
router.get('/:id', getQuery)


router.post('/', createQuery)


module.exports = router
