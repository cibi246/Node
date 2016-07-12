console.log("Entering into server.js");
const express = require('express');
const bodyParser = require('body-parser'); 
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://admin:admin123@ds017185.mlab.com:17185/star-war-quotes',(err,database)=>{
	if(err) return console.log(err);
	db = database
	app.listen(3000, function(){
	console.log('listening on 3000');
});
});
const app = express();
var _dirname = "C:/Node JS";

app.set('view engine','ejs');
// res.render(view,locals);

app.get('/', (req,res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  })
});
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.post('/quotes',(req,res)=>{
	db.collection('quotes').save(req.body,(err,result)=>{
		if(err) return console.log(err);
		console.log('saved to database');
		res.redirect('/');
	})
});
