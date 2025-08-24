const mongoose = require('mongoose');

async function connectDB(){
   await mongoose.connect('mongodb+srv://kodr-2:YiHA4IBOhlYqXTVV@cluster0.og8btoq.mongodb.net/andromeda')
    .then(()=> {
        console.log("connect to DB")
    }).catch((err)=> {
        console.log(err);
        
    })
}

module.exports = connectDB