// import classes and css files
import '../scss/app.scss';
import Dog from './models/dog';
import Duck from './models/duck';

// Card-container from Html for appennd
const cardContainer = document.querySelector('.card-container');

// Create objects from Dog and Duck classes
const dog1 = new Dog('Max', 'https://images.unsplash.com/photo-1501721857084-6b993d35774a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZHVja3x8fHx8fDE2MzIzNDY4NDQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=250', 4, 5);
cardContainer.appendChild(dog1.create());
const dog2 = new Dog('Rex', '../images/content/dog2.jfif', 4, 1);
cardContainer.appendChild(dog2.create());
const dog3 = new Dog('Oscar', '../images/content/dog3.jfif', 4, 8);
cardContainer.appendChild(dog3.create());

const duck1 = new Duck('Coco', '../images/content/ördek1.jfif', 2, 8);
cardContainer.appendChild(duck1.create());
const duck2 = new Duck('Champ', '../images/content/ördek2.jfif', 2, 5);
cardContainer.appendChild(duck2.create());
const duck3 = new Duck('Rufus', '../images/content/ördek3.jfif', 2, 9);
cardContainer.appendChild(duck3.create());
