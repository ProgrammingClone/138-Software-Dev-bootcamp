const path = require("path");
const swaggerJsdoc = require("swagger-jsdoc");

/*
  This file builds the OpenAPI spec

  Dependencies and their roles:
  - `swagger-jsdoc`: scans code comments (JSDoc blocks with `@swagger`) and
    generates a JavaScript object that follows the OpenAPI (Swagger) spec.

  - `swagger-ui-express`: serves a browsable Swagger UI using the generated
    OpenAPI spec. Mount it in your app (e.g. `app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec))`).

  In this project `swagger-jsdoc` produces the `swaggerSpec` and
  `swagger-ui-express` exposes it at `/api-docs`.
*/

const options = {
  definition: {
    // OpenAPI version (3.0.0 is the current standard)
    openapi: "3.0.0",
    // General information about the API
    info: {
      title: "My API", // API name shown in Swagger UI
      version: "1.0.0", // API version number
      description: "API documentation for example Express app", // Brief description
    },
    // Server URL where the API runs
    servers: [
      {
        url: "http://localhost:3000/api", // Base URL for all API requests
        description: "Local development server", // Environment description
      },
    ],
    // Reusable components (authentication, data models, etc.)
    components: {
      // Security schemes available for the API
      securitySchemes: {
        JWT: {
          type: "http", // HTTP authentication
          scheme: "bearer", // Bearer token scheme
          bearerFormat: "JWT", // Token format
        },
      },
      // Data models/schemas used in API
      schemas: {
        // User schema - defines the structure of a user object
        User: {
          type: "object", // It's an object
          properties: {
            // Fields in the user object
            id: { type: "integer", example: 1 }, // User ID (auto-generated)
            name: { type: "string", example: "John Doe" }, // User name
          },
          required: ["name"], // name field is required; id is auto-generated
        },
      },
    },
  },
  // File paths where Swagger looks for API documentation (@swagger comments)
  apis: [
    path.join(__dirname, "..", "app.js"), // Look in app.js for documentation
    path.join(__dirname, "..", "routes", "*.js"), // Look in all route files
  ],
};

module.exports = swaggerJsdoc(options);
