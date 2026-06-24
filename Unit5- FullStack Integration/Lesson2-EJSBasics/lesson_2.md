---
marp: true
theme: default
paginate: true
---

![](../../resources/images/circuitstream_logo.png)
# Software Development Bootcamp  
## Unit 4 · Full‑Stack Integration  
### Lesson 2 · Full‑Stack Setup & EJS Basics  
### Gurneesh Singh

---

# Agenda  

- Section 1: Full‑Stack Project Setup 
- Section 2: EJS Fundamentals 
- Section 3: EJS Templating Workshop 
- Summary & Next Steps 

---

# Learning Objectives  
By the end of this session learners can:  
1. Scaffold a full‑stack Express project following the MVC pattern  
2. Configure Express to use EJS as a view engine  
3. Build dynamic pages with EJS syntax, loops and conditionals  
4. Render server‑side data to the browser  

---


# Section 1  
## Full‑Stack Project Setup 

---

### MVC Design Pattern 


<div style="display: flex; justify-content: center;">
  <img src="./resources/mvc.png" alt="MVC Design Pattern" style="width: 500px;">
</div>

**Model** – schema & data access (e.g. Mongoose)  
**View** – EJS templates rendered by Express  
**Controller** – request handlers connecting routes to models & views

---

### Directory Structure 

```text
my-app/
├── controllers/
│   └── recipes.js
├── models/
│   └── recipe.js
├── views/
│   ├── index.ejs
│   └── partials/
├── routes/
│   └── recipeRoutes.js
├── public/
│   └── css/
├── app.js
└── package.json
```

- Separate concerns early  
- Keep **routes** thin; push logic into controllers  
- Static assets live in `public/`  

---

# Section 2  
## EJS Fundamentals 

---

### EJS Extension for VS Code

Name: EJS language support
Id: DigitalBrainstem.javascript-ejs-support
Description: 2019 - EJS language support for Visual Studio Code.
Version: 1.3.3
Publisher: DigitalBrainstem
VS Marketplace Link: https://marketplace.cursorapi.com/items?itemName=DigitalBrainstem.javascript-ejs-support

---

### Why EJS? 

- Server‑side HTML with embedded JavaScript  
- JavaScript syntax but with EJS tags around the JavaScript `<%= %>` & `<% %>`  
- Plays well with Express `res.render()`  

---

## Importance of EJS in MVC Design Pattern
The **Model-View-Controller (MVC)** design pattern divides an application into three interconnected components:

1. **Model**: Manages the data and business logic.
2. **View**: Handles the presentation layer (HTML, templates).
3. **Controller**: Manages user input, processes requests, and interacts with the Model and View.

### Role of EJS in MVC
In the MVC pattern, EJS is used in the **View** layer to:
- Render dynamic data from the Model.
- Present this data to the user in a structured and styled format.

---

## Advantages of Using EJS
1. **Integration with Express**: EJS is seamlessly integrated with Express.js, making it easy to use.
2. **Dynamic Rendering**: You can dynamically update content and present data without client-side frameworks.
3. **Clean Separation**: Keeps logic out of HTML, ensuring a clear separation between code and presentation.

---

### Syntax Primer 

<div style="font-size: 20px;">

```javascript
<!-- views/index.ejs -->
<h1><%= title %></h1>

<ul>
  <% recipes.forEach(r => { %>
    <li><%= r.name %> – <%= r.ingredients.length %> items</li>
  <% }) %>
</ul>

<% if (recipes.length === 0) { %>
  <p>No recipes yet.</p>
<% } %>
```

---

- `<%= %>` outputs escaped HTML 
- Escaped means any HTML/Code rendered inside the tags will be rendered as text
- `<%- %>` outputs unescaped
- Unescaped means any HTML/Code rendered inside the tags will be rendered as HTML
- `<% %>` runs JS without output  

</div>

---

### Express View Engine Setup 

```js
// app.js
import express from "express";
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index", { title: "Recipe Book", recipes: [] });
});

app.listen(3000);
```

---

# Section 3  
## EJS Templating

---

### Build Pages with EJS

<div style="font-size: 20px;">
Goal: render a list of **5 recipe ingredients** fetched from a mock data module.

```js
// controllers/recipes.js
import recipes from "../data/recipes.js";

export function list(req, res) {
  res.render("recipes/index", { recipes });
}
```

---

```html
<!-- views/recipes/index.ejs -->
<%- include("../partials/header") %>

<ul>
  <% recipes.forEach(({ name, ingredients }) => { %>
    <li>
      <h2><%= name %></h2>
      <ul>
        <% ingredients.slice(0,5).forEach(i => { %>
          <li><%= i %></li>
        <% }) %>
      </ul>
    </li>
  <% }) %>
</ul>

<%- include("../partials/footer") %>
```
</div>

---

### Loops & Conditionals


```html
<ul>
  <% books.forEach(b => { %>
    <li>
      <strong>Title:</strong> <%= b.title %><br>
      <% if (b.stock > 0) { %>
        <span style="color:green">In Stock</span>
      <% } else { %>
        <span style="color:red">Out of Stock</span>
      <% } %>
    </li>
  <% }) %>
</ul>
```

---

### Express Route Wiring

```js
// routes/recipeRoutes.js
import { Router } from "express";
import { list } from "../controllers/recipes.js";

const router = Router();
router.get("/recipes", list);
export default router;
```

Mount in `app.js`:

```js
import recipeRoutes from "./routes/recipeRoutes.js";
app.use(recipeRoutes);
```

---

### Express Controller Wiring

```js

import recipes from "../data/recipes.js";

export function list(req, res) {
  res.render("recipes/index", { title: "Recipe List", recipes });
}

```

---

# Summary 

✅ MVC scaffold complete  
✅ EJS configured & basic syntax understood  
✅ Dynamic data rendered to views  


---

