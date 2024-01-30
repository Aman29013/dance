const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/dance')
.then(()=>{
    console.log('connect');
})
.catch((error)=>{
    console.log('error');
})
// const dSchema=new mongoose.Schema({
//    name:{type:String,
// required:true} ,
// email:{type:String,
// unique:true,
// require:true}

// });
// const collection=new mongoose.model('collection',dSchema);
// module.exports=collection;