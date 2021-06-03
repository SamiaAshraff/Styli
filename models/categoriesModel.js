const mongoose = require('mongoose')

const categoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sub_category: {
        type: [Map],
        required: true
    },
    date_created: {
        type: String,
        required: true,
        default: Date.now
    }
})

// model to interact with the categoriesSchema
module.exports = mongoose.model('Categories', categoriesSchema)