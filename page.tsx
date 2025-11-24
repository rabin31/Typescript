//classes objects
// import React from 'react'

// class Person{
//   name: string;
//   age: number;

//   constructor(name: string, age: number){
//     this.name = name
//     this.age = age
//   }

//   introduce(){
//     return  `my name and age is ${this.name} and ${this.age}`
//   }
// }


// const page = () => {

//   const person = new Person("Rabin", 23)

//   return (
//     <div>{person.introduce()}</div>
//   )
// }

// export default page


//enums

// import React from 'react'

// enum Role{
//   Admin = "ADMIN",
//   User = "USER",
//   Guest = "GUEST",
// }

// const page = () => {

//   const userRole: Role = Role.Admin;

//   return (
//     <div>Role: {userRole}</div>
//   )
// }

// export default page

//interfaces

// import React from 'react'

// interface User{
//   id: number;
//   name: string;
//   age: number
// }

// const page = () => {

// const userData: User = {
//   id: 2,
//   name: "Rabin",
//   age: 19
// }

//   return (
//     <div>
//       <p>id: {userData.id}</p>
//       <p>name: {userData.name}</p>
//       <p>age: {userData.age}</p>
//     </div>
//   )
// }

// export default page

//type-alias

// import React from 'react'

// type ID= number | string;

// const page = () => {

//    const userId: ID = "UTF-223";

//   return (
//     <div>{userId}</div>
//   )
// }

// export default page

//access modifiers

// import React from 'react'

// class Bank{
//   public name: string;
//   private balance: number;
//   protected branch: string;

//   constructor(name:string, balance:number, branch:string){
//     this.name = name
//     this.balance = balance
//     this.branch = branch
//   }

//   public getBalance(){
//     return this.balance;
//   }
// }

// const page = () => {

//   const acc = new Bank("Rabin", 5000, "Kathmandu")

//   return (
//     <div>
//       <h1>Access Modifiers</h1>
//       <p>Name: {acc.name}</p>
//       <p>Balance: {acc.getBalance()}</p>
//     </div>
//   )
// }

// export default page


//inheritance

// import React from 'react'

// class Animal{
//   constructor(public name: string){}
//   speak(){
//     return `${this.name} makes a sound.`
//   }
// }

// class Dog extends Animal{
//   bark(){
//     return `${this.name} barks!`
//   }
// }

// const page = () => {

//   const dog = new Dog("chanke")

//   return (
//     <div>
//       <p>{dog.bark()}</p>
//       <p>{dog.speak()}</p>
//     </div>
//   )
// }

// export default page

//abstract

// "use client";
// import React from "react";

// abstract class Shape {
//   abstract area(): number;
// }

// class Rectangle extends Shape {
//   constructor(private width: number, private height: number) {
//     super();
//   }

//   area(): number {
//     return this.width * this.height;
//   }
// }

// export default function AbstractPage() {
//   const rect = new Rectangle(10, 5);

//   return (
//     <div>
//       <h1>Abstract Class Example</h1>
//       <p>Rectangle Area: {rect.area()}</p>
//     </div>
//   );
// }

// for react hooks

// 'use client'
// import React, { useState } from 'react'

// const page = () => {

//   const [data, setData]:[number, (n:number)=> void] = useState(0)

//   return (
//     <div>page</div>
//   )
// }

// export default page