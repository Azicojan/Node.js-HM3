
let express = require('express');
let app = express();
const path = require('path');
const port = 3000;
const fs = require('fs');
const fs2 = require('fs');
const fs3 = require('fs');
const fs4 = require('fs');
const fs5 = require('fs');


fs.writeFile('web.txt', "Good morning, sir. This is Web speaking. How can I help you today?", function(err){
    if(err) throw err;
    console.log('Saved');
});

app.get('/web', (req, res) => {
    res.sendFile(path.join(__dirname+'/web.txt'));
});



fs2.writeFile('csharp.txt', "Good morning, sir. This is Csharp speaking. How can I be of assistance to you?", function(err){
    if(err) throw err;
    console.log('Saved');
});

app.get('/csharp', (req, res) => {
    res.sendFile(path.join(__dirname+'/csharp.txt'));
});



fs3.writeFile('gamedev.txt', "Good morning, sir. This is GameDev speaking. What can I do for you today?", function(err){
    if(err) throw err;
    console.log('Saved');
});

app.get('/gamedev', (req, res) => {
    res.sendFile(path.join(__dirname+'/gamedev.txt'));
});



fs4.writeFile('database.txt', "Good morning, sir. This is DataBase speaking. How can I assist you?", function(err){
    if(err) throw err;
    console.log('Saved');
});

app.get('/database', (req, res) => {
    res.sendFile(path.join(__dirname+'/database.txt'));
});


fs5.writeFile('index.html', "<h2>Hi, it's a beautiful day today, isn't?</h2>", function(err){
    if(err) throw err;
    console.log('Saved');
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});





app.use(function(req, res){
    res.status(404).send('<h2>Sorry, your request is inaccessible.</h2>');
})


app.listen (port, ()=>{
    console.log(`Example app is listening on port ${port}`)
})

