
//push button, launch function.  Document.ready = function(){} made the script wait until the page loaded first.  
//I was getting null errors because the script was trying to load elements that weren't on the page yet.

document.ready = function() {
var btn = document.getElementById('myBtn');
btn.onclick = fizzBuzz;
}

//Function starts
function fizzBuzz () {
   
   //Fetches what the user enters into text box
    var userNumber = document.getElementById('userInput').value;

    //Puts output into 'printout' div, or at least locates it first.  Also blarg.
    var blarg = document.getElementById('printout');
    
//for numbers 1 - 100
for (i = 1; i<=userNumber; i++) {
    	

	//if divisble by 3 and 5, fizzbuzz
	if (i % 3 === 0 && i % 5 === 0) {
		blarg.innerHTML = "Fizzbuzz";
	}

	// if the number is divisible by 3, Fizz
	else if (i % 3 === 0) {
        blarg.innerHTML = "Fizz";
	}

	// if divisible by 5, Buzz
	else if (i % 5 === 0) {
		blarg.innerHTML = "Buzz";
	}

	//otherwise, print numbers
	else {
		blarg.innerHTML = userNumber;
		
	}
}
}