const express = require('express');
const ejs = require('ejs');
const matchRoutes = require('./routes/matchRoute');
const app = express();
const methodOverride = require('method-override');
let port = 3000;
let host = 'localhost';

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// app.get('/', (req, res) => {
//     res.statusCode = 200;
//     res.send('home page');

// });

app.use('/connection', matchRoutes);
app.use((req,res,next) => {
    let error = new Error('The server cannot found' + req.url);
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    if(!error.status){
        error.status = 500;
        error.message= ('INTERNAL SERVER ERROR');
    }
    res.status(error.status);
    res.render('error', {error : error});
});

app.get('/about', (req, res) => {
    res.send('about page');
});

app.get('/', (req,res) =>{
    // res.sendFile('./views/index.html', {root: __dirname });
    res.render('index');
});
app.get('/contact', (req, res) => {
    res.send('contact page');
});



app.listen(port,host, () => {
    console.log('Current port number is ', port);
});