// console.log(window);
// console.log(document);

// console.log(window.outerWidth);

// document.querySelector('button').addEventListener('click', () => {
// 	window.alert('This is an alert');
// });

// // access the p element with the class width

// const displayWidth = document.querySelector('.width');
// const displayHeight = document.querySelector('.height');
// const displayInnerHeight = document.querySelector('.innerHeight');
// const displayInnerWidth = document.querySelector('.innerWidth');

// displayWidth.innerText = window.outerWidth;
// displayHeight.innerText = window.outerHeight;

// displayInnerWidth.innerText = window.innerWidth;
// displayInnerHeight.innerText = window.innerHeight;

// console.log(document.location.port);

// creating elements using js

const randomText = document.createElement('p');

// <p></p>

// assign random text to it

// randomText.textContent = "";
randomText.innerText = 'The quick brown fox jumped over the lazy dog';

// get access to the html element

const container = document.querySelector('.container');

container.append(randomText);
// container.appendChild(randomText);

console.log(container);

// create a list item for your shopping cart

const cart = document.createElement('ul');
const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');
const item4 = document.createElement('li');
const item5 = document.createElement('li');

item1.textContent = 'Soap';
item2.textContent = 'Sugar';
item3.textContent = 'Bread';
item4.textContent = 'Milk';
item5.textContent = 'Peanut Butter';

cart.append(item1, item2, item3, item4, item5);

container.append(cart);

// get access to the button

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
	alert('You clicked me!');
});
