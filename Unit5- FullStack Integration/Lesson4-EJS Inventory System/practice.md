# Practice: Extend the Current Inventory Example

This practice is based on the current example in the project. The app already has:

- a MongoDB model in models/bookModel.js
- routes for /, /create, /issue, and /return in routes/booksRoute.js
- controller logic in controllers/bookController.js
- an inventory page in views/index.ejs
- issue and return forms in views/issue.ejs and views/return.ejs

The goal is to improve the existing example in a realistic way

## Your tasks

### 1. Add a more complete book schema

Use the existing schema in models/bookModel.js as the base and extend it with at least three additional fields that would help a real inventory system.

Requirements:

- Add fields such as description, category, createdAt, updatedAt, or status.
- Add validation so these fields are not just stored, but stored in a sensible way.
- Decide which fields should be required and which should have defaults.


### 2. Add server-side validation for all create and update actions

The current app trusts the form data too much.

Requirements:

- Add validation before saving any new book.
- Validate incoming values for name, author, inventory, quantity, and tags.
- Reject invalid requests with clear error messages.
- Make sure empty or malformed input does not create broken records.

### 3. Extend the main inventory page

Work with the current inventory page in views/index.ejs.

Requirements:

- Add a summary section that shows total books, total available inventory, and total issued units.
- Add a status column that clearly shows whether each book is In Stock, Low Stock, or Out of Stock.
- Show at least one additional piece of information per book, such as category or description preview.
- Keep the page connected to the existing data flow.

### 4. Add a details page for an individual book

The app currently lists books but does not provide a full record view.

Requirements:

- Add a route to view one book by ID.
- Create a new EJS page that displays the full book information.
- Include at least the current inventory, issued quantity, and one or two descriptive fields.
- Add a link from the main page to the details page.

### 5. Improve the issue and return experience

The current issue and return forms are functional but too basic

Requirements:

- Add better feedback after issuing or returning a book.
- Prevent invalid transactions such as issuing a negative amount or returning more than was issued.
- Make the forms clearer by showing relevant information to the user before submitting.
- Ensure the stock values remain accurate after each action.

### 6. Add reusable view structure

The current EJS pages repeat layout and form structure.

Requirements:

- Create at least one partial and use it in the existing views.
- Move repeated layout or form markup into the partial.
- Keep the app working the same way, but make the views easier to maintain.

