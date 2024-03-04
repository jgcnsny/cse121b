/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */



/* Step 2 - Variables */
let fullName = 'Jillian Cansanay';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/profile.jpg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.getElementById("profile-image");




/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);





/* Step 5 - Array */

let foodArray = ['Spaghetti', 'French Fries', 'Milkshake', 'Burger', 'Chocolate'];
let favFood = 'Sushi'
foodElement.innerHTML = foodArray;
foodArray.push(favFood);
foodElement.innerHTML += `<br>${foodArray}`;
foodArray.shift();
foodElement.innerHTML += `<br>${foodArray}`;
foodArray.pop();
foodElement.innerHTML += `<br>${foodArray}`;





