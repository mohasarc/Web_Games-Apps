var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended : true }));
app.set("view engine", "ejs");

// my names storage
var storage = [ 
				{name : "ahmed"},
				{name : "Jasim"}
				];

// the root
app.get("/", function(req, res){
	res.render("home", {storage : storage});
});

// add a friend route
app.post("/addFriend", function(req, res){
	storage.push({name : req.body.name});
	res.redirect("/")
});

// starting the server on port 8080
app.listen("8080", function() {
	console.log("server has started!!!");
});