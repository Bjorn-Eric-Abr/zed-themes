// Basic Types
const str: string = "Hello";
const num: number = 42;
const bool: boolean = true;
const arr1: number[] = [1, 2, 3];
const arr2: Array<string> = ["a", "b", "c"];
const tuple: [string, number] = ["age", 30];
const anyType: any = "anything";
const unknownType: unknown = 4;

// Type Inference
const inferredString = "TypeScript infers this as string";
const inferredNumber = 100;

// Union Types
type StringOrNumber = string | number;
const id: StringOrNumber = Math.random() > 0.5 ? "abc123" : 456;

// Type Aliases
type Point = {
  x: number;
  y: number;
};
const point: Point = { x: 10, y: 20 };

// Interfaces
interface User {
  id: number;
  name: string;
  email?: string; // Optional property
  readonly createdAt: Date; // Read-only property
}

const user: User = {
  id: 1,
  name: "Alice",
  createdAt: new Date(),
};

// Interface Extension
interface Employee extends User {
  department: string;
  salary: number;
}

// Type Intersection
type AdminUser = User & { permissions: string[] };
const admin: AdminUser = {
  id: 2,
  name: "Bob",
  createdAt: new Date(),
  permissions: ["read", "write", "delete"],
};

// Generics
function identity<T>(arg: T): T {
  return arg;
}
const result = identity<string>("TypeScript");

// Generic Interfaces
interface Box<T> {
  value: T;
}
const numberBox: Box<number> = { value: 42 };
const stringBox: Box<string> = { value: "hello" };

// Generic Classes
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);

// Enums
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
const move: Direction = Direction.Up;

// Literal Types
type Alignment = "left" | "center" | "right";
const textAlign: Alignment = "center";

// Functions
function add(a: number, b: number): number {
  return a + b;
}

// Function Types
type MathFunc = (x: number, y: number) => number;
const multiply: MathFunc = (a, b) => a * b;

// Optional and Default Parameters
function greet(name: string, greeting = "Hello"): string {
  return `${greeting}, ${name}!`;
}

// Rest Parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, val) => acc + val, 0);
}

// Function Overloading
function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string {
  if (typeof value === "string") {
    return value.trim();
  } else {
    return value.toFixed(2);
  }
}

// Classes
class Animal {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  makeSound(): void {
    console.log("Some generic sound");
  }
}

// Inheritance
class Dog extends Animal {
  constructor(
    name: string,
    private breed: string,
  ) {
    super(name);
  }

  getBreed(): string {
    return this.breed;
  }

  override makeSound(): void {
    console.log("Woof! Woof!");
  }
}

// Implementing Interfaces
interface Movable {
  move(distance: number): void;
}

class Car implements Movable {
  constructor(private speed: number) {}

  move(distance: number): void {
    console.log(`Moving ${distance} km at ${this.speed} km/h`);
  }
}

// Type Guards
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function processValue(value: unknown): void {
  if (isString(value)) {
    console.log(value.toUpperCase()); // Type is narrowed to string
  } else {
    console.log("Not a string");
  }
}

// Mapped Types
type Readonly_<T> = {
  readonly [P in keyof T]: T[P];
};

const readonlyPoint: Readonly<Point> = { x: 10, y: 20 };
// readonlyPoint.x = 5; // Error: Cannot assign to 'x' because it is a read-only property

// Utility Types
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// Partial - All properties become optional
const partialTodo: Partial<Todo> = { title: "Learn TypeScript" };

// Required - All properties become required
const requiredTodo: Required<Todo> = {
  title: "Learn TypeScript",
  description: "Study common patterns",
  completed: false,
};

// Pick - Select specific properties
type TodoPreview = Pick<Todo, "title" | "completed">;
const todoPreview: TodoPreview = {
  title: "Learn TypeScript",
  completed: false,
};

// Omit - Remove specific properties
type TodoWithoutDescription = Omit<Todo, "description">;
const simpleTask: TodoWithoutDescription = { title: "Clean", completed: true };

// Nullish Coalescing and Optional Chaining
const userInput = null;
const defaultValue = "Default";
const result1 = userInput ?? defaultValue; // "Default"

const user2 = { profile: { name: "Alice" } };
const userName = user2?.profile?.name; // Safe access with optional chaining

// Assertions
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const canvas2 = <HTMLCanvasElement>document.getElementById("canvas"); // Alternative syntax

// Non-null assertion
function findElement(id: string): HTMLElement | null {
  return document.getElementById(id);
}
const element = findElement("app")!; // Assert that it won't be null

// Template Literal Types
type EventName = "click" | "scroll" | "mousemove";
type EventHandler = `on${Capitalize<EventName>}`; // "onClick" | "onScroll" | "onMousemove"

// Async/Await with TypeScript
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json() as Promise<T>;
}

interface ApiResponse {
  data: any;
  status: number;
}

// Usage of the async function
async function getData() {
  try {
    const result = await fetchData<ApiResponse>("https://api.example.com/data");
    console.log(result.status);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}
