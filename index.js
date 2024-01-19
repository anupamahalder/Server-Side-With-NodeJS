const express  = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5050;

// -----------Middleware---------
// use cors as middleware 
app.use(cors());
//To get the body of request from POST method
app.use(express.json());
dotenv.config();


// creating hard coded user data 
const users = [
    {id:1, name:"anupama", email:"xyz@gmail.com"},
    {id:2, name:"riya", email:"riya@gmail.com"},
    {id:3, name:"priya", email:"priya@gmail.com"},
    {id:4, name:"tina", email:"tina@gmail.com"},
    {id:5, name:"mina", email:"mina@gmail.com"},
]


const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.zyslczg.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // create database 
        const database = client.db('myDB');
        const dataCollection = database.collection('myData');

        app.get('/users', async(req,res)=>{
            const cursor = dataCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })
        app.post('/users', async(req,res)=>{
            const user = req.body;
            console.log('New User:', user);
            const result = await dataCollection.insertOne(user);
            res.send(result);
        })


    } finally {
        
    }
}
run().catch(console.dir);

// default root route 
app.get('/',(req,res)=>{
    res.send('Server is running!');
})

// To make this server runs we have to use listen with an optional callback function
app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`)
})