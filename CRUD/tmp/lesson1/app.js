var express = require("express")
, ejs = require("ejs");
var app = express();
var root = __dirname
, port=3000;
app.use(express.static(root + "/public"));
app.set("views", root+"/views");
app.set("view engine","ejs");

app.listen(port, function listenCallback(){
	console.log("Express server is listening on port "+port);
	console.log("To test, browse to http://localhost:"+port);
});

app.get("/ejs_test", function ejs_testCallback(req,res){
	//res.send("Why, hello there!!");
	res.render("test");
});

app.get("/someJson",function someJsonCallback(req,res){
	res.json({
		"one":{
			"so":"cool"
		},
		"two":"super cool",
		"three": ["love","json","and", "javascript"]
	});
});

app.get("/beginning", function beginningCallback(req,res){
	res.send("<h1>This is just a beginning </h1><p>I love node</p>");
});