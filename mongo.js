const express=require('express')
const path=require('path');
const app=express();
const port=800;
const collection=require('./model/model')
require('./db/db');
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
    console.log(req.body);
    

    res.status(200).render('contact.pug',{'message':"submitted successfully"});

});

app.post('/',(req,res)=>{
    

    res.status(200).render('home.pug',{'message':"submitted successfully"});

});

app.listen(port,()=>{
    console.log(`successfully launched on ${port} port`);
});