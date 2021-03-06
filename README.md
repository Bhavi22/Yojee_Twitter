This is a basic functionality of Twitter and has two pages:

First, landing page, Where the user can add a new tweet and see existing tweets as well. 
Here the user can choose to retweet any existing tweet and this will redirect the user to the top ten trending tweets, the second page.

The top ten trending tweets page will allow the user to see the top ten tweets as well as retweet them.
User can retweet the original tweet only once!


####################################################################################

This app has been deployed on GCP's AppEngine but can be run on local environment as well.
AppEngine was chosen as this version of the app does not, currently, have a database as the data is stored in memory. Hence, Google's PaaS was the perfect solution for hosting this basic version of the application.
To further scale the application as a fullstack app, the app, along with the database hosting and backend frameworks, can be migrated from AppEngine onto Google's Compute Engine Service or AWS's EBS or on an EC2 instance, the cloud service chosen can vary based on different factors.
You can access the app at : https://yojee-304209.ts.r.appspot.com/

####################################################################################
To make a local version of this application the pre-requisite is to have Node.js installed on your machine, you can find the details here https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/. Once installed, follow the steps below to setup the application :

1) Clone this repository on your location machine -
 git clone <clone url of this git repo>

2) Go into the folder Yojee_Twitter - 
 cd Yojee_Twitter

3) Install the dependancies -
npm install

4) Once all dependancies are installed, run the app:
    npm start

    Runs the app in the development mode.\
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

    The page will reload if you make edits.\
    You will also see any lint errors in the console.
####################################################################################
Design and Implementation:
- For the purpose of this application's basic requirements, this app has been built using react.js for frontend services.
- For future scalability, the skeleton structure contains /components/service/TwitterAPI.js file where base API calls can be defined for the application.
- This app has a JSON object which is used to serve as data in memory to initialize sample tweets for any user that lands on this page.

Future Scaling :
- This app has been developed with a sample, in memory, data object. However, this can be stored in a database and fetched via API calls for scalability as data increases.
- For records over 1K , 1M and 1T -  RDBMS like MySQL, OracleSQL, PostgreSQL etc. can be implemented. An optimal option would be to implement GCP's CloudSQL , AWS RDS , Azure's SQL Database services or any cloud service provider's solutions for relational data storage. Cloud solutions would ensure lower maintenance costs, better scalability and cost options and higher efficiency (lower downtimes).


