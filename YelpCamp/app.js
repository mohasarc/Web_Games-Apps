var express = require("express");
var app     = express();
var bodyParser = require("body-parser")

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// campground list
	var campgrounds = [ 
						{name : "Sahi Laymoon" , image : "https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022__340.jpg"},
						{name : "Khashoog sloon" , image : "https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906__340.jpg"},
						{name : "boby tahy" , image : "https://cdn.pixabay.com/photo/2016/11/21/14/31/vw-bus-1845719__340.jpg"},
						{name : "lala noon" , image : "https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929__340.jpg"},
						{name : "there good" , image : "https://cdn.pixabay.com/photo/2018/12/24/22/19/camping-3893587__340.jpg"},
						];

// the root route
app.get("/", function(req, res){
	res.render("landing");
});

// the campGrounds page
app.get("/campgrounds", function(req, res){
	res.render("campgrounds", {campgrounds : campgrounds})
});

// the campground post request
app.post("/campgrounds", function(req, res){
	var newName = req.body.name;
	var newImage = req.body.image;
	var newCampGround = {name : newName, image : newImage};
	campgrounds.push(newCampGround);
	res.redirect("/campgrounds");
});

// add a new camp ground
app.get("/campgrounds/new", function(req, res){
	res.render("campgroundsnew");
});


// starting the server
app.listen(8080, function(){
	console.log("server started!!");
});