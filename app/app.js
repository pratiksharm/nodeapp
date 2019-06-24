const express = require('express');
const app = express();
app.set('views', './views')
app.set('view engine', 'ejs');


app.get('/',function(req, res){
    res.sendFile(__dirname +'/index.html');
});
app.get('/contact',function(req, res){
    res.sendFile(__dirname +'/contact.html');
});

app.get('/profile/:name',function(req, res){
    const data= {age: 19, job:'student', hobbies:['eating', 'fighting','fishing']};
    res.render('profile', {person: req.params.name, data: data});
});
app.listen(8080);
