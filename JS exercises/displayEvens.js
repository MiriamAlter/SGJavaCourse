function clear() {
	
	document.getElementById("finalList").innerHTML = ("")
	
	for (var loopCounter = 0; loopCounter < document.forms["displayEvens"].elements.length; loopCounter++) {
		if (document.forms["displayEvens"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
				document.forms["displayEvens"].elements[loopCounter].parentElement.className = "col-sm-8";
		}
	}
}


function getResult () {
	var startingValue = Number(document.forms["displayEvens"]["startingNumber"].value);
	var endingValue = Number(document.forms["displayEvens"]["endingNumber"].value);
	var stepValue = Number(document.forms["displayEvens"]["step"].value);
	
	clear();
	
	if (isNaN(startingValue) || startingValue == "") {
		alert("Entries must be numeric.");
		document.forms["displayEvens"]["startingNumber"].parentElement.className = "col-sm-8 has-error";
		return false;
	}
	if (isNaN(endingValue) || endingValue == "") {
		alert("Entries must be numeric.");
		document.forms["displayEvens"]["endingNumber"].parentElement.className = "col-sm-8 has-error";
		return false;
	}
	if (isNaN(stepValue) || stepValue == "") {
		alert("Entries must be numeric.");
		document.forms["displayEvens"]["step"].parentElement.className = "col-sm-8 has-error";
		return false;
	}
	if (stepValue <= 0) {
		alert("Step must be a positive number.");
		document.forms["displayEvens"]["step"].parentElement.className = "col-sm-8 has-error";
		return false;
	}
	if (startingValue >= endingValue) {
		alert("Ending number must be greater than starting number.");
		document.forms["displayEvens"]["endingNumber"].parentElement.className = "col-sm-8 has-error";
		return false;
	}
	
	var resultArray = [];
	
	for (var testNumber = startingValue; testNumber <= endingValue; testNumber += stepValue) {
		if (testNumber % 2 == 0) {
			resultArray.push(testNumber);
		}
	}
	
	if (resultArray.length == 0) {
		for (var testNumber = startingValue + 1; testNumber <= endingValue; testNumber += stepValue) {
			if (testNumber % 2 == 0) {
				resultArray.push(testNumber);
			}
		}
		document.getElementById("finalList").innerHTML += ('<li class="list-group-item" style="color:red;">Note: No even numbers were found. Starting from ' + (startingValue + 1) + ' instead.</li>');
	}
	
	document.getElementById("results").style.display = "block";
	document.getElementById("startingValue").innerText = startingValue;
	document.getElementById("endingValue").innerText = endingValue;
	document.getElementById("stepValue").innerText = stepValue;
	
	for (var loopCounter = 0; loopCounter < resultArray.length; loopCounter++ ) {
		document.getElementById("finalList").innerHTML += ('<li class="list-group-item">' + resultArray[loopCounter] + '</li>');
	}
	
	return false;
}