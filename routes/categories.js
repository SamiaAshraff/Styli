const express = require('express')
const router = express.Router()
const Categories = require('../models/categoriesModel')

// Getting all
router.get('/', async (req, res) => {
    try {
        const categories = await Categories.find()
        res.json(categories)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
// Getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})
// Creating one
router.post('/', async (req, res) => {
    const categories = new Categories({
        name: req.body.name,
        sub_category: req.body.sub_category
    })
    try {
        const newCategory = await categories.save()
        res.status(201).json(newCategory)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
// Updating one
router.patch('/:id', (req, res) => {

})
// Deleting one
router.delete('/', (req, res) => {

})
module.exports = router