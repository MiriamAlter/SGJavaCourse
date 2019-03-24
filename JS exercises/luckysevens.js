function clearErrors() {
	for (var loopCounter = 0; loopCounter < document.forms["luckySevens"].elements.length; loopCounter++) {
		if (document.forms["luckySevens"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
				document.forms["luckySevens"].elements[loopCounter].parentElement.className = "col-sm-3";
		}
	}
}

function getResult() {
	clearErrors();
	
	var startingBet = parseInt(document.forms["luckySevens"]["startingBet"].value, 10);
	
	//for error message
	if (startingBet < 1) {
		alert("Please bet at least $1.");
		document.forms["luckySevens"]["startingBet"].parentElement.className = "col-sm-3 has-error";
		return false;
	}
	
	//playing
	var moneyRecord = [startingBet];
	for (var currentMoney = startingBet; currentMoney > 0;) {
		var currentRoll = (Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2);
		if (currentRoll == 7) {
			currentMoney += 4;
		} else {
			currentMoney--;
		}
		moneyRecord.push(currentMoney);
	}
	console.log(moneyRecord);
	
	//finding max
	var bestMoney = moneyRecord[0];
	for (var position = 0; position <= moneyRecord.length; position++) {
		if (moneyRecord[position] >= bestMoney) {
			bestMoney = moneyRecord[position];
		}
	}
	var bestRoll = moneyRecord.indexOf(bestMoney);
	
	document.getElementById("results").style.display = "block";
	document.getElementById("startingBetValue").innerText = "$" + startingBet + ".00";
	document.getElementById("totalRolls").innerText = (moneyRecord.length - 1);
	document.getElementById("bestMoney").innerText = "$" + bestMoney + ".00";
	document.getElementById("bestRoll").innerText = bestRoll;
	document.getElementById("playButton").innerText = "Play Again";
	
	return false;
}