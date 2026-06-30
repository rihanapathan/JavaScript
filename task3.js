// Task 1 - Employee Login Eligibility

// Input from user
// let age = Number(prompt("Enter Employee Age:"));
// let idAvailable = prompt("Is Employee ID Available? (true/false):") === "true";
// let attendance = Number(prompt("Enter Attendance Percentage:"));

//  Check eligibility
// if (age >= 18 && idAvailable && attendance >= 75) {
//     document.write("<h2>Access Granted</h2>");
// } else {
//     document.write("<h2>Access Denied</h2>");
// }


// Task 2 - Student Grade System

// Input
// let marks = Number(prompt("Enter Student Marks:"));

// Grade Calculation
// if (marks >= 90 && marks <= 100) {
//     document.write("<h2>Grade A+</h2>");
// } else if (marks >= 80 && marks <= 89) {
//     document.write("<h2>Grade A</h2>");
// } else if (marks >= 70 && marks <= 79) {
//     document.write("<h2>Grade B</h2>");
// } else if (marks >= 60 && marks <= 69) {
//     document.write("<h2>Grade C</h2>");
// } else {
//     document.write("<h2>Fail</h2>");
// }


// Task 3 - ATM Withdrawal

// Input
// let balance = Number(prompt("Enter Account Balance:"));
// let withdraw = Number(prompt("Enter Withdraw Amount:"));

// Check conditions
// if (withdraw <= balance && withdraw % 100 === 0) {
//     balance = balance - withdraw;
//     console.log("Transaction Successful");
//     console.log("Remaining Balance: " + balance);
// } else {
//     console.log("Transaction Failed");
// }


// Task 4 - Food Ordering App

// let choice = Number(prompt("Enter your choice (1-5):"));

// switch (choice) {
//     case 1:
//         console.log("You Ordered Pizza");
//         break;

//     case 2:
//         console.log("You Ordered Burger");
//         break;

//     case 3:
//         console.log("You Ordered Shawarma");
//         break;

//     case 4:
//         console.log("You Ordered Biryani");
//         break;

//     case 5:
//         console.log("You Ordered Juice");
//         break;

//     default:
//         console.log("Invalid Choice");
// }


// Task 5 - E-Commerce Discount

// let purchase = Number(prompt("Enter Purchase Amount:"));
// let premium = prompt("Are you a Premium User? (true/false)") === "true";

// let discount;
// let finalPrice;

// if (purchase > 5000 && premium) {
//     discount = purchase * 20 / 100;
// } else {
//     discount = purchase * 10 / 100;
// }

// finalPrice = purchase - discount;

// console.log("Original Price: " + purchase);
// console.log("Discount: " + discount);
// console.log("Final Price: " + finalPrice);


// Task 6 - Attendance Report

// for (let day = 1; day <= 30; day++) {
//     console.log("Day " + day + " Present");
// }


// Task 7 - Even Number Generator

// for (let i = 2; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// Task 8 - Mobile Number Validation

// let mobile = prompt("Enter Mobile Number:");

// if (
//     mobile.length === 10 &&
//     (mobile.startsWith("6") ||
//      mobile.startsWith("7") ||
//      mobile.startsWith("8") ||
//      mobile.startsWith("9"))
// ) {
//     console.log("Valid Mobile Number");
// } else {
//     console.log("Invalid Mobile Number");
// }


// Task 9 - Shopping Cart

// let cart = [
//     "Milk",
//     "Bread",
//     "Egg",
//     "Rice",
//     "Oil"
// ];

// console.log("First Item: " + cart[0]);
// console.log("Last Item: " + cart[cart.length - 1]);
// console.log("Total Items: " + cart.length);


// Task 10 - Employee Database

// let employee = {
//     name: prompt("Enter Employee Name:"),
//     salary: Number(prompt("Enter Employee Salary:")),
//     department: prompt("Enter Department:"),
//     experience: Number(prompt("Enter Experience (Years):"))
// };

// console.log("Employee Name: " + employee.name);
// console.log("Department: " + employee.department);
// console.log("Experience: " + employee.experience + " Years");


// Task 11 - Company ID Generator

// let name = "Naveen";
// let id = 1045;
// let department = "Development";

// console.log(`Welcome ${name}`);
// console.log(`Your Employee ID is EMP${id}`);
// console.log(`Department : ${department}`);


// Task 12 - User Registration

