var numberofColor=6;
var color = generateColorArray(numberofColor);
			[ 
			"rgb(255, 0, 0)",
			"rgb(0, 255, 0)",
			"rgb(0, 0, 255)",
			"rgb(255, 255, 0)",
			"rgb(255, 0, 255)",
			"rgb(0, 255, 255)"
		]

var squares = document.querySelectorAll(".square");
var colorChosen = randomColor();      //color[4];
var targetColor = document.querySelector(".targetColor");
var message  = document.querySelector(".message");
var heading = document.querySelector("h1");
var resetButton = document.querySelector(".reset");
var easyButton = document.querySelector(".easyButton");
var hardButton = document.querySelector(".hardButton");

easyButton.addEventListener("click",function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numberofColor = 3;
	color= generateColorArray(numberofColor);
	colorChosen = randomColor();
	targetColor.textContent = colorChosen;
	message.textContent = "";
	heading.style.backgroundColor = "#232323";
	for(var i=0 ; i < 3 ; i++)
	{
		squares[i].style.backgroundColor = color[i];
	}
	for(var i=3 ; i < squares.length ; i++)
	{
		squares[i].style.display = "none";
	}

});

hardButton.addEventListener("click",function(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	numberofColor = 6;
	color= generateColorArray(numberofColor);
	colorChosen = randomColor();
	targetColor.textContent = colorChosen;
	message.textContent = "";
	heading.style.backgroundColor = "#232323";
	for(var i=0 ; i < squares.length ; i++)
	{
		squares[i].style.backgroundColor = color[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click",function(){
	 color = generateColorArray(numberofColor);

	 for(var i=0 ; i < squares.length ; i++)
	{
		squares[i].style.backgroundColor = color[i];
	}
	colorChosen = randomColor();

	targetColor.textContent = colorChosen;
	message.textContent = "";
	resetButton.textContent ="NEW COLORS";
	heading.style.backgroundColor = "#232323";

});


for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor = color[i];

	squares[i].addEventListener("click",function(){
		var boxColor = this.style.backgroundColor;
		
		if(boxColor === colorChosen){
			//alert("RIGHT COLOR");

			message.textContent = "CORRECT."
			changeBoxColor();
			//call function to change all box color to colorchosen.
			heading.style.backgroundColor = colorChosen;
			resetButton.textContent = "PLAY AGAIN??";
		}
		else{
			// alert("CHOOSE AGAIN");    
			this.style.backgroundColor = "#232323";
			message.textContent = "TRY AGAIN."
 		}
	});
}

targetColor.textContent = colorChosen;

function changeBoxColor(){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colorChosen;
	}
}

function randomColor(){
	var index = Math.floor(Math.random()*color.length);
	return color[index];
}

function generateColorArray(n){
	var array = [];

	for(var i=0;i<n;i++){
		array.push(generateColor());
	}
	return array;
}

function generateColor(){
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	var colorGenerated = "rgb(" + red + ", " + green + ", " + blue + ")";
	return colorGenerated;
}