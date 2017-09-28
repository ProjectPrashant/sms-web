var express = require('express');
var app = express();
var port =process.env.PORT||8000;
// var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
// var appRoutes = require('./app/routes/api')(router);
var path=require('path');
// var Student = require("./models/student");

// app.use(morgan('dev'))
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(express.static(__dirname+ '/public')); 
// app.use('/api',appRoutes);
app.use('/', require('./routes'));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/new12',function(err){
    if(err){
        console.log("Not connnected to mongodb: " +err);
    }
    else{
        console.log("Successfully connected to mongodb");
    }
});
    



// app.get('*',function(req,res){
//     res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
// });

app.listen(port,function(){
    console.log("Running server" +port);
});

