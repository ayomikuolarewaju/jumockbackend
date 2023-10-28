const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/jumockdb').then(()=>{
    console.log('connected successfully')
}).catch ((e)=>{
    console.log('not connected successfully')
})







