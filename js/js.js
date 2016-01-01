var switchExplode = 1;
var switchXwing = 1;
var lastFunction;

function onStart() {
	tiefighter.play();
}

function clearInput() {
	$("#answer").val("");
}

function doAdd() {
	numOne = Math.floor((Math.random() * 9) +1);
	numTwo = Math.floor((Math.random() * 9) +1);
	sum = numOne + numTwo;
	
	if (numOne > numTwo) {
		$("#problem").text(numOne + " + " + numTwo + " =");
	} else {
		$("#problem").text(numTwo + " + " + numOne + " =");
	}
	$("#answer").focus();
	$("#enter").css("display", "block");
	
	lastFunction = "doAdd";
}

function doSub() {
	numOne = Math.floor((Math.random() * 9) +1);
	numTwo = Math.floor((Math.random() * 9) +1);
	
	if (numOne > numTwo) {
		$("#problem").text(numOne + " - " + numTwo + " =");
		difference = numOne - numTwo;
	} else {
		$("#problem").text(numTwo + " - " + numOne + " =");
		difference = numTwo- numOne;
	}
	$("#answer").focus();
	$("#enter").css("display", "block");
	
	lastFunction = "doSub";
}

function doMult() {
	numOne = Math.floor((Math.random() * 9) +1);
	numTwo = Math.floor((Math.random() * 9) +1);
	quotient = numOne * numTwo;
	
	if (numOne > numTwo) {
		$("#problem").text(numOne + " x " + numTwo + " =");
	} else {
		$("#problem").text(numTwo + " x " + numOne + " =");
	}
	$("#answer").focus();
	$("#enter").css("display", "block");
	
	lastFunction = "doMult";
}

function doDiv() {
	numTwo = Math.floor((Math.random() * 10) +1);
	numOne = numTwo * Math.floor((Math.random() * 10) +1);
	dividend = numOne / numTwo;
	
	$("#problem").text(numOne + " / " + numTwo + " =");
	$("#answer").focus();
	$("#enter").css("display", "block");
	
	lastFunction = "doDiv";
}

function enterAnswer() {	
	if (lastFunction == "doAdd") {
		checkAdd();
	} else if (lastFunction == "doSub") {
		checkSub();
	} else if (lastFunction == "doMult") {
		checkMult();
	} else if (lastFunction == "doDiv") {
		checkDiv();
	}
}

function checkAdd() {
	getAnswer = $("#answer").val();
	
	if (getAnswer == sum) {
		doAdd();
		clearInput();
		explodeTieFighter();
	} else {
		clearInput();
		explodeXwing();
		$("#answer").focus();
	}
}

function checkSub() {
	getAnswer = $("#answer").val();
	
	if (getAnswer == difference) {
		doSub();
		clearInput();
		explodeTieFighter();
	} else {
		clearInput();
		explodeXwing();
		$("#answer").focus();
	}
}

function checkMult() {
	getAnswer = $("#answer").val();
	
	if (getAnswer == quotient) {
		doMult();
		clearInput();
		explodeTieFighter();
	} else {
		clearInput();
		explodeXwing();
		$("#answer").focus();
	}
}

function checkDiv() {
	getAnswer = $("#answer").val();
	
	if (getAnswer == dividend) {
		doDiv();
		clearInput();
		explodeTieFighter();
	} else {
		clearInput();
		explodeXwing();
		$("#answer").focus();
	}
}

function explodeTieFighter() {
	lazer = document.getElementById("lazer");
	
	switch (switchExplode) {
		case 1:
			switchExplode == 1;
			lazer.play();
			$("#tie1").attr("src", "art/tieExplode.jpg");
			$("#tie1").fadeOut(1000);
			switchExplode = 2;
			break;
		case 2:
			switchExplode == 2;
			lazer.play();
			$("#tie2").attr("src", "art/tieExplode.jpg");
			$("#tie2").fadeOut(1000);
			switchExplode = 3;
			break;
		case 3:
			switchExplode == 3;
			lazer.play();
			$("#tie3").attr("src", "art/tieExplode.jpg");
			$("#tie3").fadeOut(1000);
			switchExplode = 4;
			break;
		case 4:
			switchExplode == 4;
			lazer.play();
			$("#tie4").attr("src", "art/tieExplode.jpg");
			$("#tie4").fadeOut(1000);
			switchExplode = 5;
			break;
		case 5:
			switchExplode == 5;
			lazer.play();
			$("#tie5").attr("src", "art/tieExplode.jpg");
			$("#tie5").fadeOut(1000);
			switchExplode = 6;
			break;
		case 6:
			switchExplode == 6;
			lazer.play();
			$("#tie6").attr("src", "art/tieExplode.jpg");
			$("#tie6").fadeOut(1000);
			$("#win").css("display", "block");
			$("#problem").css("display", "none");
			$("#answer").css("display", "none");
			$("#enter").css("display", "none");
			break;
	}
}

function explodeXwing() {
	
	switch (switchXwing) {
		case 1: 
			switchXwing == 1;
			tieLazer.play();
			$("#xwing1").attr("src", "art/tieExplode.jpg");
			$("#xwing1").fadeOut(1000);
			switchXwing = 2;
			break;
		case 2:
			switchXwing == 2;
			tieLazer.play();
			$("#xwing2").attr("src", "art/tieExplode.jpg");
			$("#xwing2").fadeOut(1000);
			switchXwing = 3;
			break;
		case 3:
			switchXwing == 3;
			tieLazer.play();
			$("#xwing3").attr("src", "art/tieExplode.jpg");
			$("#xwing3").fadeOut(1000);
			switchXwing = 4;
			break;
		case 4:
			switchXwing == 4;
			tieLazer.play();
			$("#xwing4").attr("src", "art/tieExplode.jpg");
			$("#xwing4").fadeOut(1000);
			switchXwing = 5;
			break;
		case 5:
			switchXwing == 5;
			tieLazer.play();
			$("#xwing5").attr("src", "art/tieExplode.jpg");
			$("#xwing5").fadeOut(1000);
			switchXwing = 6;
			break;
		case 6:
			switchXwing == 6;
			tieLazer.play();
			$("#xwing6").attr("src", "art/tieExplode.jpg");
			$("#xwing6").fadeOut(1000);
			$("#lose").css("display", "block");
			$("#problem").css("display", "none");
			$("#answer").css("display", "none");
			$("#enter").css("display", "none");
			break;
	}
}

function onDone() {
	location.reload();
}

