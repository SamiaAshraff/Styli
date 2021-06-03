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
router.get('/:id', getCategories, (req, res) => {
    res.json(res.categories)
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
router.patch('/:id', getCategories, (req, res) => {

})
// Deleting one
router.delete('/:id', getCategories, async (req, res) => {
    try {
        await res.categories.remove()
        res.json({ message: 'Deleted Category' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// middleware function
async function getCategories(req, res, next) {
    let categories
    try {
        categories = await Categories.findById(req.params.id)
        if (categories == null) {
            return res.status(404).json({ message: 'Cannot find subscriber' })

        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.categories = categories
    next()
}
module.exports = router