const express = require('express');
const mongoose = require('mongoose');

//create an express app
const app = express();

app.listen(3030, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", 3030);
})
