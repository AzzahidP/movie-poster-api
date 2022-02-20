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

|            Route           | Method |    Request Body   |                 Description                   |
| :------------------------: | :----: | ----------------- | --------------------------------------------- |
|          /movies           |  GET   |         -         | Forbidden                                     |
|     /movies/{movie title}  |  GET   |         -         | Returns movie poster url (JSON)               |
|      /movies/favorite      |  GET   |     user_id       | Returns all favorite movies poster url (JSON) |
|      /movies/favorite      |  POST  |  title; user_id   | Add user's favorite movies                    |
|           /login           |  POST  |         -         | For testing purpose only                      |

## Testing
To test the JSON Web Token verification system, follow these steps:
1. Hit <mark>/login</mark> endpoint and copy **token value** from response body.
2. Use **token value** as Authorization value in request headers:
```
|      Key      |         Value          |
| :-----------: | :--------------------: |
| Authorization | Bearer **token value** |
```
3. Use these steps to make request with other endpoint.