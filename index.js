const express = require("express")
const bodyParser = require('body-parser')

const imageUpload = require('./routes/imageUpload')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/imageUpload',imageUpload)

const port = 3000

app.get('/', (req,res) => {
    res.send("express start")
})

app.use(function(req,res,next) {
    var err = new Error ("Not Found");
    err.status = 404;
    next(err);
});

app.listen(port, () => {
    console.log("deep server start")
})