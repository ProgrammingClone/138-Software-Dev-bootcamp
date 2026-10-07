# 🏋️ TypeScript Practice: Task Assignment System

## 🎯 Scenario

You're building a mini **task assignment system** for a software team. It should track developers, assign tasks to them, and show project progress.

**Goal:** practice interfaces, classes, type aliases, union types and typed functions.

---

## 🚀 Getting Started

1. Work in your `ts-practice` folder (see `TypeScript.md` → *Setup*).
2. Create a new file called **`practice.ts`** and write your solution there.
3. Compile and run:

```bash
npx tsc
node practice.js
```

> [!TIP]
> Start the compiler in watch mode (`npx tsc --watch`) so you see type errors the moment you save. **Read the red squiggles!** They are the whole point of TypeScript.

---

## 1️⃣ Requirements

### 👩‍💻 Developer

- Create a **`Developer` interface** with:
  - `id`: `number` (**readonly**)
  - `name`: `string`
  - `skills`: array of strings
  - `experience`: `number` (years)
  - *Optional:* `isRemote`: `boolean`

- Create a class **`TeamMember`** that **implements** the `Developer` interface and adds a method:
  - `introduce(): string` → returns `"Hi, I'm <name>, a <experience> year(s) developer."`

### 📁 Project

- Create a **`Project` type** with:
  - `title`: `string`
  - `stack`: array of strings
  - `duration`: `number` (months)
  - `status`: `"active" | "inactive" | "completed"`

### ✅ Task

- Create a **`Task` type** with:
  - `title`: `string`
  - `assignedTo`: `number` (a developer `id`)
  - `completed`: `boolean`
- Store tasks in an array: `const tasks: Task[] = []`

---

## 2️⃣ Functionality

| # | Function | What it should do |
|---|----------|-------------------|
| 1 | `assignTask(taskTitle: string, developerId: number)` | Adds a new task to the array with `completed = false` |
| 2 | `completeTask(taskTitle: string)` | Marks the matching task as completed. If no task has that title, do nothing. |
| 3 | `getProjectProgress(): string` | Returns a summary such as `"2/5 tasks completed"` |

Give every function explicit **parameter types** and a **return type**.

---

## 3️⃣ Expected Usage

Your code should run exactly like this:

```ts
const dev1 = new TeamMember(1, "Alice", ["React", "TypeScript"], 4, true);
const dev2 = new TeamMember(2, "Bob", ["Node.js", "Express"], 5);

assignTask("Setup repo", dev1.id);
assignTask("Create backend API", dev2.id);

completeTask("Setup repo");

console.log(getProjectProgress());
// Output: "1/2 tasks completed"

console.log(dev1.introduce());
// Output: "Hi, I'm Alice, a 4 year(s) developer."
```

---


## ⭐ Stretch Goals (optional)

1. Create a `Project` object and print `"<title>: <progress>"`.
2. Make `completeTask` **return a `boolean`**: `true` if a task was found, `false` otherwise.
3. Add `listTasksFor(developerId: number): Task[]` that returns only that developer's tasks.
4. Add a `Priority` type (`"low" | "medium" | "high"`) and an optional `priority` field on `Task`.
