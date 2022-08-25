# Udacity: Build A Storefront Backend

# Storefront Backend Project

<div id="top"></div>

![node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Jasmine](https://img.shields.io/badge/Jasmine-8A4182?style=for-the-badge&logo=Jasmine&logoColor=white)
![Postgresql](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

This is a backend API build in Nodejs for an online store. It exposes a RESTful API that will be used by the frontend developer on the frontend.

The database schema and and API route information can be found in the [REQUIREMENT.md](REQUIREMENTS.md)

## Installation Instructions

This section contains all the packages used in this project and how to install them. However, you can fork this repo and run the following command at the root directory to install all packages.

`npm install`

### Packages

Here are some of the few packages that were installed.

#### express

`npm i -S express`
`npm i -D @types/express`

#### typescript

`npm i -D typescript`

#### db-migrate

`npm install -g db-migrate`

#### cors

`npm install --save cors`

#### bcrypt

`npm -i bcrypt`
`npm -i -D @types/bcrypt`

#### jsonwebtoken

`npm install jsonwebtoken --sav`
`npm -i -D @types/jsonwebtoken`

#### dotenv

`npm install --save dotenv`

#### jasmine

`npm install jasmine @types/jasmine --save-dev`

#### supertest

`npm i supertest`
`npm i --save-dev @types/supertest`

## Set up Database

### Create Databases

We shall create the dev and test database.

- connect to the default postgres database as the server's root user `psql -U postgres`
- In psql run the following to create a user
  - `CREATE USER shopping_user WITH PASSWORD 'password123';`
- In psql run the following to create the dev and test database
  - `CREATE DATABASE store_udacity;`
  - `CREATE DATABASE store_udacity_test;`

### Migrate Database

Navigate to the root directory and run the command below to migrate the database

`npm run migration:run`

## Enviromental Variables Set up

Bellow are the environmental variables that needs to be set in a `.env` file. This is the default setting that I used for development, but you can change it to what works for you.

**NB:** The given values are used in developement and testing but not in production.

```
DATABASE_NAME = store_udacity
DATABASE_NAME_TEST = store_udacity_test
DATABASE_HOST = localhost
DATABASE_PORT = 5432
DATABASE_PORT_TEST = 5433
DATABASE_USER = postgres
DATABASE_USER_PW= root

PEPPER=3I_A7_3I_Z3b_3I_K0S_TH694S_IS_A_S3CR3T17t31t
SALT_ROUNDS=10
TOKEN_SECRET_KEY = 5ae8adc9731627905ebf0905dbe4a114ba7d8354ae1796772dfa523a2142761b78d48cbfcd98000bb94fbdbd8147f30de6b3484c3a060d389068204df6a50630
NODE_ENV = dev
```

## Start App

`npm start`

### Running Ports

After start up, the server will start on port `3000` and the database on port `5432`

## Endpoint Access

All endpoints are described in the [REQUIREMENT.md](REQUIREMENTS.md) file.

## Token and Authentication

Tokens are passed along with the http header as

```
Authorization   Bearer <token>
```

## Testing

Run test with

`npm run test`

It sets the environment to `test`, migrates up tables for the test database, run the test then migrate down all the tables for the test database.

## Important Notes

### Environment Variables

Environment variables are set in the `.env` file and added in `.gitignore` so that it won't be added to github. However, I had provided the names of the variables that need to be set above. I also provided the values that were used in development and testing.

### Changing Enviroment to testing

I had set up two databases, one for development and the other for testing. During testing, I had to make sure the testing database is used instead of the developement database.
