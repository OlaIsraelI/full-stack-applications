Working Hours Web Application
This is a simple web application built using Node.js and Express.js that limits user access to certain hours. The website can only be accessed during working hours, specifically Monday to Friday from 9 AM to 5 PM. Outside of these hours, users will receive a message notifying them that the site is unavailable.

Features
Middleware to restrict access to the website outside of working hours.
Serves three main pages:
Home
Services
Contact Us
Uses EJS as a template engine for dynamic rendering of pages.
Serves static files such as CSS and images from a public directory.
Requirements
Node.js (version 14 or higher)
Express.js
EJS for templating
Installation
Clone this repository or download the project files:
bash
Copy code
git clone https://github.com/yourusername/working-hours-web-app.git
cd working-hours-web-app
Install the required packages:
bash
Copy code
npm install
Ensure you have Node.js installed. If not, download and install it from here.

Run the application:

bash
Copy code
npm start
Alternatively, you can run it with:

bash
Copy code
node server.js
The application will be accessible at http://localhost:3000.

Usage
When accessing the website during working hours (Monday to Friday, 9 AM to 5 PM), the user will be able to browse the Home, Services, and Contact Us pages.
If the website is accessed outside of these hours, the user will see a message informing them that the website is unavailable.
Middleware Function
The middleware function checkWorkingHours ensures that the website is only available during business hours. If a request is made outside of the specified time, a message is displayed:

javascript
Copy code
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
Project Structure
bash
Copy code
.
├── public              # Static assets (CSS, JS, images)
├── views               # EJS templates for dynamic page rendering
│   ├── home.ejs
│   ├── services.ejs
│   └── contact.ejs
├── server.js           # Main server file with routing and middleware logic
├── README.md           # Project documentation (this file)
├── package.json        # Project dependencies and scripts
└── package-lock.json   # Dependency tree lock file
Routes
GET /: Renders the Home page.
GET /services: Renders the Services page.
GET /contact: Renders the Contact Us page.
View Engine
This project uses EJS as the templating engine. Views are stored in the views directory and are rendered using the res.render() method in Express.

License
This project is open-source and available under the MIT License.