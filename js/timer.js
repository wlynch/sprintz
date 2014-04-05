var counter;

function newTimer(time) {
	$('#timer').text(time);
	counter=setInterval(timer, 1000); //1000 will  run it every 1 second
}

function timer() {
	var count = parseInt($('#timer').text())
	count=count-1;
	$('#timer').text(count);
	if (count <= 0) {
		clearInterval(counter);

		return;
	}
}
