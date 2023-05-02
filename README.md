# MiniReto
README

This is a simple API built with Node.js and Express that allows you to perform basic CRUD operations on a MySQL database. It provides endpoints for retrieving, creating, updating, and deleting product information in the database.

Installation

1. Install Node.js and npm on your local machine.
2. Clone the repository to your local machine using `git clone https://github.com/[USERNAME]/[REPOSITORY-NAME]`.
3. Install the project dependencies by running `npm install`.

Usage

1. Start the server by running `npm start`.
2. The server should now be running at `http://localhost:3001`.
3. Use the following endpoints to interact with the API:

Endpoints

GET `/api/products`

Returns all products from all tables (HOODIES, PANTS, SHORTS, SHOES and CAPS) in the database.

GET `/api/products/:table`

Returns all products from a specific table in the database (HOODIES, PANTS, SHORTS, SHOES or CAPS).

POST `/api/products/:table`

Adds a new product to a specific table in the database (HOODIES, PANTS, SHORTS, SHOES or CAPS).

Example request body:

```json
{
  "size": "M",
  "color": "black",
  "quantity": 10,
  "description": "A great product"
}
```

DELETE `/api/products/:table/:id`

Deletes a product with the specified `id` from the specified table (HOODIES, PANTS, SHORTS, SHOES or CAPS) in the database.

PUT `/api/products/:table/:id`

Updates the quantity of a product with the specified `id` in the specified table (HOODIES, PANTS, SHORTS, SHOES or CAPS) in the database.

Example request body:

```json
{
  "quantity": 20
}
```

Configuration

You can configure the server to use your own MySQL database by modifying the `connection` variable in the code to include your own database information:

```javascript
var connection = mysql.createConnection({
  host 	: 'localhost',
  user 	: 'root',
  password : '',
  database : 'PRODUCTS'
});
```

Replace the values for `host`, `user`, `password`, and `database` with your own values.

Contributing

Feel free to contribute to this project by submitting pull requests or issues.
