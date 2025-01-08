"use strict";
// Basic Types
let id = 5;
let company = "Traversy Media";
let isPublished = true;
let x = "Hello";
let age;
age = 2;
let ids = [1, 2, 3, 4, 5];
let arr = [1, 2, 3, 4, 5];
// ids.push("hello")
ids.push(6);
// Tuple
let person = [1, "one", true];
// Tuple Array
let employees;
employees = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
];
//union
let product_id = 22;
product_id = "25";
//enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 5] = "Up";
    Direction1[Direction1["Down"] = 6] = "Down";
    Direction1[Direction1["Left"] = 7] = "Left";
    Direction1[Direction1["Right"] = 8] = "Right";
})(Direction1 || (Direction1 = {}));
// console.log(Direction1)
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
// console.log(Direction2)
//Objects
const user1 = {
    id: 1,
    name: "John",
};
const user2 = {
    id: 4,
    name: "John",
};
// Type Assertion
let cid = 1;
let customerId = cid;
let customerId2 = cid;
customerId = true;
customerId2 = "true";
// Functions
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(2,  2))
// Void
function log(message) {
    console.log(message);
}
const user3 = {
    id: 4,
    name: "John",
};
// can't use Interface for a union
//   interface Point = number | string
const p1 = 1;
const add = (x, y) => x + y;
// const add: MathFunc = (x: string, y: number) : number => x + y
const sub = (x, y) => x - y;
// object is a string, because we declared it above as the variable part of Backpack.
const object1 = backpack.get();
// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add("23");
// Classes
// are used to create objects
class Person {
    constructor(id, name) {
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
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(1, "Shawn", "Developer");
// console.log(emp.register())
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brad", "John", "Jill"]);
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
function calculateTax(income) {
}
