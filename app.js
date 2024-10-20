//Express is used to create the server and handle the requests
const express = require ('express');

//Path is used to handle and transform file paths
const path = require('path');

//Initialize the express app
const app = express();

//Custom middleware to check working hours
//This middleware function checks if the current request time is within the working hours: between Monday to Friday 9am and 5pm

function checkWorkingHours(req, res, next) {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  if (day >= 1 && day <= 5 && hour >= 9 && hour <= 17) {
    next();
  } else {
    res.send('<h1>Sorry, the website is only available during working hours: Monday to Friday, 9am to 5pm</h1>');
  }
}

//Set ejs as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Serve static files (css, js, images, etc) from the public directory
app.use(express.static(path.join(__dirname, 'public')));

//Apply the checkWorkingHours middleware to all routes
//This middleware will run on every request to ensure the website is only available during working hours
app.use(checkWorkingHours);

//Define the routes(Home, Services, Contact Us)
//route for the Home page
app.get('/', (req, res) => {
  res.render('home');
});

//route for the Services page
app.get('/services', (req, res) => {
  res.render('services');
});

//route for the Contact Us page
app.get('/contact', (req, res) =>{
  res.render('contact');
})

//Start the server on port 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port on http://localhost: ${PORT}`);
});