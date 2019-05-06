Friend Finder Application


Description
The Friend Finder Application matches the user to other people entered in the applicatin through a ten question survey. All responses are gagued with values from 1 (Strongly Disagree) to 5 (Strongly Agree). When the survey is submitted, an existing user record closest to the current user's responses is found and returned.

The Friend Finder Application is implemented using Node.js, Express server on the back end and runs locally on PORT 8080.

Demo
To see Friend Finder in action check out the deployed version on Heroku

Installation
To install the application follow the instructions below:

git clone
cd friend-finder
npm install

export PORT=8080
After the PORT variable has been set, run the Node.js application with the command below.

node server.js
The application will now be running locally on PORT, in this case that is port 8080. You can then access it locally from your browser at the URL localhost:PORT.
