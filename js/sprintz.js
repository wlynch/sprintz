
$(document).ready(function() {
	newWord();
	$(document).keypress(keyHandler);
});

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

var words = ["asdf", "qwer", "zxcv"]

function newWord() {
	var nw = words[Math.floor(Math.random()*words.length)];
	$("#incomplete").text(nw);
	$("#completed").text("");
}
