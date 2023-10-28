const express = require('express')
const router = express.Router()
const Data = require('./mongoose')
const nodemailer = require('nodemailer')

router.get('/getAll',async(req,res)=>{
    const data = await Data.find()
    res.send(data)
})


router.post('/postdata',async(req,res)=>{
    const data = await req.body
    try{
        const resData = await Data(data)
        console.log(resData)
        resData.save()
        res.send({resData,msg:'successs'})
         const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                 user: 'almaroofolarewaju@gmail.com',
                pass: 'Alfamurphy@1#'
              }
         });
            
             const mailOptions = {
               from: 'almaroofolarewaju@gmail.com',
               to: 'ayomiku@ymail.com',
              subject: 'Sending Email using Node.js',
              text: resData.email  +  resData.name,
            };
            
             transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
              } else {
                 console.log('Email sent: ' + info.response);
    }})
        
    }catch (e){
        res.send({e,msg:'not successsfully'})
    }
})

router.all('*',(req,res)=>{
  res.status(404).send('page not available')
})














module.exports = router