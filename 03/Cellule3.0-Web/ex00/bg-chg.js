/**
*   JavaScript function named generateColor that generates a random hex color code.
*   Initializes a string variable letters containing hexadecimal digits.
*   Generates a random hex color by iterating 6 times, appending a random hexadecimal digit to the color variable each time.
*   Updates the text content of the element with the id colorCode to display the generated color.
*   Sets the background color of the body to the generated color.
 */
function generateColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	document.getElementById('colorCode').innerHTML = color;
	document.getElementsByTagName('body')[0].style.background = color;
}
