const express  = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5050;

// use cors as middleware 
app.use(cors());
app.use(express.json());
// creating hard coded user data 
const users = [
    {id:1, name:"anupama", email:"xyz@gmail.com"},
    {id:2, name:"riya", email:"riya@gmail.com"},
    {id:3, name:"priya", email:"priya@gmail.com"},
    {id:4, name:"tina", email:"tina@gmail.com"},
    {id:5, name:"mina", email:"mina@gmail.com"},
]

// default root route 
app.get('/',(req,res)=>{
    res.send('Server is running!');
})

// create a get api to get users data 
app.get('/users',(req,res)=>{
    res.send(users);
})
// create post api 
app.post('/users',(req,res)=>{
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    // send data to client side as well 
    res.send(newUser);
})

// To make this server runs we have to use listen with an optional callback function
app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`)
})