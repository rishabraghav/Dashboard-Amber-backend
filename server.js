const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();


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