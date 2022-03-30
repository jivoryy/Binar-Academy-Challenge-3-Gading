<p align="center">
<img src="./public/img/TAGGING%20JIVORYY.png" alt="Jivoryy Logo" width="100px"/>
<img src="./public/img/x%20img.png" alt="Jivoryy Logo" width="30" style="margin: 20px"/>
<img src="https://global-uploads.webflow.com/6100d0111a4ed76bc1b9fd54/616fd70b2be60a72b46f2da3_logo_7b6caab85699ca72e06917e9bad7512c.png" alt="Binar Academy Logo" width="100px"/>
</p>

# Introduction: About the Project

This was the challenge from Binar Academy for Full Stack Web Development bootcamp class in Wave 19.

From this project, it is expected that the students (myself) can learn to make projects using the tools that used by the industry today. The tech stack that is used is PERN/MERN stack (PostgreSQL/MongoDB, Express, React, Node.js).

---

Ini adalah bentuk tugas dari Binar Academy untuk program bootcamp Full Stack Web Development pada Gelombang 19.

Dari project ini diharapkan peserta (saya) dapat belajar untuk membuat proyek dengan peralatan yang digunakan industri saat ini. Tech stack yang digunakan adalah PERN/MERN (PostgreSQL/MongoDB, Express, React, Node.js).

Terimakasih atas perhatian dan kerjasamanya! :)

# Project Description

This express server is hosting a game website. The game is Rock, Paper, Scissors and users are play against the AI. The game is made using vanillaJS (Native JS). Users must register/login to the server if they want to play. Users are capable for changing password. The server is using ejs for its view engine. Login session are stored using express-session.

# Softwares & Modules List

The softwares that are needed for this project are:

1. Node.js
2. PostgreSQL

The (node) modules that are needed for this project are:

1. express
2. ejs
3. Nodemon (Dev)
4. pg
5. sequelize
6. sequelize-cli
7. express-session
8. bcrypt
9. jsonwebtoken
10. dotenv
11. axios (Upcoming)

# Installation Steps

## Download | Clone

```bash
gh repo clone jivoryy/Binar_Academy-FSW_Challenge
```

or

```bash
git clone https://github.com/jivoryy/Binar_Academy-FSW_Challenge.git
```

## Install Module

```bash
npm install
```

## Config Database

Config file is located in /config/config.json. Please configure accordingly to the database config.

## Create Database

If sequelize-cli is installed locally:

```bash
npx sequelize-cli db:create
```

If sequelize-cli is installed globally:

```bash
sequelize db:create
```

## Use Migrations

If sequelize-cli is installed locally:

```bash
npx sequelize-cli db:migrate
```

If sequelize-cli is installed globally:

```bash
sequelize db:migrate
```

## Use Seeders

If sequelize-cli is installed locally:

```bash
npx sequelize-cli db:seed:all
```

If sequelize-cli is installed globally:

```bash
sequelize db:seed:all
```

## Create .env file (Environment Variables)

Please make .env file first before running the server. Please use the template below for the .env file:

```env
SERVER_PORT=[your designated port]
```

## Start NPM

```bash
npm run start
```

# Data from Seeders

If you run the seeders (with sequelize), these are some details about the seeders data:

## User Login

```json
  {
    "username": "umaru",
    "password": "himouto"
  },
  {
    "username": "marin",
    "password": "shiontan"
  },
  {
    "username": "hirotaka",
    "password": "AsahiSuperDryy"
  },
  {
    "username": "mesintempur",
    "password": "MANATUKANGINDOMI?!"
  }
```

## Admin Login

```json
{
  "username": "jivoryy",
  "password": "test1234"
}
```

# Admin Dashboard

If you log in as admin, there is a dashboard for you to read, add, edit, or delete a user detail from the database. Please be cautious. The dashboard cannot be accessed if there is no admin user in the database. Admin can edit self data and revoked the admin previleges.

# API to Database

There is an API for the database. The endpoint is "**server URL**/api/".

All HTTP method require a request body in a certain key-value JSON format. Please follow this format guide. The mandatory key-value is marked with [REQUIRED]. If there is none of the [REQUIRED] mark, the key-value is not mandatory to be entered in the HTTP request body.

## GET request (listing all users)

```json
{
  "admin_username": "ADMIN_USERNAME[REQUIRED]",
  "admin_password": "ADMIN_USERNAME[REQUIRED]"
}
```

## POST request (create new user)

```json
{
  "admin_username": "ADMIN_USERNAME[REQUIRED]",
  "admin_password": "ADMIN_USERNAME[REQUIRED]",
  "username": "NEW_USERNAME[REQUIRED]",
  "password": "NEW_USERNAME_PASSWORD[REQUIRED]",
  "name": "NEW_USERNAME_NAME[REQUIRED]",
  "is_admin": true|false,
  "bio": "NEW_USERNAME_BIO",
}
```

## PUT request (update user)

```json
{
  "admin_username": "ADMIN_USERNAME[REQUIRED]",
  "admin_password": "ADMIN_USERNAME[REQUIRED]",
  "user_id": "EXISTING_USERID[REQUIRED]",
  "username": "NEW_USERNAME",
  "password": "NEW_USERNAME_PASSWORD",
  "name": "NEW_USERNAME_NAME",
  "is_admin": true|false,
  "bio": "NEW_USERNAME_BIO",
}
```

## DELETE request (delete user)

```json
{
  "admin_username": "ADMIN_USERNAME[REQUIRED]",
  "admin_password": "ADMIN_USERNAME[REQUIRED]",
  "user_id": "EXISTING_USERID[REQUIRED]"
}
```

# Ongoing Development

There are some ongoing development for this project features. Some of it are:

- [ ] Switching request handling from using basic Express to using Axios
- [ ] Make the API Controller much cleaner
- [ ] Using JWT instead of express-session for much secure connection.
