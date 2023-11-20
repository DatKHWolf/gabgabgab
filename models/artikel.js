const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const artikelSchema = new Schema({
    title:{
    type:String,
    required:true
},
    text:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:false
    }

})

module.exports=mongoose.model('Artikel', artikelSchema);
