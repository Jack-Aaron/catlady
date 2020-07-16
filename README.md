# catlady

## Overview
A React application created with the MERN stack, *catlady* helps pet owners manage and track the caloric intake of their pets' diets and other nutritional details.

![catlady screenshot](scrnsht.png?raw=true)

For the health of our pets, it is important to keep track of what they eat. Maintaining a healthy weight can become complicated fast when you have multiple pets who all have different needs. *catlady* is here to help!
* *Add your pet’s stats to create a personalized meal plan based on your food choice*
* *Add and track multiple pets at once*
* *Create a diet plan with the food you already have: No special diet food required!*
* *Check out new food options in our pet food cloud database*

## Add and Remove a Pet
![add-remove-pet-demo](add-remove-demo.gif?raw=true)
## Adding and Selecting a Pet Food
![add-select-food-demo](add-select-food-demo.gif?raw=true)
## Searching through the Pet Foods
![foodlist-demo](foodlist-demo.gif?raw=true)

### Development Process

The UI/UX was devised envisioning a user who may have multiple pets all requiring different diets. We decided then that the dashboard would first show all the different pets a user has in order to best select pet foods to match each pets' individual needs. The focus was on first allowing users to create a "pet" with minimal information required, and keeping the pets separate from the pet foods, so that the user has full autonomy in mixing and matching the most appropriate pet foods for each pet at any time.

We chose to use a NoSQL database due to the varied data ascribed to each pet to stay in line with the goal of the application of making custom diets for different pets.

### Technologies Used
* HTML/CSS
* Javascript ES6
* React
* [React-Bootstrap](https://react-bootstrap.github.io/)
* Node.js
* Express.js
* axios
* REST APIs
* [Passport](https://www.npmjs.com/package/passport) user authentication
* [React-Toastify](https://www.npmjs.com/package/react-toastify)
* [Chart.js 2](https://www.npmjs.com/package/react-chartjs-2)
* MongoDB
* Mongoose
* Robo 3T
* [mLab](https://www.mlab.com/)
* Heroku
* Kanban
* ESLint

### Future Improvements
* more animal types
* include Pet photo in their "profile" page
* user can upload unique pet picture
* associate a Pet Food with a Pet and display food name on Pet's card
* choose a pet food for a specific pet directly from the search table
* allow users to login via Facebook, Google, etc with OAuth via Passport strategy
* share pets' diet and charts on social media

### Links
* [Application](https://whispering-harbor-09673.herokuapp.com/)

### Meet The Team
* [Brian Farmer](https://github.com/brianlfarmerllc) MERN stack, MVC paradigm, Chart.js 2
* [Emily Gaska](https://github.com/egaska) App concept, MERN stack, UX, logic
* [Jonathan Alpart](https://github.com/Jack-Aaron) MERN stack, cloud database, React-Toastify

<a href='https://github.com/Jack-Aaron/catlady/graphs/contributors'>![](https://contributors-img.web.app/image?repo=Jack-Aaron/catlady)See contributions</a>
