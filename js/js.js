jQuery(function () {
    objStarWars.tiefighterAudio = document.getElementById("tiefighter");
	objStarWars.lazer = document.getElementById("lazer");
	objStarWars.tieLazer = document.getElementById("tielazer");
	objStarWars.objAnswer = $("#answer");
	objStarWars.objEnter = $("#enter");
	objStarWars.objProblem = $("#problem");
	objStarWars.arrTieFighters = $("#tiefighters").find("img");
	objStarWars.arrXwings = $("#xwings").find("img");
	objStarWars.objWin = $("#win");
	objStarWars.objLose = $("#lose");
	objStarWars.arrOperationButtons = $("#operations").find(".button");
	objStarWars.arrResetButtons = $(".js-reset");
	objStarWars.tiefighterAudio.play();
	objStarWars.addEvents();
});

var objStarWars = objStarWars || {};

objStarWars.switchExplode = 0;
objStarWars.switchXwing = 0;
objStarWars.lastFunction = "";

objStarWars.addEvents = function() {
	objStarWars.objEnter.click(function(e) {
		objStarWars.enterAnswer();
	});

	objStarWars.arrOperationButtons.click(function(e) {
		//objStarWars.arrOperationButtons.addClass("hide").eq(objStarWars.arrOperationButtons.index(this)).removeClass("hide");
		objStarWars.arrOperationButtons.addClass("hide");
		switch (objStarWars.arrOperationButtons.index(this)) {
			case 0:
				objStarWars.doAdd();
				break;
			case 1:
				objStarWars.doSub();
				break;
			case 2:
				objStarWars.doMult();
				break;
			case 3:
				objStarWars.doDiv();
				break;
		}
	});

	objStarWars.arrResetButtons.click(function(e) {
		objStarWars.resetGame();
	});
};

objStarWars.clearInput = function() {
	objStarWars.objAnswer.val("");
};

objStarWars.doAdd = function() {
	var numOne = Math.floor((Math.random() * 9) +1);
	var numTwo = Math.floor((Math.random() * 9) +1);
	objStarWars.sum = numOne + numTwo;

	if (numOne > numTwo) {
		objStarWars.objProblem.text(numOne + " + " + numTwo + " =");
	} else {
		objStarWars.objProblem.text(numTwo + " + " + numOne + " =");
	}
	objStarWars.objAnswer.focus();
	objStarWars.objEnter.addClass("ready");

	objStarWars.lastFunction = "doAdd";
};

objStarWars.doSub = function() {
	var numOne = Math.floor((Math.random() * 9) +1);
	var numTwo = Math.floor((Math.random() * 9) +1);

	if (numOne > numTwo) {
		objStarWars.objProblem.text(numOne + " - " + numTwo + " =");
		objStarWars.difference = numOne - numTwo;
	} else {
		objStarWars.objProblem.text(numTwo + " - " + numOne + " =");
		objStarWars.difference = numTwo- numOne;
	}
	objStarWars.objAnswer.focus();
	objStarWars.objEnter.addClass("ready");

	objStarWars.lastFunction = "doSub";
};

objStarWars.doMult = function() {
	var numOne = Math.floor((Math.random() * 9) +1);
	var numTwo = Math.floor((Math.random() * 9) +1);
	objStarWars.product = numOne * numTwo;

	if (numOne > numTwo) {
		objStarWars.objProblem.text(numOne + " x " + numTwo + " =");
	} else {
		objStarWars.objProblem.text(numTwo + " x " + numOne + " =");
	}
	objStarWars.objAnswer.focus();
	objStarWars.objEnter.addClass("ready");

	objStarWars.lastFunction = "doMult";
};

objStarWars.doDiv = function() {
	var numTwo = Math.floor((Math.random() * 10) +1);
	var numOne = numTwo * Math.floor((Math.random() * 10) +1);
	objStarWars.quotient = numOne / numTwo;

	objStarWars.objProblem.text(numOne + " / " + numTwo + " =");
	objStarWars.objAnswer.focus();
	objStarWars.objEnter.addClass("ready");

	objStarWars.lastFunction = "doDiv";
};

objStarWars.enterAnswer = function() {
	if (objStarWars.lastFunction == "doAdd") {
		objStarWars.checkAdd();
	} else if (objStarWars.lastFunction == "doSub") {
		objStarWars.checkSub();
	} else if (objStarWars.lastFunction == "doMult") {
		objStarWars.checkMult();
	} else if (objStarWars.lastFunction == "doDiv") {
		objStarWars.checkDiv();
	}
};

objStarWars.checkAdd = function() {
	var getAnswer = objStarWars.objAnswer.val();

	if (getAnswer == objStarWars.sum) {
		objStarWars.doAdd();
		objStarWars.clearInput();
		objStarWars.explodeTieFighter();
	} else {
		objStarWars.clearInput();
		objStarWars.explodeXwing();
		objStarWars.objAnswer.focus();
	}
};

objStarWars.checkSub = function() {
	var getAnswer = objStarWars.objAnswer.val();

	if (getAnswer == objStarWars.difference) {
		objStarWars.doSub();
		objStarWars.clearInput();
		objStarWars.explodeTieFighter();
	} else {
		objStarWars.clearInput();
		objStarWars.explodeXwing();
		objStarWars.objAnswer.focus();
	}
};

