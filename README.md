This is a basic functionality of Twitter and has two pages:

First, landing page, Where the user can add a new tweet and see existing tweets as well. 
Here the user can choose to retweet any existing tweet and this will redirect the user to the top ten trending tweets, the second page.

The top ten trending tweets page will allow the user to see the top ten tweets as well as retweet them.

This app has been deployed on GCP's AppEngine but can be run on local environment as well.
You can access the app at : https://yojee-304209.ts.r.appspot.com/

To run the react app, following instruction can be followed:

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Design and Implementation:
- For the purpose of this application's basic requirements, this app has been built using react.js for frontend services.
- For future scalability, the skeleton structure contains /components/service/TwitterAPI.js file where base API calls can be defined for the application.
- This app has a JSON object which is used to serve as data in memory to initialize sample tweets for any user that lands on this page.

Future Scaling :
- This app has been developed with a sample, in memory, data object. However, this can be stored in a database and fetched via API calls for scalability as data increases.
- For records over 1K , 1M and 1T -  RDBMS like MySQL, OracleSQL, PostgreSQL etc. can be implemented. An optimal option would be to implement GCP's CloudSQL , AWS RDS , Azure's SQL Database services or any cloud service provider's solutions for relational data storage. Cloud solutions would ensure lower maintenance costs, better scalability and cost options and higher efficiency (lower downtimes).


