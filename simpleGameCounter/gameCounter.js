// Views Variables
var maxView         = document.querySelector("#max");
var firstScore      = document.querySelector("#firstScore");
var secondScore     = document.querySelector("#secondScore");

// Action Objects Variables
var firstBtn        = document.querySelector("#firstPlayer");
var secondBtn       = document.querySelector("#secondPlayer");
var resetBtn        = document.querySelector("#reset");
var maxChooser      = document.querySelector("#maxChooser");

// Counting Variables
var theMaxValue = 5;

// setting all default parmeters
defaults();
maxView.textContent = maxChooser.value = theMaxValue;

// change the max plays value according to maxChooser
maxChooser.addEventListener("change", function(){
	maxView.textContent = this.value;
	defaults();
});

// incrementing player 1 score
firstBtn.addEventListener("click", function(){
	if (parseInt(firstScore.textContent, 10) < parseInt(max.textContent, 10) 
		&& parseInt(secondScore.textContent, 10) < parseInt(max.textContent, 10)){
		firstScore.textContent = parseInt(firstScore.textContent, 10) + 1;
	}

	switchColors();
});

// incrementing player 2 score
secondBtn.addEventListener("click", function(){
	if (parseInt(firstScore.textContent, 10) < parseInt(max.textContent, 10) 
		&& parseInt(secondScore.textContent, 10) < parseInt(max.textContent, 10)){
		secondScore.textContent = parseInt(secondScore.textContent, 10) + 1;
	}
	switchColors();
});

// reset
reset.addEventListener("click", function(){
	defaults();
	maxView.textContent = maxChooser.value = theMaxValue;
});

// switch color function
function switchColors(){
	if (parseInt(firstScore.textContent, 10) === parseInt(max.textContent, 10)){
		firstScore.classList.add("won");
		secondScore.classList.add("lost");
	} else if (parseInt(secondScore.textContent, 10) === parseInt(max.textContent, 10)){
		firstScore.classList.add("lost");
		secondScore.classList.add("won");
	}
}

// default 
function defaults(){
	// setting the default max plays
	firstScore.classList.remove("won");
	secondScore.classList.remove("lost");
	firstScore.classList.remove("lost");
	secondScore.classList.remove("won");
	firstScore.textContent = 0;
	secondScore.textContent = 0;
}