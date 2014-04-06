var words = [];
var count = 0, mistakes = 0, total_length = 0, time = 60;

function newGame() {
	$(document).keypress(keyHandler);
	$('#status').hide();
	$('#newGame').hide();
	$('#results').hide();
	$('#incorrect').text(0);
	count = 0;
	mistakes = 0;
	total_length = 0;
	$.get("words.txt", function(x) {
		words = x.trim().split('\n');
		newTimer(time);
		newWord();
	});
}

function endGame() {
	// Disable keypresses
	$(document).off("keypress");
	// Show game over
	$('#word').hide();
	$('#status').text("Game over!");
	$('#status').show();
	$('#newGame').show();
	// Show results
	$('#results').html("WPM: " + (count / (time / 60)) + " <br/> " 
			+ "Avg word length: " + (total_length / count) + " <br/> "
			+ "Mistakes: " + mistakes); 
	$('#results').show();
}

function newWord() {
	var nw = words[Math.floor(Math.random()*words.length)];
	$("#incomplete").text(nw);
	$("#completed").text("");
	$('#word').show();
}

function keyHandler(e) {
	var key = String.fromCharCode(e.which);
	var word = $('#incomplete').text().trim();
	if (key == word.charAt(0)) {
		$('#incomplete').text(word.slice(1));
		$('#completed').append(key);
	} else {
		$("#incorrect").text(++mistakes);
	}
	
	var word = $('#incomplete').text().trim();
	console.log(word.length);
	if ( word.length == 0 ) {
		count++;
		total_length += $('#word').text().trim().length;
		newWord();	
	}
}
