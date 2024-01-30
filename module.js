const mongoose=require('mongoose');
const contactSchema=new mongoose.Schema({
   Name:{type:'string',
        require:true},
    phone:{type:'number',

        require:true

    },
    email:{type:'string',
        unique:true,
        require:true

    },
    desc:{type:'string',
    require:true},
    address:{type:'string',
    require:true}


});
const newContact=mongoose.model('contact',contactSchema);
module.exports=newContact;