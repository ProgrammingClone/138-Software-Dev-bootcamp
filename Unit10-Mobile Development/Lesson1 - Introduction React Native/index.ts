// =============================================================
// TypeScript Crash Course: 
// Compile:  npx tsc        Run:  node index.js
// =============================================================

// ------------------------------
// 1. Basic Variable Types
// ------------------------------
// Example: storing user information
let username: string = "John Doe"; // text
let age: number = 28; // numbers (integers and decimals)
let isDeveloper: boolean = true; // true / false

// Arrays with a specified element type
// Example: list of skills a developer has
let skills: string[] = ["JavaScript", "TypeScript", "React"];

// Tuple: a fixed-length array with a known type at each position
// Example: [name, age, isDeveloper]
let userDetails: [string, number, boolean] = ["John Doe", 28, true];

// ------------------------------
// 2. Functions
// ------------------------------
// Typed parameters and a typed return value
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Optional parameter (?): the caller may leave it out
function introduce(name: string, role?: string): string {
  return role ? `Hi, I'm ${name}, a ${role}.` : `Hi, I'm ${name}.`;
}

// Default value: used when the argument is missing
function welcome(name: string, greeting: string = "Welcome"): string {
  return `${greeting}, ${name}!`;
}

// ------------------------------
// 3. Interfaces
// ------------------------------
// Use an interface to describe the SHAPE of an object.
// Interfaces can be extended later.
interface Developer {
  name: string;
  skills: string[];
  experience: number;
  location?: string; // optional property
  readonly id: number; // can be set once, never changed
}

// Extending an interface
interface RemoteDeveloper extends Developer {
  timezone: string;
}

// Using the interface
const developer1: RemoteDeveloper = {
  id: 1,
  name: "John Doe",
  skills: ["JavaScript", "TypeScript", "React"],
  experience: 5,
  timezone: "GMT+2",
};

// Try it: uncomment the next line and read the compiler error.
// Error: Cannot assign to 'id' because it is a read-only property.
// developer1.id = 2;

// ------------------------------
// 4. Type Aliases
// ------------------------------
// Use `type` for object shapes too, but especially for unions,
// intersections and other flexible types.
type Project = {
  title: string;
  duration: number; // in months
  stack: string[];
};

const project1: Project = {
  title: "Personal Portfolio",
  duration: 3,
  stack: ["HTML", "CSS", "JavaScript", "TypeScript"],
};

// Union type: a value can be ONE of several options
type TaskStatus = "active" | "inactive" | "pending";
let projectStatus: TaskStatus = "active";
// projectStatus = "done"; // Error: "done" is not one of the allowed values

// Union of different types + narrowing
function formatId(id: string | number): string {
  if (typeof id === "number") {
    return `#${id.toString().padStart(4, "0")}`; // here TS knows id is a number
  }
  return id.toUpperCase(); // here TS knows id is a string
}

// Intersection type: combine several types into one
type FrontendDev = { skills: string[] };
type BackendDev = { technologies: string[] };
type FullStackDev = FrontendDev & BackendDev;

const fullstackDev: FullStackDev = {
  skills: ["React", "Vue"],
  technologies: ["Node.js", "Express"],
};

// ------------------------------
// 5. Type Assertion
// ------------------------------
// Example: a value from an API, where TypeScript doesn't know the type.
// `any` switches type checking OFF, so use it with caution

let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;


// ------------------------------
// 6. Classes
// ------------------------------
// `public name` / `private age` in the constructor is a shortcut that
// declares the property AND assigns it.
class Person {
  constructor(
    public name: string,
    private age: number
  ) {}

  getAge(): number {
    return this.age;
  }

  greet(): string {
    return `Hi, I'm ${this.name}`;
  }
}

const person1 = new Person("Alice", 30);
// person1.age; // Error: 'age' is private

// ------------------------------
// Logging examples
// ------------------------------
console.log(greet(username));
console.log(introduce(username, "Developer"));
console.log(welcome("Sam"));
console.log(formatId(7), formatId("ab-12"));
console.log(
  `Developer: ${developer1.name}, Skills: ${developer1.skills.join(", ")}, Experience: ${developer1.experience} years`
);
console.log(
  `Project: ${project1.title}, Duration: ${project1.duration} months, Stack: ${project1.stack.join(", ")}`
);
console.log(
  `Fullstack Developer Skills: ${fullstackDev.skills.join(", ")}, Backend: ${fullstackDev.technologies.join(", ")}`
);
console.log(`Project Status: ${projectStatus}`);
console.log(`String length: ${strLength}`);
console.log(stringArray, numberArray);
console.log(person1.greet());
console.log(`Age: ${person1.getAge()}`);
console.log(
  `${userDetails[0]} (age ${age}) knows ${skills.length} skills. Developer? ${isDeveloper}`
);

// Makes this file a module, so its top-level names (like `Developer`)
// don't clash with the same names in other .ts files in this folder.
export {};
