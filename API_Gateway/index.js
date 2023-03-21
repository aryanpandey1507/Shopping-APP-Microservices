const express = require('express');
const app = express();
app.use(express.json())
const cors = require('cors');
const proxy = require('express-http-proxy');
app.use(cors());

app.use('/customer',proxy('http://localhost:8004'))
app.use('/shopping',proxy('http://localhost:8003'))
app.use('/',proxy('http://localhost:8002'))






app.listen(8001,()=>{
    console.log("Gateway is listening at port 8001")
})