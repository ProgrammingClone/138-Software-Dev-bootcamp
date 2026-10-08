
// ------------------------------
// Developer interface & TeamMember class
// ------------------------------
interface Developer {
  readonly id: number;
  name: string;
  skills: string[];
  experience: number;
  isRemote?: boolean;
}


class TeamMember implements Developer {
  constructor(
    public readonly id: number,
    public name: string,
    public skills: string[],
    public experience: number,
    public isRemote?: boolean
  ) {}

  introduce(): string {
    return `Hi, I'm ${this.name}, a ${this.experience} year(s) developer.`;
  }
}

// ------------------------------
// Project type
// ------------------------------
type Project = {
  title: string;
  stack: string[];
  duration: number; // months
  status: "active" | "inactive" | "completed";
};

const project1: Project = {
  title: "Portfolio App",
  stack: ["HTML", "CSS", "JS", "TypeScript"],
  duration: 3,
  status: "active",
};

// ------------------------------
// Task type & array
// ------------------------------
type Task = {
  title: string;
  assignedTo: number; // a Developer id
  completed: boolean;
};

const tasks: Task[] = [];

// ------------------------------
// Functions to manage tasks
// ------------------------------
function assignTask(taskTitle: string, developerId: number): void {
  tasks.push({ title: taskTitle, assignedTo: developerId, completed: false });
}

function completeTask(taskTitle: string): void {
  const task = tasks.find((t) => t.title === taskTitle);
  if (task) {
    task.completed = true; // if no task matches, do nothing
  }
}

function getProjectProgress(): string {
  const completedTasks = tasks.filter((t) => t.completed).length;
  return `${completedTasks}/${tasks.length} tasks completed`;
}

// ------------------------------
// Usage example
// ------------------------------
const dev1 = new TeamMember(1, "Alice", ["React", "TypeScript"], 4, true);
const dev2 = new TeamMember(2, "Bob", ["Node.js", "Express"], 5);

assignTask("Setup repo", dev1.id);
assignTask("Create backend API", dev2.id);

completeTask("Setup repo");

console.log(getProjectProgress());
// Output: "1/2 tasks completed"

console.log(dev1.introduce());
// Output: "Hi, I'm Alice, a 4 year(s) developer."

// Stretch goal 1
console.log(`${project1.title}: ${getProjectProgress()}`);
// Output: "Portfolio App: 1/2 tasks completed"

// Makes this file a module, so names like `Developer` and `project1`
// don't clash with the same names in index.ts.
export {};
