
const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'product must be provided']
    },
    price:{
        type: Number, required:[true, 'price must be provided']
    },
    featured: {
        type: Number, default: false,
    }, 
    rating: {
        type: Number, default: 4.5,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: ['ikea', 'liddy', 'caressa', 'marcos'],
            
    

        
    },

})

module.exports = mongoose.model('product', productSchema);