# Backend - Brāv

Backend delpoyed at [Heroku](https://bravproduction.herokuapp.com/)

## Getting started

To get the server running locally:

- Clone this repo.
- `npm install` to install all required dependencies.
- `npm start` to start the local server.
- `npm start:dev` to start nodemon

Other scripts: 

- `npm test` to run tests created after last commit.
- `npm test:all` to run all of the tests.
- `npm reset` to reset the migrations and seeds locally
- `npm reset:staging` to reset the migrations and seeds on the staging database
- `npm reset:production` to reset the migrations and seeds on the production database

## Backend Framework

#### Databases

- [PostgresSQL](https://www.postgresql.org/): Free and open-source relational database management system used on our production and staging environments 
- [SQLite3](https://www.npmjs.com/package/sqlite3): Free and open-source relational database management system used in our devlopment environment 

#### Restful API dependencies

- [Express](https://www.npmjs.com/package/express): Web framework for Node.js, Node lets you write JavaScript on both the front-end and back-end, which increases readability and reduced context-switching
- [Knex](https://www.npmjs.com/package/knex): SQL query builder for JavaScript, used to structure sql queries to our databases
- [Helmet](https://www.npmjs.com/package/helmet): Secures our Express app by setting various HTTP headers
- [CORS](https://www.npmjs.com/package/cors): Uses additional HTTP headers to tell a browser to let a web application running at one origin (domain) have permission to access selected resources from a server at a different origin
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a .env file into process.env

#### Third-party API dependencies

- [Firebase](https://www.npmjs.com/package/firebase): A helper to configure Firebase Authentication
- [Sendgrid/mail](https://www.npmjs.com/package/@sendgrid/mail): A helper used to send emails with the Sendgrid platform 
- [Stripe](https://www.npmjs.com/package/stripe): A helper to work with stripe and stripe-connect to create payment sessions

#### Development dependencies

- [Nodemon](https://www.npmjs.com/package/nodemon): Allows the server to be restarted automatically upon file changes
- [Jest](https://www.npmjs.com/package/jest): Sets global state while testing 
- [Supertest](https://www.npmjs.com/package/supertest): Provides a high-level abstraction for testing HTTP
- [Cross-env](https://www.npmjs.com/package/cross-env): Sets the node enviornment to testing when running tests

#### Miscellaneous dependencies

- [Axios](https://www.npmjs.com/package/axios): A promise based HTTP client used to send requests
- [Faker](https://www.npmjs.com/package/faker): A node.js dependency used to make large amounts of seed data  
- [Moment](https://www.npmjs.com/package/moment): Formats dates in JavaScript
- [Jwt-decode](https://www.npmjs.com/package/jwt-decode): Decodes JSON web tokens so that the data can be used 


## Endpoints

#### Case Routes

| Method | Endpoint | Access Control | Description |
| ------ | -------- | -------------- | ----------- |
| GET    | `/cases` | all users      | Returns all cases for the current user. |
| POST   | `/cases` | all users      | Creates a new case for the current user. |
| GET    | `/cases/all` | anyone  | Returns all cases. |
| GET    | `/cases/:id` | anyone  | Return a specific case. |
| GET    | `/cases/:id/pending-cases` | all users  | Return all pending cases for a user. |
| GET    | `/cases/:id/active-cases` | all users  | Return all active cases for a user. |
| GET    | `/cases/:id/completed-cases` | all users  | Return all completed cases for a user. |
| GET    | `/cases/:id/addendums` | all users  | Return all addendums for a case. |
| POST   | `/cases/:id/addendums` | all users  | Create an addendum for a case. |
| PUT    | `/cases/:id/case-request-accepted` | all users  | Mark a case as accepted. |
| PUT    | `/cases/:id/case-request-declined` | all users  | Mark a case as declined. |
| PUT    | `/cases/:id/case-request-completed` | all users  | Mark a case as completed. |

#### User Routes

| Method | Endpoint | Access Control | Description |
| ------ | -------- | -------------- | ----------- |
| GET    | `/users` | anyone         | Returns all users. |
| GET    | `/users/auth` | all users | Authenticate the user. |
| PUT    | `/users/deactivate` | all users | Deactivate the user. |
| PUT    | `/users/:id/mediator-upgrade` | anyone | Request to be a mediator. |
| PUT    | `/users/:id/mediator-request-accepted` | admin | Accept a request to be a mediator. |
| PUT    | `/users/:id/mediator-request-declined` | admin | Decline a request to be a mediator. |

#### Mediator Routes

| Method | Endpoint | Access Control | Description |
| ------ | -------- | -------------- | ----------- |
| GET    | `/mediators` | all users      | Returns all mediators. |
| GET    | `/mediators/pending` | all users      | Returns all requests to be a mediator. |
| GET    | `/mediators/:id/cases` | all users      | Returns all cases for a mediator. |

#### Invoice Routes

| Method | Endpoint | Access Control | Description |
| ------ | -------- | -------------- | ----------- |
| POST   | `/invoices/case/:id` | all users      | Creates a new invoice for the case related to the id passed in. |
| GET    | `/invoices/case/:id` | all users      | Returns all invoices for a case. |
| PUT    | `/invoices/:id/` | all users      | Marks a invoice as paid. |
| GET    | `/invoices/:id/session` | all users      | Returns a session id to start stripe session. |

## Data Model

#### CASES

```
{
  id: UUID
  case_completed_at: STRING
  user_email: STRING
  user_uid: STRING
  description: STRING
  dispute_category: STRING
  dispute_amount: STRING
  parties_involved: STRING
  parties_contact_info: STRING
  court_case: STRING
  court_jurisdiction: STRING
  court_number: STRING
  court_filing_date: STRING
  case_notes: STRING
  case_accepted_at: STRING
  case_declined_at: STRING
  created_at: CURRENT_TIMESTAMP
  updated_at: CURRENT_TIMESTAMP
}
```

#### ADDENDUMS

```
{
  id: UUID
  case_id: INTEGER
  description: STRING
  created_at: CURRENT_TIMESTAMP
  updated_at: CURRENT_TIMESTAMP
}
```

#### USERS

```
{
  id: UUID
  type: STRING
  email: STRING
  uid: STRING
  license: STRING
  price: INTEGER
  experience: STRING
  specialization: STRING
  language: STRING
  professional_bio: STRING
  name: STRING
  deactivated_at: DATETIME
  mediator_accepted_at: DATETIME
  mediator_declined_at: DATETIME
  created_at: CURRENT_TIMESTAMP
  updated_at: CURRENT_TIMESTAMP
}
```

#### MEDIATOR_CASES

```
{
  id: UUID
  mediator_id: INTEGER
  case_id: INTEGER
  accepted_at: DATETIME
  declined_at: DATETIME
  created_at: CURRENT_TIMESTAMP
  updated_at: CURRENT_TIMESTAMP
}
```
#### INVOICES

```
{
  mediator_id: INTEGER
  case_id: INTEGER
  amount: INTEGER
  hours: INTEGER
  paid_at: DATETIME
  created_at: CURRENT_TIMESTAMP
}
```

## Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

    *  NODE_ENV - set to "development" until ready for "production"
    *  SENDGRID_API_KEY - this is generated in your Sendgrid account
    *  STRIPE_KEY - this is generated in the Stripe dashboard
    *  REACT_APP_URL - the url you want to pass through for callbacks

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](https://github.com/labs14-brav/Frontend/blob/master/README.md) for details on the fronend of our project. See [Android Documentation](https://github.com/labs14-brav/Android) for details on the Android application.
