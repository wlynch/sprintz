var words = [];

$(document).ready(function() {
	newGame();
	$(document).keypress(keyHandler);
});

function newGame() {
	$.get("/words.txt", function(x) {
		words = x.trim().split('\n');
		//console.log(words);
		newTimer(2);
		newWord();
	});
}

function endGame() {
	$(document).off("keypress");
	$('#status').text("Game over!");
	$('#status').show();
}

function newWord() {
	var nw = words[Math.floor(Math.random()*words.length)];
	$("#incomplete").text(nw);
	$("#completed").text("");
}

function keyHandler(e) {
	var key = String.fromCharCode(e.which);
	var word = $('#incomplete').text().trim();
	if (key == word.charAt(0)) {
		$('#incomplete').text(word.slice(1));
		$('#completed').append(key);
	} else {
		$("#incorrect").text(parseInt($("#incorrect").text()) + 1);
	}
	
	var word = $('#incomplete').text().trim();
	console.log(word.length);
	if ( word.length == 0 ) {
		newWord();	
	}
}
