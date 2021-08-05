const mongoose = require('mongoose');
const DBConcoctionString =process.env.MONGODBURL;

mongoose.connect(DBConcoctionString,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log('mongodb connected ...'))
.catch(error=>{
    console.error('connection error' , error.massage);
})

module.exports = mongoose.connection;