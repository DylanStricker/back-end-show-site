# Site for logging your shows #
Back-End for the site made to log shows
### Tech used #
* Javascript
* AJAX
* Mongoose/MongoDB
* Passport
* bcrypt
* Express

### API Documentation


## Tasks

Terminal commands available to use all are prefaced with `npm run`

| Command                | Effect                                                                                                      |
|------------------------|-------------------------------------------------------------------------------------------------------------|
| `server (serve, s)`  | Starts a development server with `nodemon` that automatically refreshes when you change something.            |
| `test`             | Runs automated tests.                                                                                           |
| `debug-server` | Starts the server in debug mode, which will print lots of extra info about what's happening inside the app.         |
| `start`            | Runs the server with a non-refreshing instance (no nodemon)                                                     |
| `debug-server`     | debugs server issues?                                                                                           |

## API

Use this as the basis for your own API documentation. Add a new third-level
heading for your custom entities, and follow the pattern provided for the
built-in user authentication documentation.

Scripts are included in [`curl-scripts`](curl-scripts) to test built-in actions.
Add your own scripts to test your custom API.

### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/` | `users#changepw`  |
| DELETE | `/sign-out/`        | `users#signout`   |

#### POST /sign-up

Request:

```sh
curl --include --request POST http://localhost:4741/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "an@example.email",
      "password": "an example password",
      "password_confirmation": "an example password"
    }
  }'
```

```sh
curl-scripts/sign-up.sh
```

Response:

```md
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 1,
    "email": "an@example.email"
  }
}
```

#### POST /sign-in

Request:

```sh
curl --include --request POST http://localhost:4741/sign-in \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "an@example.email",
      "password": "an example password"
    }
  }'
```

```sh
curl-scripts/sign-in.sh
```

Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 1,
    "email": "an@example.email",
    "token": "33ad6372f795694b333ec5f329ebeaaa"
  }
}
```

#### PATCH /change-password/

Request:

```sh
curl --include --request PATCH http://localhost:4741/change-password/ \
  --header "Authorization: Bearer $TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "an example password",
      "new": "super sekrit"
    }
  }'
```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa curl-scripts/change-password.sh
```

Response:

```md
HTTP/1.1 204 No Content
```

#### DELETE /sign-out/

Request:

```sh
curl --include --request DELETE http://localhost:4741/sign-out/ \
  --header "Authorization: Bearer $TOKEN"
```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa curl-scripts/sign-out.sh
```

Response:

```md
HTTP/1.1 204 No Content
```

### Planning and Organization #
1. Created ERD and user stories.

### User Stories #

* I want to be able to sign up
* I want to be able to sign-in
* I want to be able to change my password
* I want to be able to sign-out
* I want to be able to add a show to my watched shows
* I want to be able to see who made the show
* I want to be able to see when the show came out
* I want to be able to see a description of the show
* I want to be able to write about the shows I've seen
* I want to be able to search from a list of shows already stored

### Wireframes #
Went digital with this Wireframe, my physical ones didn't turn out that well so

![ERD](https://media.git.generalassemb.ly/user/32482/files/1f9c4a80-500f-11eb-8f30-08e2292b5a98)


### Future Plans, Problems to solve #

Add everything lol
