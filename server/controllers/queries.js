const Query = require('../models/queryModel')
const mongoose = require('mongoose')

const getQueries = async (req, res) => {
    const query = await Query.find({}).sort({createdAt: -1})

    res.status(200).json(query)
}

const getQuery = async (req, res) => {
    console.log(req.params)
    const {id} = req.params
    console.log(id)
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No Such query with id ' + id})
    }

    const query = await Query.findById(id)

    if(!query){
        return res.status(404).json({error: 'No such query'})
    }

    res.status(200).json(query)
}

const createQuery = async (req, res) => {
    const {title, body, category} = req.body

    // Add doc to DB 
    try{
        const query = await Query.create({title, body, category})
        
        res.status(200).json(query)
        
    } catch (error){
        res.status(400).json({error: error.message})
    }

}



module.exports = {
    getQueries,
    getQuery,
    createQuery
}