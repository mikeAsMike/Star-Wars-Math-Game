jQuery(function () {
    objStarWars.tiefighterAudio = document.getElementById("tiefighter");
	objStarWars.lazer = document.getElementById("lazer");
	objStarWars.tieLazer = document.getElementById("tielazer");
	objStarWars.objAnswer = $("#answer");
	objStarWars.objEnter = $("#enter");
	objStarWars.objQuit = $("#quit");
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
	
	objStarWars.objQuit.click(function(e) {
		window.location.reload(false);
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

	objStarWars.objAnswer.keypress(function(e) {
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13'){
			objStarWars.enterAnswer();
		}
	});
};

objStarWars.clearInput = function() {
	objStarWars.objAnswer.val("");
};

objStarWars.toggleClass = function() {
	objStarWars.objAnswer.focus();
	objStarWars.objEnter.addClass("ready");
	objStarWars.objQuit.addClass("ready");
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
	objStarWars.toggleClass();

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
	objStarWars.toggleClass();

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
	objStarWars.toggleClass();

	objStarWars.lastFunction = "doMult";
};

objStarWars.doDiv = function() {
	var numTwo = Math.floor((Math.random() * 10) +1);
	var numOne = numTwo * Math.floor((Math.random() * 10) +1);
	objStarWars.quotient = numOne / numTwo;

	objStarWars.objProblem.text(numOne + " / " + numTwo + " =");
	
	objStarWars.toggleClass();

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

objStarWars.correct = function() {
	objStarWars.clearInput();
	objStarWars.explodeTieFighter();
};

objStarWars.incorrect = function() {
	objStarWars.clearInput();
	objStarWars.explodeXwing();
	objStarWars.objAnswer.focus();
};

objStarWars.badEntry = function() {
	alert("You need to enter a number");
	objStarWars.objAnswer.focus();
	objStarWars.clearInput();
};

objStarWars.checkAdd = function() {
	var getAnswer = objStarWars.objAnswer.val();
	var test = $.isNumeric(getAnswer);
	
	if (test === false) {
		objStarWars.badEntry();
	} else if (getAnswer == objStarWars.sum) {
		objStarWars.doAdd();
		objStarWars.correct();
	} else {
		objStarWars.incorrect();
	}
};

objStarWars.checkSub = function() {
	var getAnswer = objStarWars.objAnswer.val();
	var test = $.isNumeric(getAnswer);

	if (test === false) {
		objStarWars.badEntry();
	} else if (getAnswer == objStarWars.difference) {
		objStarWars.doSub();
		objStarWars.correct();
	} else {
		objStarWars.incorrect();
	}
};

objStarWars.checkMult = function() {
	var getAnswer = objStarWars.objAnswer.val();
	var test = $.isNumeric(getAnswer);
	
	if (test === false) {
		objStarWars.badEntry();
	} else if (getAnswer == objStarWars.product) {
		objStarWars.doMult();
		objStarWars.correct();
	} else {
		objStarWars.incorrect();
	}
};

objStarWars.checkDiv = function() {
	var getAnswer = objStarWars.objAnswer.val();
	var test = $.isNumeric(getAnswer);
	
	if (test === false) {
		objStarWars.badEntry();
	} else if (getAnswer == objStarWars.quotient) {
		objStarWars.doDiv();
		objStarWars.correct();
	} else {
		objStarWars.incorrect();
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
