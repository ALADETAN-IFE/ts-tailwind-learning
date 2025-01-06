// Basic Types
let id: number = 5;
let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = "Hello";
let age: number;

age = 2;

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any = [1, 2, 3, 4, 5];

// ids.push("hello")
ids.push(6);

// Tuple
let person: [number, string, boolean?] = [1, "one", true];

// Tuple Array
let employees: [number, string][];

employees = [
  [1, "Brad"],
  [2, "John"],
  [3, "Jill"],
];

//union
let product_id: string | number = 22;

product_id = "25";

//enum
enum Direction1 {
  Up = 5,
  Down,
  Left,
  Right,
}

// console.log(Direction1)

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// console.log(Direction2)

//Objects

const user1: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "John",
};

type User = {
  id: number;
  name: string;
};

const user2: User = {
  id: 4,
  name: "John",
};

// Type Assertion
let cid: any = 1;
let customerId = <boolean>cid;
let customerId2 = cid as string;

customerId = true;
customerId2 = "true";

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

// console.log(addNum(2,  2))

// Void
function log(message: string | number): void {
  console.log(message);
}

// log("Hello World")

//Interfaces
interface UserInterface {
  id: number;
  name: string;
  age?: number;
}

const user3: UserInterface = {
  id: 4,
  name: "John",
};

type Point = number | string;

// can't use Interface for a union

//   interface Point = number | string
const p1: Point = 1;

interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;
// const add: MathFunc = (x: string, y: number) : number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y;
// const sub: MathFunc = (x: number, y: string): number => x - y

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack.
const object1 = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add("23");

// Classes
// are used to create objects
class Person implements PersonInterface {
  public id: number;
  // private  id: number;
  // protected id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}
const brad = new Person(1, "Brad");
const mike = new Person(2, "Mike");

// brad.id = 5

// console.log(brad.register())
// console.log(brad, mike)

//SubClasses
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(1, "Shawn", "Developer");
// console.log(emp.register())

//Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}
let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["brad", "John", "Jill"]);

strArray.push("1");

// mosh Class Extra
// mosh Class Extra
// mosh Class Extra
// mosh Class Extra
// mosh Class Extra
// mosh Class Extra
// mosh Class Extra
// mosh Class Extra
// mosh Class Extra
// mosh Class Extra
// mosh Class Extra
// mosh Class Extra
// mosh Class Extra
// mosh Class Extra
// mosh Class Extra
// mosh Class Extra
// mosh Class Extra
// mosh Class Extra
// mosh Class Extra

function calculateTax(income: number){

}