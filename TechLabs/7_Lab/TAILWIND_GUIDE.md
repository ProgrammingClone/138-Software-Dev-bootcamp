# Tailwind CSS with React + Vite

## 1. What is Tailwind CSS?

Tailwind CSS is a **utility-first CSS framework**. Instead of writing CSS in a separate file and inventing class names, you style elements by combining small, single-purpose classes directly in your markup (JSX).

**Traditional CSS**

```css
/* App.css */
.card {
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

```jsx
<div className="card">Hello</div>
```

**Tailwind CSS**

```jsx
<div className="p-6 bg-white rounded-xl shadow-md">Hello</div>
```

Each class does one thing:

| Class | CSS it generates |
|---|---|
| `p-6` | `padding: 1.5rem` |
| `bg-white` | `background-color: white` |
| `rounded-xl` | `border-radius: 0.75rem` |
| `shadow-md` | a medium box shadow |

---

## 2. Installation (React + Vite)


### Step 1: Create a Vite + React project (skip if you already have one)

```bash
npm create vite@latest 
cd my-app
npm install
```

### Step 2: Install Tailwind and the Vite plugin

```bash
npm install tailwindcss @tailwindcss/vite
```

### Step 3: Add the plugin to `vite.config.js`

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### Step 4: Import Tailwind in your CSS

Replace everything in `src/index.css` with:

```css
@import "tailwindcss";
```

Make sure `index.css` is imported in `src/main.jsx`:

```jsx
import './index.css'
```

### Step 6: Run the project

```bash
npm run dev
```

Try it by editing `App.jsx`:

```jsx
function App() {
  return <h1 className="text-3xl font-bold text-indigo-600">Hello Tailwind!</h1>
}
export default App
```

> **Tip:** Install the **Tailwind CSS IntelliSense** extension in VS Code for autocomplete, hover previews and linting.

---

## 3. Core Concepts and Features

### 3.1 Utility classes

Spacing, colors, typography, layout, borders and effects are all available as classes.

```jsx
<p className="text-lg font-semibold text-slate-700 mt-4">Some text</p>
```

### 3.2 Spacing scale

Padding (`p`), margin (`m`), and gap (`gap`) use a consistent scale where **1 unit = 0.25rem (4px)**.

| Class | Value |
|---|---|
| `p-1` | 4px |
| `p-2` | 8px |
| `p-4` | 16px |
| `p-8` | 32px |

Directional versions: `px-4` (left and right), `py-2` (top and bottom), `pt-`, `pr-`, `pb-`, `pl-`, and the same for margin (`mt-`, `mx-auto`, ...).

### 3.3 Flexbox and Grid

```jsx
{/* Flexbox */}
<div className="flex items-center justify-between gap-4">...</div>

{/* Grid: 3 equal columns */}
<div className="grid grid-cols-3 gap-6">...</div>
```

### 3.4 Colors

Colors follow the pattern `{property}-{color}-{shade}` with shades from 50 (lightest) to 950 (darkest).

```jsx
<div className="bg-indigo-500 text-white border border-indigo-700">...</div>
```

### 3.5 Typography

```jsx
<h1 className="text-4xl font-extrabold tracking-tight">Title</h1>
<p className="text-sm leading-relaxed text-slate-600">Paragraph</p>
```

### 3.6 Responsive design (mobile-first)

Unprefixed classes apply to **all** screen sizes. Prefixed classes apply from that breakpoint **and up**.

| Prefix | Minimum width |
|---|---|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |
| `2xl:` | 1536px |

```jsx
{/* 1 column on phones, 2 on sm, 3 on md and above */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">...</div>
```

### 3.7 State variants

Style hover, focus, active, disabled and more by adding a prefix.

```jsx
<button className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 focus:ring-4 disabled:opacity-40">
  Click me
</button>
```

### 3.8 Dark mode

```jsx
<div className="bg-white text-black dark:bg-slate-900 dark:text-white">...</div>
```

By default this follows the user's OS setting.

### 3.9 Arbitrary values

If you need a one-off value that isn't in the scale, use square brackets.

```jsx
<div className="w-[350px] bg-[#1da1f2] mt-[13px]">...</div>
```

### 3.10 Transitions and transforms

```jsx
<div className="transition hover:-translate-y-1 hover:shadow-xl">...</div>
```

---

## 4. Using Tailwind with React

### Conditional classes with state

```jsx
<p className={`text-4xl ${count >= 10 ? 'text-green-500' : 'text-slate-800'}`}>
  {count}
</p>
```


### Important rule: don't build class names dynamically

Tailwind scans your files for **complete class names**. This will **not** work:

```jsx
// ❌ Tailwind cannot detect this class
<div className={`text-${color}-500`}>...</div>
```

Use full class names instead:

```jsx
// ✅ Works
const colors = {
  red: 'text-red-500',
  green: 'text-green-500',
}
<div className={colors[color]}>...</div>
```

---


## 7. Quick Cheat Sheet

| Need | Classes |
|---|---|
| Center content | `flex items-center justify-center` |
| Full-height page | `min-h-screen` |
| Container | `mx-auto max-w-5xl px-6` |
| Rounded button | `rounded-lg px-4 py-2 bg-indigo-600 text-white` |
| Card | `rounded-xl bg-white p-6 shadow-md` |
| Hide on mobile | `hidden md:block` |
| Truncate text | `truncate` |
| Circle image | `h-12 w-12 rounded-full object-cover` |

---

## 8. Practice Exercise

 Build a Habit Tracker App
 
Your task is to build a simple **habit tracker** with React, Vite and Tailwind CSS. The user can add habits and check each one off when they complete it. The goal is an app that works and also **looks good**.
 
**Inspiration:** [everyday.app](https://everyday.app/) is a simple tracker with a nice UI. Use it as a reference for the look you are aiming for.
 
#### How to build it
 
1. **Plan the app first.** Decide what the user can do: see a list of habits, add a habit, mark it done or not done, and delete it.
2. **Split the UI into components.** For example: `Header`, `AddHabitForm`, `HabitList` and `HabitItem`.
3. **Store the habits with `useState`.** Each habit can be an object:
```jsx
   { id: 1, name: 'Drink water', done: false }
```
4. **Add a habit.** Use a controlled input and a button that adds a new object to the array.
5. **Toggle a habit.** On click, flip `done` for that habit using `map()`.
6. **Style with Tailwind.**
   - Use conditional classes so completed habits look different (for example, green background or `line-through`).
   - Use a card layout with `rounded-xl`, `shadow-md` and `p-4`.
   - Add `hover:` and `transition` effects to buttons and items.
   - Make it responsive with `sm:` and `md:` prefixes.
7. **Polish it.** Show a progress summary such as "3 of 5 habits done", and try a color theme you like.

---

## 9. Useful Links

- Docs: https://tailwindcss.com/docs
- Vite installation guide: https://tailwindcss.com/docs/installation/using-vite
- Cheat sheet (community): https://nerdcave.com/tailwind-cheat-sheet
