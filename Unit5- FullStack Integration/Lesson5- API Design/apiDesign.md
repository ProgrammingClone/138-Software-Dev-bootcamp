# API Design Guide

## What is an API?

An API (Application Programming Interface) is a way for different applications to communicate with each other. It's like a menu in a restaurant—you request something, and the server provides it.

**Real Example:** When you use a weather app, it doesn't generate weather data itself. It talks to a weather service's API and requests: "Give me weather for New York." The API returns the data, and the app displays it.

## Why Do We Design APIs?

1. **Reusability** – The same API can be used by web apps, mobile apps, or other services
2. **Separation of Concerns** – Backend and frontend teams can work independently
3. **Scalability** – Different services can grow independently
4. **Clear Contract** – Both parties (client and server) know exactly what to expect
5. **Integration** – Different systems can work together seamlessly

## What is API Design?

API Design is about deciding:

- What information should be accessible? (endpoints)
- How should users request data? (HTTP methods)
- What format should responses be in? (JSON)
- How do we keep the API secure? (authentication)
- What should we return when something goes wrong? (error codes)

Good API design makes it easy for developers to use your API correctly.

## Core API Design Principles

### 1. REST (Representational State Transfer)

REST is a standard way to build APIs using HTTP. The key idea: **work with resources, not actions**.

**Example:**

- ✅ Good (REST): `GET /users`, `POST /users`, `DELETE /users/5`
- ❌ Bad (Not REST): `GET /getUsers`, `GET /createUser`, `GET /deleteUser`

Why? Because REST is consistent and predictable. Anyone familiar with REST can guess how your API works.

### 2. Resource-Based Design

Everything in the API is a **resource** (users, products, orders, etc.)

- Resources are accessed via URLs
- Resources are manipulated using HTTP methods
- URLs represent nouns (things), not verbs (actions)

### 3. Standard HTTP Methods

- `GET` – Read data (safe, doesn't change anything)
- `POST` – Create new data
- `PUT` – Update existing data
- `DELETE` – Remove data

### 4. Standard HTTP Status Codes

- `200 OK` – Request successful
- `201 Created` – Resource created successfully
- `400 Bad Request` – Client sent invalid data
- `401 Unauthorized` – Authentication required
- `403 Forbidden` – Authenticated but not allowed
- `404 Not Found` – Resource doesn't exist
- `500 Server Error` – Something went wrong on server

### 5. JSON Format

All data is sent and received as **JSON** (JavaScript Object Notation)—a universal format that all programming languages understand.

```json
{
  "id": 1,
  "name": "John Doe"
}
```

## OpenAPI and Swagger

### What is OpenAPI?

OpenAPI is a **standard** for describing APIs in a structured format. It's like a blueprint that explains what your API does, what endpoints exist, what data they accept, and what they return.

### What is Swagger?

Swagger (now called OpenAPI) is:

1. **A specification** – A standard format for writing API documentation
2. **A tool suite** – Tools to generate docs and test APIs

**Swagger UI** is an interactive tool that lets you:

- See all API endpoints
- Read what each endpoint does
- Test endpoints directly from your browser
- See example requests and responses

### Why Use Swagger/OpenAPI?

- **Auto-Generated Docs** – Documentation updates automatically when code changes
- **Interactive Testing** – Test API endpoints without writing code or using tools like Postman
- **Single Source of Truth** – One spec that describes everything
- **Client Generation** – Can auto-generate client libraries in various languages
- **Clear Specification** – Removes ambiguity about what the API does

## Our API Project: Putting It All Together

This project demonstrates all these concepts:

### Project Structure

- **app.js** – Main server file that sets up Express and Swagger UI
- **routes/users.js** – All user-related endpoints (follows REST principles)
- **middleware/auth.js** – Handles authentication/security (JWT tokens)
- **config/swagger.js** – Generates OpenAPI specification from code comments

### Our API Endpoints (Following REST & OpenAPI Standards)

**Unauthenticated (Public) Endpoints**

- `POST /login` – Get a JWT token
- `GET /users` – Get all users
- `GET /user/{id}` – Get a specific user

**Authenticated (Protected) Endpoints** (require JWT token)

- `POST /user` – Create a new user
- `PUT /user/{id}` – Update a user
- `DELETE /user/{id}` – Delete a user

### REST Principles In Our API

Notice how we design it:

- `/users` (plural) – for a collection
- `/user/{id}` (singular) – for a single item
- We use different HTTP methods for different actions
- We return proper status codes

### Security: Authentication with JWT

Some endpoints require authentication using **JWT (JSON Web Token)**:

1. **Get Token** – Call `/login` to receive a token
2. **Send Token** – Include token in `Authorization: Bearer <token>` header
3. **Verify Token** – Server checks if token is valid
4. **Allow/Deny** – Server allows or denies the request

This is a **standard** way to secure APIs.

## How to Test This API Using Swagger UI

### Step 1: Get a Token

1. Navigate to Swagger UI: `http://localhost:3000/api-docs`
2. Click `POST /login` section
3. Click "Try it out" → "Execute"
4. Copy the token from the response body

### Step 2: Authorize in Swagger

1. Click the green **"Authorize"** button at the top
2. Paste: `Bearer <your_token>` (Swagger adds "Bearer " automatically if needed)
3. Click "Authorize"

### Step 3: Test Protected Routes

Now you can test POST, PUT, DELETE endpoints and the token will be automatically sent with each request.

## Best Practices Summary

✅ **Do:**

- Use resource-based URLs: `/users`, `/user/{id}`
- Use correct HTTP methods (GET for reading, POST for creating, etc.)
- Return appropriate status codes (200, 201, 400, 401, 404, 500)
- Use JSON for requests and responses
- Document your API (using OpenAPI/Swagger)
- Secure sensitive operations with authentication
- Keep API design consistent

❌ **Don't:**

- Use verbs in URLs: `/getUsers`, `/createUser`, `/deleteUser`
- Mix purposes (don't use GET to create data)
- Return HTML instead of JSON
- Ignore error codes or return `200` for all responses
- Leave APIs undocumented
- Change how endpoints work without versioning

## Key Takeaways

1. **APIs enable communication** between different applications
2. **REST** is a standard, predictable way to design APIs
3. **HTTP methods** (GET, POST, PUT, DELETE) have specific meanings
4. **Status codes** tell clients what happened (success, error, etc.)
5. **OpenAPI/Swagger** documents APIs and provides interactive testing
6. **Authentication** protects sensitive operations
7. **Consistency** in design makes APIs easy to use and understand
