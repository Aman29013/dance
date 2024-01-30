const express=require('express');
const mongoose=require("mongoose");
const path=require('path');
const newContact = require('./module');
const app=express();
const port=800;
a=mongoose.connect("mongodb://localhost:27017/contact");

app.use("/static",express.static('static'));
app.use(express.urlencoded());

app.set('view engine','pug');
app.set('views',path.join(__dirname, 'template'));

app.get('/',(req,res)=>{
    

    res.status(200).render('home.pug',{'message':"submitted successfully"});

});
app.get('/contact',(req,res)=>{
    

    res.status(200).render('contact.pug',{'message':"submitted successfully"});

});
app.post('/contact',(req,res)=>{
// const b=req.body;
//     // console.log(req.body);
//     const detail=new newContact({Name:b.Name,
//     phone:b.phone,
// email:b.email,
// address:b.address,
// desc:b.desc});
const detail=new newContact(req.body);
detail.save()
.then(()=>{
    res.send('submitted successfully')
}).catch(()=>{
    res.status(400).send('error')
});
    

    // res.status(200).render('contact.pug',{'message':"submitted successfully"});

});

app.post('/',(req,res)=>{
    

    res.status(200).render('home.pug',{'message':"submitted successfully"});

});

app.listen(port,()=>{
    console.log(`successfully launched on ${port} port`);
});
