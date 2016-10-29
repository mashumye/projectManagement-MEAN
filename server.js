
var express =require('express');
var path = require('path');
var bodyParser =require('body-parser');
var cookieParser =require('cookie-parser');
var projects = require('./routes/projects.js');


var app = express();

app.set('view engine','html');
app.engine('html',require('ejs').__express);
app.set('views', __dirname+'/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'client')))

app.use('/api',projects);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

app.listen(3000,()=>{
    console.log('Server Listening at port 3000');
});

module.exports = app;