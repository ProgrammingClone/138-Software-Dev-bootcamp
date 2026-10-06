# 📝 TypeScript Crash Course (Optional)

> **Our React Native code in this course is written in plain JavaScript.** This crash course is a bonus. TypeScript is everywhere in the React Native world: documentation, tutorials, libraries and job descriptions, so it helps to be able to read it. Expo's *default* project template is TypeScript, which is why we create our projects with `--template blank`.

---

## 📖 What is TypeScript?

TypeScript is a **typed superset of JavaScript** created by Microsoft. "Superset" means every valid JavaScript program is already valid TypeScript. TypeScript simply lets you **describe the shape of your data** (with *types*), and then **checks your code against those descriptions before it runs**.

The important part: **types exist only while you write and compile.** Browsers, Node.js and phones can't run TypeScript directly. The compiler (`tsc`) checks your types and then **erases them**, leaving ordinary JavaScript.

```
index.ts  ──(tsc: check types, erase them)──▶  index.js  ──▶  runs anywhere JavaScript runs
```

### 🔑 JavaScript vs. TypeScript

| | JavaScript | TypeScript |
|---|-----------|------------|
| Types | Dynamic: a variable can hold anything | Static: you describe what a variable may hold |
| When are type mistakes found? | At **runtime** (often by your users) | **While you type** and at compile time |
| Editor help | Good | Excellent: precise autocomplete, safe renaming and refactoring |
| Runs directly? | ✅ Yes | ❌ Must be compiled to JavaScript first |
| Extra work | None | Writing type annotations |

### 💡 Why use it?

- **Catch bugs early:** typos like `user.nmae` are flagged immediately.
- **Self-documenting code:** a function signature tells you what it needs and returns.
- **Safer refactoring:** rename or reshape something and the editor shows everything that breaks.
- **Better teamwork:** everyone can see what shape the data has.

---

## 📂 Setup

You need Node.js (installed in the Introduction). Create a practice folder and add TypeScript **to that project** (no global install needed):

```bash
mkdir ts-practice
cd ts-practice
npm init -y
npm install --save-dev typescript
```

Copy `tsconfig.json` and `index.ts` from the lesson folder into `ts-practice`. (Or generate your own config with `npx tsc --init`.)

### Compile and run

```bash
npx tsc            # compiles every .ts file listed in tsconfig.json → .js
node index.js      # runs the generated JavaScript
```

Handy while you're experimenting: `npx tsc --watch` recompiles every time you save.


### What does the compiler do to my code?

```typescript
let message: string = "Hello, World!";
console.log(message);
```

becomes plain JavaScript with the type annotation removed:

```javascript
let message = "Hello, World!";
console.log(message);
```

*(The exact output depends on the `target` setting in `tsconfig.json`. An older target such as ES5 would turn `let` into `var`.)*

### 🔧 Configuring TypeScript: `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "lib": ["ES2020", "DOM"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "outDir": "./"
  },
  "include": ["*.ts"],
  "exclude": ["node_modules"]
}
```

| Option | What it does |
|--------|--------------|
| `target` | Which JavaScript version to output |
| `module` | Which module format to output. `CommonJS` is what Node.js runs out of the box. |
| `lib` | Which built-in types are available. `DOM` gives us `console`. |
| **`strict`** | ✅ Turns on all the strict checks. **Always keep this on.** |
| `outDir` | Where compiled `.js` files go (`./` = next to the `.ts` files) |
| `include` / `exclude` | Which files to compile |

---

## 🧩 TypeScript Cheat Sheet

Every concept below appears, with comments, in **`index.ts`**. Open it side by side with this table.

| Concept | Example | Use it when… |
|---------|---------|--------------|
| **Basic types** | `let age: number = 28;` | Declaring simple values (`string`, `number`, `boolean`) |
| **Arrays** | `let skills: string[] = [];` | A list of one kind of thing |
| **Tuples** | `let user: [string, number] = ["Ana", 28];` | A fixed-length list with a known type at each position |
| **Typed functions** | `function greet(name: string): string` | Always! Parameters and return type document your function |
| **Optional parameters** | `function hi(name: string, role?: string)` | An argument that may be left out |
| **Interfaces** | `interface Developer { name: string }` | Describing the shape of an object (and extending it) |
| **Type aliases** | `type Id = string \| number` | Unions, intersections and other flexible types |
| **Union types** | `"active" \| "inactive"` | A value that can be one of several options |
| **Intersection types** | `FrontendDev & BackendDev` | Combining two types into one |
| **Classes** | `class Person { … }` | Object-oriented code with `public` / `private` / `readonly` |
| **Type assertions** | `(value as string).length` | You know more than the compiler (use sparingly) |

### `interface` or `type`?

A simple rule of thumb:

- Use **`interface`** to describe the shape of **objects** (it can be extended with `extends`).
- Use **`type`** for **unions**, **intersections**, tuples and anything that isn't a plain object shape.

For everyday object shapes, either one works. Pick one and be consistent.

---

## ⚛️ A Preview: TypeScript in React Native

You'll see code like this in tutorials. The part after the colon is the only new thing:

```tsx
type GreetingProps = {
  name: string;
  age?: number;          // optional prop
};

export default function Greeting({ name, age }: GreetingProps) {
  return <Text>Hello, {name}! {age ? `You are ${age}.` : ""}</Text>;
}
```

In **our** JavaScript version, that same component is just:

```jsx
export default function Greeting({ name, age }) {
  return <Text>Hello, {name}! {age ? `You are ${age}.` : ""}</Text>;
}
```

