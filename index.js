const express  = require('express');
const app = express();
const port = process.env.PORT || 5050;

app.get('/',(req,res)=>{
    res.send('Server is running!');
})

// To make this server runs we have to use listen with an optional callback function
app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`)
})