// let name = prompt("Enter Your Name:");
// let age = prompt("Enter Your Age:");

// let accept = confirm("Do you accept the Terms & Conditions?");

// alert("Registered Successfully");


// Task 13 - Salary Increment Calculator

// let salary = 35000;
// let increment = 15;

// let incrementAmount = (salary * increment) / 100;
// let newSalary = salary + incrementAmount;

// console.log("Old Salary: " + salary);
// console.log("Increment Amount: " + incrementAmount);
// console.log("New Salary: " + newSalary);


// Task 14 - Restaurant Bill Generator

// let burger = 150;
// let pizza = 300;
// let juice = 80;

// let subtotal = burger + pizza + juice;
// let gst = (subtotal * 18) / 100;
// let grandTotal = subtotal + gst;

// console.log("Subtotal: ₹" + subtotal);
// console.log("GST (18%): ₹" + gst);
// console.log("Grand Total: ₹" + grandTotal);


// Task 15 - Company Attendance Dashboard

// let employees = {
//     Rahul: "Present",
//     Arun: "Absent",
//     Kamal: "Present",
//     Priya: "Present",
//     Divya: "Absent"
// };

// let presentCount = 0;
// let absentCount = 0;

// document.write("<h3>Present Employees</h3>");

// for (let name in employees) {
//     if (employees[name] === "Present") {
//         document.write(name + "<br>");
//         presentCount++;
//     }
// }

// document.write("<h3>Absent Employees</h3>");

// for (let name in employees) {
//     if (employees[name] === "Absent") {
//         document.write(name + "<br>");
//         absentCount++;
//     }
// }

// document.write("<br><b>Total Present: </b>" + presentCount + "<br>");
// document.write("<b>Total Absent: </b>" + absentCount);


// Mini Project - Employee Management System

// let employees = [
//     {
//         id: 101,
//         name: "Rahul",
//         salary: 30000,
//         department: "IT",
//         experience: 4
//     }
// ];

// let choice = Number(prompt(
//     "1. Add Employee\n" +
//     "2. View All Employees\n" +
//     "3. Search Employee by ID\n" +
//     "4. Calculate Salary with Bonus\n" +
//     "5. Check Experience Level\n" +
//     "6. Delete Employee\n" +
//     "7. Exit"
// ));

// switch (choice) {

//     case 1:

//         let id = Number(prompt("Enter ID"));
//         let name = prompt("Enter Name");
//         let salary = Number(prompt("Enter Salary"));
//         let department = prompt("Enter Department");
//         let experience = Number(prompt("Enter Experience"));

//         employees.push({
//             id: id,
//             name: name,
//             salary: salary,
//             department: department,
//             experience: experience
//         });

//         console.log("Employee Added Successfully");
//         break;

//     case 2:

//         for (let employee of employees) {
//             console.log(`ID : ${employee.id}`);
//             console.log(`Name : ${employee.name}`);
//             console.log(`Salary : ${employee.salary}`);
//             console.log(`Department : ${employee.department}`);
//             console.log(`Experience : ${employee.experience}`);
//         }

//         break;

//     case 3:

//         let searchId = Number(prompt("Enter Employee ID"));

//         for (let employee of employees) {

//             if (employee.id === searchId) {
//                 console.log(`Employee Found : ${employee.name}`);
//             } else {
//                 console.log("Employee Not Found");
//             }

//         }

//         break;

//     case 4:

//         for (let employee of employees) {

//             let bonus = employee.salary * 10 / 100;
//             let totalSalary = employee.salary + bonus;

//             console.log(`Salary : ${employee.salary}`);
//             console.log(`Bonus : ${bonus}`);
//             console.log(`Total Salary : ${totalSalary}`);
//         }

//         break;

//     case 5:

//         for (let employee of employees) {

//             if (employee.experience >= 5) {
//                 console.log(`${employee.name} is Senior Employee`);
//             } else {
//                 console.log(`${employee.name} is Junior Employee`);
//             }

//         }

//         break;

//     case 6:

//         let deleteId = Number(prompt("Enter Employee ID"));

//         for (let i = 0; i < employees.length; i++) {

//             if (employees[i].id === deleteId) {
//                 employees.splice(i, 1);
//                 console.log("Employee Deleted");
//             }

//         }

//         break;

//     case 7:

//         console.log("Thank You");
//         break;

//     default:

//         console.log("Invalid Choice");

// }
