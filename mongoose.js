const mongoose = require('mongoose')
require('./db')



const jumockSchema = mongoose.Schema({
    
    name:String,
    email:String,

})

const jumockModel = mongoose.model('jumockModel',jumockSchema)







module.exports = jumockModel