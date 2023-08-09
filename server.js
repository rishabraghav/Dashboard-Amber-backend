const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

app.use(cors({
    origin: ['http://localhost:3000', 'https://amberpass-dashboard.netlify.app']
  }));

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
//   });

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
}).then(() => {
    console.log("Successfully connected to mongoDB");
}).catch ((err)=> {
    console.error("error in connecting mongoDB: ", err );
});

app.get('/', (req, res) => {
    res.send("please add '/dashboard' to the url");
});



const salesRoutes = require('./Routes/salesRoutes');

app.use('/dashboard', salesRoutes);



app.listen(3001, () => {
    console.log("Server started at port 3001");
});