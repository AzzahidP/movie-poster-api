# Movie Poster API - Azzahid A. F. Poeloengan

This is a REST API where you can fetch any movie poster.
With <mark>movie-poster-api</mark> you can make a list of your favorite movies and fetch all the posters.

## Prerequisites
Make sure you have these installed in your PC/Laptop:
- Node.js & NPM
- PostgreSQL
- Git

## Project Setup
1. Fork this repository. The 'fork' button is on the upper right corner of your screen. You will have the exact same repository in your account.
2. Clone repository
```
$ git clone https://github.com/AzzahidP/movie-poster-api
```
3. Move to repository's folder
```
$ cd movie-poster-api
```
3. Install dependencies
```
$ npm install
```
4. Change the **username** and **password** in <mark>./config/config.json</mark> file according PostgreSQL account registered in your device.
5. Initiate Sequelize database and migration
```
$ sequelize-cli db:create
$ sequelize-cli db:migrate
```
or
```
$ sequelize db:create
$ sequelize db:migrate
```

### Run
To run the REST API, use this command
```
$ npm run dev
```

## API Documentation

|         Route/URL          | Method | Butuh Autentikasi | Keterangan                               |
| :------------------------: | :----: | ----------------- | ---------------------------------------- |
|             /              |  get   | No                | landing Page                             |
|          /signup           |  get   | NO                | signup Page                              |
|          /signup           |  post  | NO                | to create new user                       |
|           /login           |  get   | NO                | login page                               |
|           /login           |  post  | NO                | to login with user                       |
|           /game            |  get   | YES               | game page                                |
|         /dashboard         |  get   | YES               | dashboard page to controll data of users |
|   /dashboard/create-user   |  get   | YES               | create new user page                     |
|   /dashboard/create-user   |  post  | YES               | to create new user                       |
|  /dashboard/edit-user/:id  |  get   | YES               | edit user page                           |
|  /dashboard/edit-user/:id  |  post  | YES               | to edit existing user                    |
| /dashboard/delete-user/:id |  get   | YES               | to delete existing user                  |
