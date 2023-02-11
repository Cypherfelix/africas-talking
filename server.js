const express= require('express');
const mongoose=require('mongoose');
const path= require('path');
const config =require('config');
const app = express();
app.use(express.json());

require ('dotenv').config()


// connecting to mongoDB and then running server on port 3000
const dbURI=config.get('dbURI');
const port=process.env.PORT

    app.get('/',(req,res)=>{
    res.send('Welcome to The Patient Platform!!')
  })
  app.listen(3000, ()=>{
    console.log('Server is running on Port 3000!!');
  })
  mongoose.connect(dbURI)
  .then((result) => app.listen(port))
  .catch((err) => console.log(err));
