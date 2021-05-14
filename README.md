# Stack HRIS System
<small> Last updated on 04/28/2021. </small>

## Possible Breaking Changes
Learn more about the transition [ here ](MIGRATING.md).


<br>

## About
This repository is for the backend server of the Stack Enrollment app.

<br>

## Quick Start
Starting the Stack Enrollment goes in 2 ways:
1. [ Docker Option ](#docker-option) - preferred but not required.
2. [ Local Option ](#local-option) - for lower memory machines.


### Docker option
1. Run `npm docker:start`.
2. Run `npm docker:seed` to fill the database with random data.
3. You may now create requests to the API server at http://localhost:5000.


### Local option
Before you proceed, make sure to have a MongoDB instance running on your development machine.
1. Make an `.env` file with all the [required environment variables](#environment-variables).
    > You may check out the .env.example for reference.
2. Run `yarn` to setup the dependencies.
3. Run `yarn start` to start the local development server.
4. You may now create requests to the API server at http://localhost:5000.

<br>

## Environment Variables
- DBURI
- NODE_ENV
- JWT_ACCESS_SECRET
- JWT_REFRESH_SECRET
- JWT_EMAIL_SECRET
- JWT_ACCESS_DURATION
- JWT_REFRESH_DURATION
- JWT_EMAIL_DURATION

## Delopers
 - Ryan Nograles
 - John Loui Enorme

