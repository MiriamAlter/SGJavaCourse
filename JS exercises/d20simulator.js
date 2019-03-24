function rollad20() {
	var mod = prompt("Enter your modifier.");
	var roll = Math.floor(Math.random()*20)+1;
	var total = roll + Number(mod);
	if (mod === null) {
		console.log("End");
	} else if (isNaN(total)) {
		alert("Modifier must be a number.");
		var reroll = confirm("Roll again?");
		if (reroll) {
			rollad20();
			} else {
			console.log("End");
		}	
	} else if (roll == 20) {
		alert("CRITICAL HIT! You rolled a 20! Your total is " + total + ".");
		var reroll = confirm("Roll again?");
		if (reroll) {
			rollad20();
			} else {
			console.log("End");
		}
	} else if (roll == 1) {
		alert("CRITICAL FAIL! You rolled a 1! Your total is " + total + ".");
		var reroll = confirm("Roll again?");
		if (reroll) {
			rollad20();
			} else {
			console.log("End");
		}
	} else {
		alert("You rolled a " + roll + ". Your total is " + total + ".");
		var reroll = confirm("Roll again?");
		if (reroll) {
			rollad20();
			} else {
			console.log("End");
		}
	}
}

rollad20();