var hardBtn     = document.querySelector("#hard");
var easyBtn     = document.querySelector("#easy");
var newColorBtn = document.querySelector("#newColor");
var theColor    = document.querySelector("#theColor");
var colorsArea  = document.querySelector(".colorsArea");
var theStatus   = document.querySelector("#status");
var numOfSquares = 6;
var goalRGB     = [];
var sqList;
var colorFound = false;

hardBtn.classList.add("highlighted");
initialize();

hardBtn.addEventListener("click", function(){
	this.classList.add("highlighted");
	easyBtn.classList.remove("highlighted");
	numOfSquares = 6;

	if( colorFound ){
		initialize();
	} else {
		reset();
	}
	
});

easyBtn.addEventListener("click", function(){
	this.classList.add("highlighted");
	hardBtn.classList.remove("highlighted");
	numOfSquares = 3;
	if( colorFound ){
		initialize();
	} else {
		reset();
	}	
});

newColorBtn.addEventListener("click", function(){
	goalRGB = makeRGB();
	reset();
});


function initialize(){
	makeSquares(numOfSquares, 3);
	goalRGB = makeRGB();
	colorFound = false;
	theStatus.textContent = "";
	updateView();
}

function reset(){
	makeSquares(numOfSquares, 3);
	colorFound = false;
	theStatus.textContent = "";
	updateView();
}

function makeSquares( numberOfSquares, columns ){
	var rows    = Math.ceil( numberOfSquares/columns );
	colorsArea.innerHTML = "";

	for (var i = 0; i < rows; i++) {
		colorsArea.innerHTML += "<div class=\"row\"></div>"
		for (var j = 0; j < columns; j++) {
			if ( numberOfSquares > 0){
				document.querySelectorAll(".row")[i].innerHTML += "<div class=\"square\"></div>";
				numberOfSquares --;
			}
		}
	}

	sqList = document.querySelectorAll(".square");
	for (var i = 0; i < sqList.length; i++) {	
		sqList[i].addEventListener("click", function(){
			if ( stringRGB(goalRGB) !== this.style.backgroundColor && !colorFound ){
				this.style.opacity = 0;
				theStatus.textContent = "Try Again";
			} else if (!colorFound) {
				theStatus.textContent = "Guessed Currectly";
				//theStatus.style.color = "#34C866";
				document.querySelector("#colorChanges").style.backgroundColor = stringRGB(goalRGB);
				// color all with correct color
				for (var i = 0; i < sqList.length; i++) {
					sqList[i].style.backgroundColor = stringRGB(goalRGB);
					sqList[i].style.opacity = 100;
				}

				colorFound = true;
			}
		});
	}

}

function makeRGB(){
	var rgb = [];

	rgb[0] = Math.ceil(Math.random() * 255);
	rgb[1] = Math.ceil(Math.random() * 255);
	rgb[2] = Math.ceil(Math.random() * 255);

	return rgb;
}

function updateView(){
	var luckySquare; // the square that will have the goal color
	do {
		luckySquare = Math.round(Math.random() * sqList.length);
	} while ( luckySquare === sqList.length );

	theColor.textContent = stringRGB(goalRGB).toUpperCase();
	sqList[luckySquare].style.backgroundColor = stringRGB(goalRGB);

	for (var i = 0; i < sqList.length; i++) {
		if ( i !== luckySquare ){
			console.log(luckySquare, i);
			sqList[i].style.backgroundColor = stringRGB( makeRGB() );
		}
	}
}

function stringRGB(rgbArray) {
	return "rgb(" + rgbArray[0] + ", " + rgbArray[1] + ", " + rgbArray[2] + ")";
}