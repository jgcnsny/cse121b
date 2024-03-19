/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name : "Jillian Cansanay" ,
    photo : "images/profile.jpg" ,
    favoriteFood : [
        'Spaghetti', 
        'French Fries', 
        'Milkshake', 
        'Burger', 
        'Chocolate'
    ],
    hobbies : [
        'Singing',
        'Collecting Albums',
        'Playing Volleyabll',
        'Nature Walk'
    ],
    placesLived : [],
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place : 'Davao City',
        length : ' 18 months'
    }
);

myProfile.placesLived.push(
    {
        place : 'Laguna Philippines',
        length : ' 29 years'
    }
);

/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
imageElement = document.querySelector('#photo');
imageElement.setAttribute('src', myProfile.photo);
imageElement.setAttribute('alt', `Profile image of ${myProfile.name}`);

/* Favorite Foods List*/
myProfile.favoriteFood.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobbies => {
    let li = document.createElement('li');
    li.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector('#places-lived').append(dt,dd);
});


