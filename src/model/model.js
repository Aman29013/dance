const mongoose = require('mongoose');
const dSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    phone: {
        type: String,
        require: true,
    }, addresss: {
        type: String,
        require: true
    }, desc: {type:String,
        require:true

    }

});
const collection = new mongoose.model('collection', dSchema);
module.exports = collection;