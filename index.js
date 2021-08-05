const dotenv = require('dotenv');
dotenv.config();
const PORT=process.env.PORT||8080;
const db = require('./DB/index')
const exsprees=require('express');
const cors = require('cors');
const mongodbClient = require('mongodb').mongoClient;
const app = exsprees();
app.use(exsprees.json());
app.use(exsprees.urlencoded({extended:true}));
app.use(cors());
db.on('error',()=>{console.log('connection error')})
app.listen(PORT,()=>{
    console.log(`server live on port: ${PORT}`);
})

app.get('/',(req,res)=>{
    res.send('succes');
    connectAndAdd(res)
})

function connectAndAdd(resFromGet) {
    return mongodbClient(process.env.PORT.MONGODBURL,(error,dbResult)=>{
        if (error) console.log(error);
        const studentsCollection=dbResulte.db('blog').collection('student');
        const document ={'first_name':'juda','last_name':'ishta','age':28};
        studentsCollection.insertOne(document,(err,result)=>{
            if (err) console.log(err);
            resFromGet.send(result)
            console.log(result);
        })
    })
}