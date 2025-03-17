console.log(window);
console.log(document);

console.log(window.outerWidth);

document.querySelector('button').addEventListener('click', () => {
	window.alert('This is an alert');
});

// access the p element with the class width

const displayWidth = document.querySelector('.width');
const displayHeight = document.querySelector('.height');
const displayInnerHeight = document.querySelector('.innerHeight');
const displayInnerWidth = document.querySelector('.innerWidth');

displayWidth.innerText = window.outerWidth;
displayHeight.innerText = window.outerHeight;

displayInnerWidth.innerText = window.innerWidth;
displayInnerHeight.innerText = window.innerHeight;

console.log(document.location.port);
