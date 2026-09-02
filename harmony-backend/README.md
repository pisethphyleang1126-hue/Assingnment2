# Harmony Museum Backend (Express + MySQL)

Connects to your local MySQL (via XAMPP/phpMyAdmin) and exposes a REST API
that your React app (or Postman) can call.

## 1. Create the database

In phpMyAdmin:
- Click **SQL** tab (or Import), paste the contents of `schema.sql`, and run it.
- This creates the `harmony_museum` database with `users` and `tickets` tables.

## 2. Configure connection

Edit `.env`:

```
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=        <- your MySQL/XAMPP root password (often blank by default)
DB_NAME=harmony_museum
DB_PORT=3306
PORT=5000
JWT_SECRET=change_this_to_a_long_random_string
```

## 3. Install & run

```
npm install
npm run dev
```

Server starts at `http://localhost:5000`. Visit it in a browser — you should
see `{"message":"Harmony Museum API is running"}`.

## 4. Test in Postman

### Register a user
`POST http://localhost:5000/api/users/register`
Body (JSON):
```json
{
  "full_name": "Sokha Chan",
  "email": "sokha@example.com",
  "password": "mypassword123"
}
```

### Login
`POST http://localhost:5000/api/users/login`
Body (JSON):
```json
{
  "email": "sokha@example.com",
  "password": "mypassword123"
}
```
Returns a `token` and `user` object.

### List users
`GET http://localhost:5000/api/users`

### Book a ticket
`POST http://localhost:5000/api/tickets`
Body (JSON):
```json
{
  "user_id": 1,
  "ticket_type": "Adult",
  "visit_date": "2026-09-15",
  "quantity": 2,
  "total_price": 20.00
}
```

### List all tickets
`GET http://localhost:5000/api/tickets`

### List one user's tickets
`GET http://localhost:5000/api/tickets/user/1`

### Update ticket status
`PUT http://localhost:5000/api/tickets/1`
Body (JSON):
```json
{ "status": "cancelled" }
```

### Delete a ticket
`DELETE http://localhost:5000/api/tickets/1`

## 5. Connect from React

From your `harmony-museum` React app, call the API with `fetch`, e.g.:

```js
const res = await fetch('http://localhost:5000/api/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
});
const data = await res.json();
```

Make sure the backend (`npm run dev` in this folder) is running alongside
the React dev server.
