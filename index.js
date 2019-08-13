var express = require('express');
var app = express()
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());



app.get('/', function(req, res) {
res.send('helooo there');
})
app.post('/', function(req, res) {
console.log(req.body);
res.send('post send ');
});
app.put('/', function(req, res) {

res.send('this is put');
});
app.delete('/', function(req, res) {

res.send('delete');
})

app.listen(3000);