objStarWars.checkMult = function() {
	var getAnswer = objStarWars.objAnswer.val();

	if (getAnswer == objStarWars.product) {
		objStarWars.doMult();
		objStarWars.clearInput();
		objStarWars.explodeTieFighter();
	} else {
		objStarWars.clearInput();
		objStarWars.explodeXwing();
		objStarWars.objAnswer.focus();
	}
};

objStarWars.checkDiv = function() {
	var getAnswer = objStarWars.objAnswer.val();

	if (getAnswer == objStarWars.quotient) {
		objStarWars.doDiv();
		objStarWars.clearInput();
		objStarWars.explodeTieFighter();
	} else {
		objStarWars.clearInput();
		objStarWars.explodeXwing();
		objStarWars.objAnswer.focus();
	}
};

objStarWars.explodeTieFighter = function() {
	objStarWars.arrTieFighters.eq(objStarWars.switchExplode).attr("src", "art/tieexplode.jpg");
	objStarWars.arrTieFighters.eq(objStarWars.switchExplode).fadeOut(1000);
	objStarWars.lazer.play();
	objStarWars.switchExplode = objStarWars.switchExplode + 1;
	if (objStarWars.switchExplode > 5) {
		objStarWars.objWin.addClass("show");
		objStarWars.objProblem.addClass("hide");
		objStarWars.objAnswer.addClass("hide");
		objStarWars.objEnter.removeClass("ready");
	}
};

objStarWars.explodeXwing = function() {
	objStarWars.arrXwings.eq(objStarWars.switchXwing).attr("src", "art/tieexplode.jpg");
	objStarWars.arrXwings.eq(objStarWars.switchXwing).fadeOut(1000);
	objStarWars.tieLazer.play();
	objStarWars.switchXwing = objStarWars.switchXwing + 1;
	if (objStarWars.switchXwing > 5) {
		objStarWars.objLose.addClass("show");
		objStarWars.objProblem.addClass("hide");
		objStarWars.objAnswer.addClass("hide");
		objStarWars.objEnter.removeClass("ready");
	}
};

objStarWars.resetGame = function() {
	objStarWars.switchExplode = 0;
	objStarWars.switchXwing = 0;
	objStarWars.arrOperationButtons.removeClass("hide");
	objStarWars.objProblem.text("");
	objStarWars.objProblem.removeClass("hide");
	objStarWars.objAnswer.removeClass("hide");
	objStarWars.arrTieFighters.attr("src", "art/tiefighter.jpg").fadeIn(1000);
	objStarWars.arrXwings.attr("src", "art/xwing.jpg").fadeIn(1000);
	objStarWars.objLose.removeClass("show");
	objStarWars.objWin.removeClass("show");
};

/*
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
			$("#tie1").attr("src", "art/tieexplode.jpg");
			$("#tie1").fadeOut(1000);
			switchExplode = 2;
			break;
		case 2:
			switchExplode == 2;
			lazer.play();
			$("#tie2").attr("src", "art/tieexplode.jpg");
			$("#tie2").fadeOut(1000);
			switchExplode = 3;
			break;
		case 3:
			switchExplode == 3;
			lazer.play();
			$("#tie3").attr("src", "art/tieexplode.jpg");
			$("#tie3").fadeOut(1000);
			switchExplode = 4;
			break;
		case 4:
			switchExplode == 4;
			lazer.play();
			$("#tie4").attr("src", "art/tieexplode.jpg");
			$("#tie4").fadeOut(1000);
			switchExplode = 5;
			break;
		case 5:
			switchExplode == 5;
			lazer.play();
			$("#tie5").attr("src", "art/tieexplode.jpg");
			$("#tie5").fadeOut(1000);
			switchExplode = 6;
			break;
		case 6:
			switchExplode == 6;
			lazer.play();
			$("#tie6").attr("src", "art/tieexplode.jpg");
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
			$("#xwing1").attr("src", "art/tieexplode.jpg");
			$("#xwing1").fadeOut(1000);
			switchXwing = 2;
			break;
		case 2:
			switchXwing == 2;
			tieLazer.play();
			$("#xwing2").attr("src", "art/tieexplode.jpg");
			$("#xwing2").fadeOut(1000);
			switchXwing = 3;
			break;
		case 3:
			switchXwing == 3;
			tieLazer.play();
			$("#xwing3").attr("src", "art/tieexplode.jpg");
			$("#xwing3").fadeOut(1000);
			switchXwing = 4;
			break;
		case 4:
			switchXwing == 4;
			tieLazer.play();
			$("#xwing4").attr("src", "art/tieexplode.jpg");
			$("#xwing4").fadeOut(1000);
			switchXwing = 5;
			break;
		case 5:
			switchXwing == 5;
			tieLazer.play();
			$("#xwing5").attr("src", "art/tieexplode.jpg");
			$("#xwing5").fadeOut(1000);
			switchXwing = 6;
			break;
		case 6:
			switchXwing == 6;
			tieLazer.play();
			$("#xwing6").attr("src", "art/tieexplode.jpg");
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

*/
