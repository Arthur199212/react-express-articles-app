<!-- markdownlint-disable MD024 -->

# Articles App

### Frontend part
Used technologies: JS (ES6+), React (Hooks), Redux (Hooks), redux-thunk, Material-UI, REST API.

### Backend part
Used technologies: Node.js, Express.js, REST API.


## Available Scripts

In the project directory, you can run:

### `npm i`
For installing all dependencies from the project

### `npm start`
It will run backend server on [http://localhost:8080](http://localhost:8080) and client dev-server on [http://localhost:8081](http://localhost:8081) (click to check in the browser).

The page will reload if you make edits.<br />

### `npm run server`
Starts server with backend part of the app.

### `npm run build`

Builds the app for production to the `dist` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified.

After this app is ready to be deployed.


## API has 5 methods:

| Method                                               | Description             |
|------------------------------------------------------|-------------------------|
| **POST** `v1/articles`                               | creates an article      |
| **PUT** `v1/articles/:id`                            | updates an article      |
| **GET** `v1/articles?page=:pageNumber&limit=:limit`  | gets a list of articles |
| **GET** `v1/articles/:id`                            | gets an article         |
| **DELETE** `v1/articles/:id`                         | deletes an article      |

Articles data is stored on MongoDB


#### POST v1/articles - creates an article

##### Request body parameters

- `title` - article title
- `body` - article body

##### Response description

- `id` - unique identifier
- `title` - article title
- `body` - article body
- `updated_at` - article update time
- `created_at` - article creation time

For example, we make a request:

```json
{
    "title": "Awesome Article # 1",
    "body": "Description ..."
}
```

in response to the request we get

```json
{
    "id": "5dea166051ec3b28b0766c84",
    "title": "Awesome Article # 1",
    "body": "Description ...",
    "updated_at": "2019-12-06T08:50:40.975+00:00",
    "created_at": "2019-12-06T08:50:40.975+00:00"
}
```

Field validation:

- `title` - required field, and also cannot be an empty field
- `body` - required field, and also cannot be an empty field


#### PUT v1/articles/:id - updates as article

##### Options

- `id` - unique identifier of the created article

##### Request body parameters

- `title` - article title
- `body` - article body

##### Response description

- `id` - unique identifier
- `title` - article title
- `body` - article body
- `updated_at` - article update time
- `created_at` - article creation time

For example, we make a `PUT` request:

```json
{
    "title": "Updated Awesome Article # 1",
    "body": "Updated Body ..."
}
```

in response we get

```json
{
    "id": "5b15395fb5ff829e402cd0e4",
    "title": "Updated Awesome Article # 1",
    "body": "Updated Description ...",
    "updated_at": "2019-12-06T09:23:12.975+00:00",
    "created_at": "2019-12-06T08:50:40.975+00:00"
}
```


#### GET v1/articles?page=:pageNumber&limit=:limit

##### Options

- `page` - optional default field equal to` 1`.
- `limit` - an optional default field equal to the maximum value. The maximum value for `limit` is` 10`.

For example, we make a request **GET** `/v1/articles?page=1&limit=2`, in response we get the first page (query parameter `page` is 1) and 2 articles (query parameter `limit` is 2) and parameter `count` - total number of articles:

```json
{
    "count": 25,
    "page": 1,
    "limit": 2,
    "articles": [{
        "id": "5dea166051ec3b28b0766c84",
        "title": "Awesome Article # 1",
        "body": "Description ...",
        "updated_at": "2019-12-06T08:50:40.975+00:00",
        "created_at": "2019-12-06T08:50:40.975+00:00"
    }, {
        "id": "5b15395fb5ff829e402cd0e4",
        "title": "Updated Awesome Article # 1",
        "body": "Updated Description ...",
        "updated_at": "2019-12-06T09:23:12.975+00:00",
        "created_at": "2019-12-06T08:50:40.975+00:00"
    }]
}
```

##### Response description

- `count` - total number of articles
- `page` - the page on which the answer is given
- `limit` - the limit with which the answer is given
- `articles` - an array of articles


#### GET v1/articles/:id - gets an article by id

##### Options

- `id` - unique identifier of the article

##### Response description

- `id` - unique identifier
- `title` - article title
- `body` - article body
- `updated_at` - article update time
- `created_at` - article creation time

For example, if we make a request **GET** `v1/articles/5dea166051ec3b28b0766c84` we get the response:

```json
{
    "id": "5dea166051ec3b28b0766c84",
    "title": "Awesome Article # 1",
    "body": "Description ...",
    "updated_at": "2019-12-06T08:50:40.975+00:00",
    "created_at": "2019-12-06T08:50:40.975+00:00"
}
```

If there is no article with the identifier `:id`, server returns the HTTP Status Code equal to 404 and the response body:

```json
{
    "errors": [{
        "field": "id",
        "error": "Not Found"
    }]
}
```


#### DELETE v1/articles/:id - deletes an article by id

##### Options

- `id` - unique identifier of the article

If there is no article with the identifier `:id`, server returns the HTTP Status Code equal to 404 and the response body:

```json
{
    "errors": [{
        "field": "id",
        "error": "Not Found"
    }]
}
```


## Web UI

### Description

- Here were used React and Redux
- For styling was used Material-UI
- Web UI runs on http://localhost:8081 and uses API, находящееся по адресу http://localhost:8080 by default.

To start the app you can run:

```bash
npm i # setups all dependencies
npm start # starts Web UI and server with API in dev-mode
```


### Screenshots

![main_page](https://raw.githubusercontent.com/Arthur199212/react-express-articles-app/gh-pages/01.PNG)
![create_page](https://raw.githubusercontent.com/Arthur199212/react-express-articles-app/gh-pages/02.PNG)
![viewArticle_page](https://raw.githubusercontent.com/Arthur199212/react-express-articles-app/gh-pages/03.PNG)
![edit_page](https://raw.githubusercontent.com/Arthur199212/react-express-articles-app/gh-pages/04.PNG)
