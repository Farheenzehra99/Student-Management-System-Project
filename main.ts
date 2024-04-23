#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';


class School {
  name: string;

  students: Student[] = [];
  teachers: Teacher[] = [];

  addStudent(stdObj: Student) {
    this.students.push(stdObj);
  }

  addTeacher(tedObj: any) {
    this.teachers.push(tedObj);
  }

  constructor(name: string) {
    this.name = name;
  }
}


class Student {
  name: string;
  age: number;
  studentId: number;
  schoolName: string;
  balance: number;


  constructor(name: string, age: number,studentId: number ,schoolName: string,balance: number) {
    this.name = name;
    this.age = age;
    this.studentId = studentId;
    this.schoolName = schoolName;
    this.balance = 0;
  }
}

class Teacher {
  name: string;
  age: number;
  schoolName: string;
  email: string;
  contact: string;

  constructor(name: string, age: number, schoolName: string, email: string, contact: string) {
    this.name = name;
    this.age = age;
    this.schoolName = schoolName;
    this.email = email;
    this.contact = contact;
  }
}

let school1 = new School ("The City School")
let school2 = new School ("Foundation public school")

let s1 = new Student("Hira",18,11201,school1.name,1000)
let s2 = new Student("Farheen",16,11202,school1.name,0)
let s3 = new Student("Farah",20,11203,school2.name,5000)
let s4 = new Student("Manahil",19,11204,school2.name,2000)

let t1 = new Teacher("Ferwa",45,school1.name,"aba@gmail.com", "03331234567")
let t2 = new Teacher("Rabab",45,school1.name,"cde@gmail.com", "03322123456")
let t3 = new Teacher("Fiza",52,school2.name,"fgh@gmail.com", "03132345678")
let t4 = new Teacher("Fatima",42,school2.name,"ijk@gmail.com", "03101234567")

// add Student

school1.addStudent(s1)
school1.addStudent(s2)
school2.addStudent(s3)
school2.addStudent(s4)

// add Teacher

school1.addTeacher(t1)
school1.addTeacher(t2)
school2.addTeacher(t3)
school2.addTeacher(t4)

console.log(school1);
console.log(school2);

// Operations

function viewBalance(student: Student) {
  console.log(chalk.blueBright(`Student: ${student.name}'s balance is $${student.balance}`));
}

function payTuitionFees(student: Student, amount: number) {
  student.balance -= amount;
  console.log(chalk.greenBright(`Paid $${amount} to School.`));
}

function showStatus(school: School) {
  console.log(chalk.yellowBright(`School: ${school.name}`));
}

// Operations

viewBalance(s1); // Student: Hira's balance is $0
payTuitionFees(s1, 1000); // Paid $1000 to Hira
showStatus(school1);

viewBalance(s2); // Student: Farheen's balance is $0
payTuitionFees(s2,3000 ); // Paid $3000 to Farheen
showStatus(school1); 

viewBalance(s3); // Student: Farah's balance is $500
payTuitionFees(s3, 5000); // Paid $5000 to Farah
showStatus(school2); // Student: Farah's balance is $

viewBalance(s4); // Student: Manahil's balance is $2000
payTuitionFees(s4, 2000); // Paid $2000 to Manahil
showStatus(school2)