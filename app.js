const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.get('/test',(req,res)=>{
    res.send(200);
})


app.listen(port, function() {
    console.log('Server started on port: ' + port);
});