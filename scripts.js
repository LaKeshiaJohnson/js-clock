const secondHand = document.querySelector('.second-hand');


function setDate() {
	const now = new Date(); //grab current date

	const seconds = now.getSeconds(); // grab seconds of current minute
	const secondsDegrees = ((seconds / 60) * 360) + 90 // position on clock
	console.log("seconds", seconds); 
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
};

setInterval(setDate, 1000); 