const mongoose = require('mongoose');

async function connectDB(){
   await mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        console.log("connect to DB")
    }).catch((err)=> {
        console.log(err);
        
    })
}

module.exports = connectDB