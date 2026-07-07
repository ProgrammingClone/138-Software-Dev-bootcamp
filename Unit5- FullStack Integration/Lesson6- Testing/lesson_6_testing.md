# Lesson 6: Testing in Express

## What is software testing?

Software testing is the process of verifying that an application behaves as expected. It helps developers detect problems early and improves the reliability of the final product.

## Why testing matters

- It helps catch bugs before they reach production.
- It improves code quality and maintainability.
- It makes refactoring safer.
- It supports confidence in continuous integration and delivery.

## Main types of testing

1. Unit testing
2. Integration testing
3. Acceptance testing
4. Regression testing
5. Performance testing
6. Automation testing

## Unit testing

Unit testing focuses on a single function or a small component of the application. It is usually fast, isolated, and easy to run.

## Tools used in this lesson

- Mocha: a test runner that discovers and executes tests
- Chai: an assertion library that makes test expectations readable
- Chai HTTP: a plugin that allows us to test Express routes over HTTP

## What this example includes

This lesson contains a small Express application with:

- user routes
- authentication middleware
- error-handling middleware
- a utility function for text formatting
- tests for both the utility function and the API routes

## Good testing practices

- Keep tests small and focused.
- Use descriptive test names.
- Test one behavior at a time.
- Cover both success and failure cases.
- Avoid relying on external services when a local test setup is enough.

## Running the tests

Run the following command from this folder:

```bash
npm test
```

## What this example demonstrates

- How to test a pure function
- How to test Express routes
- How to verify response status codes and payloads
- How to test error-handling behavior
