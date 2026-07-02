//Task 1 - Find the Highest Salary

// let employees = [
//     {
//         name: "Naveen",
//         id: 101,
//         salary: 30000
//     },
//     {
//         name: "John",
//         id: 102,
//         salary: 60000
//     },
//     {
//         name: "Arun",
//         id: 103,
//         salary: 45000
//     }
// ];

// let highest = employees[0];

// for (let i = 1; i < employees.length; i++) {
//     if (employees[i].salary > highest.salary) {
//         highest = employees[i];
//     }
// }

// console.log("Highest Salary :", highest.salary);
// console.log("Employee Name :", highest.name);


//Task 2 - Find Employee by ID
// let employees = [
//     {
//         name: "Naveen",
//         id: 101,
//         salary: 30000
//     },
//     {
//         name: "John",
//         id: 102,
//         salary: 60000
//     },
//     {
//         name: "Arun",
//         id: 103,
//         salary: 45000
//     }
// ];

// let searchId = Number(prompt("Enter Employee ID:"));

// let employee = employees.find(emp => emp.id === searchId);

// if (employee) {
//     console.log("Employee Found");
//     console.log("Name :", employee.name);
//     console.log("Salary :", employee.salary);
// } else {
//     console.log("Employee Not Found");
// }


//Task 3 - Calculate Salary with Bonus
// let employees = [
//     {
//         name: "Naveen",
//         id: 101,
//         salary: 30000
//     },
//     {
//         name: "John",
//         id: 102,
//         salary: 60000
//     },
//     {
//         name: "Arun",
//         id: 103,
//         salary: 45000
//     }
// ];

// let bonus = 5000;

// for (let i = 0; i < employees.length; i++) {
//     let totalSalary = employees[i].salary + bonus;
//     console.log(employees[i].name + " : " + totalSalary);
// }


// Task 4 - Experience Check
// let employees = [
// {
//     name: "Naveen",
//     experience: 2
// },
// {
//     name: "John",
//     experience: 7
// },
// {
//     name: "Arun",
//     experience: 5
// }
// ];

// for (let i = 0; i < employees.length; i++) {
//     if (employees[i].experience >= 5) {
//         console.log(employees[i].name + " - Senior Employee");
//     } else {
//         console.log(employees[i].name + " - Junior Employee");
//     }
// }


//Task 5 - Display Only Employee Names
// let employees = [
// {
//     name: "Naveen",
//     experience: 2
// },
// {
//     name: "John",
//     experience: 7
// },
// {
//     name: "Arun",
//     experience: 5
// }
// ];

// for (let i = 0; i < employees.length; i++) {
//     console.log(employees[i].name);
// }


//Task 6 - Display Employee IDs
// let employees = [
//     {
//         name: "Naveen",
//         id: 101
//     },
//     {
//         name: "John",
//         id: 102
//     },
//     {
//         name: "Arun",
//         id: 103
//     }
// ];

// for (let i = 0; i < employees.length; i++) {
//     console.log(employees[i].id);
// }


//Task 8 - Employees Earning More Than ₹40,000
// let employees = [
//     {
//         name: "Naveen",
//         salary: 30000
//     },
//     {
//         name: "John",
//         salary: 60000
//     },
//     {
//         name: "Arun",
//         salary: 45000
//     }
// ];

// for (let i = 0; i < employees.length; i++) {
//     if (employees[i].salary > 40000) {
//         console.log(employees[i].name);
//     }
// }


//Task 9 - Increase Salary
// let employees = [
//     {
//         name: "Naveen",
//         salary: 30000
//     },
//     {
//         name: "John",
//         salary: 60000
//     },
//     {
//         name: "Arun",
//         salary: 45000
//     }
// ];

// for (let i = 0; i < employees.length; i++) {
//     employees[i].salary = employees[i].salary + 5000;
//     console.log(employees[i].name + " : " + employees[i].salary);
// }


//Task 10 - Employee Report
// let employees = [
//     {
//         name: "Naveen",
//         id: 101,
//         salary: 30000
//     },
//     {
//         name: "John",
//         id: 102,
//         salary: 60000
//     },
//     {
//         name: "Arun",
//         id: 103,
//         salary: 45000
//     }
// ];

// for (let i = 0; i < employees.length; i++) {
//     console.log(`Employee Name : ${employees[i].name}`);
//     console.log(`Employee ID : ${employees[i].id}`);
//     console.log(`Salary : ${employees[i].salary}`);
//     console.log();
// }


//Challenge Task 
// let employees = [
// {
//     name: "Naveen",
//     id: 101,
//     salary: 30000
// },
// {
//     name: "John",
//     id: 102,
//     salary: 60000
// },
// {
//     name: "Arun",
//     id: 103,
//     salary: 45000
// }
// ];

// Total number of employees
// console.log("Total Employees :", employees.length);

// Highest Salary
// let highestSalary = employees[0].salary;
// let highestEmployee = employees[0].name;

// Lowest Salary
// let lowestSalary = employees[0].salary;
// let lowestEmployee = employees[0].name;

// Total Salary
// let totalSalary = 0;

// for (let i = 0; i < employees.length; i++) {

//     totalSalary += employees[i].salary;

//     if (employees[i].salary > highestSalary) {
//         highestSalary = employees[i].salary;
//         highestEmployee = employees[i].name;
//     }

//     if (employees[i].salary < lowestSalary) {
//         lowestSalary = employees[i].salary;
//         lowestEmployee = employees[i].name;
//     }
// }

// console.log("Highest Salary :", highestSalary);
// console.log("Lowest Salary :", lowestSalary);
// console.log("Total Salary :", totalSalary);

// console.log("Employee with Highest Salary :", highestEmployee);
// console.log("Employee with Lowest Salary :", lowestEmployee);

// Salary greater than 40000
// console.log("\nEmployees earning more than 40000:");

// for (let i = 0; i < employees.length; i++) {
//     if (employees[i].salary > 40000) {
//         console.log(employees[i].name);
//     }
// }

// Search Employee by ID
// let searchId = Number(prompt("Enter Employee ID:"));

// console.log("\nSearch Employee:");

// for (let i = 0; i < employees.length; i++) {
//     if (employees[i].id == searchId) {
//         console.log(employees[i].name, "-", employees[i].salary);
//     }
// }

// Add Bonus
// console.log("\nSalary After Bonus:");

// for (let i = 0; i < employees.length; i++) {
//     employees[i].salary += 5000;
//     console.log(employees[i].name + " : " + employees[i].salary);
// }

// Employee Report
// console.log("\nEmployee Report");

// for (let i = 0; i < employees.length; i++) {
//     console.log(`
// Employee Name : ${employees[i].name}
// Employee ID : ${employees[i].id}
// Salary : ${employees[i].salary}
// `);
// }


// Task 1 - Company Welcome Function
// function companyWelcome() {
//     console.log("Welcome to Stackly IT");
// }

// companyWelcome();


//Task 2 - Employee Details
// function employeeDetails(name, department, salary) {
//     console.log("Employee Name :", name);
//     console.log("Department :", department);
//     console.log("Salary :", salary);
// }

// employeeDetails("Naveen", "Developer", 30000);


//Task 3 - Calculate Bonus
// function calculateBonus(salary, bonus) {
//     let totalSalary = salary + bonus;
//     console.log("Total Salary :", totalSalary);
// }

// calculateBonus(40000, 5000);


//Task 4 - Student Result
// function checkResult(marks) {
//     if (marks >= 35) {
//         console.log("Pass");
//     } else {
//         console.log("Fail");
//     }
// }

// checkResult(45);


//Task 5 - Return Employee Name
// function getEmployeeName() {
//     return "Naveen";
// }

// let employeeName = getEmployeeName();

// console.log(employeeName);


//Task 6 - Product Price
// function getPrice() {
//     return 25000;
// }

// let price = getPrice();
// let gst = 4500;
// let totalPrice = price + gst;

// console.log("Price :", price);
// console.log("GST :", gst);
// console.log("Total Price :", totalPrice);


//Task 7 - Scope
// function demo() {

//     if (true) {

//         var a = 10;
//         let b = 20;
//         const c = 30;

//     }

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// demo();


//Task 8 - Hoisting
// console.log(a);

// var a = 100;

// console.log(b);

// let b = 200;


//Task 9 - Named Function
// function greet() {
//     console.log("Good Morning");
// }

// greet();


//Task 10 - Anonymous Function
// let welcome = function () {
//     console.log("Welcome Employee");
// };

// welcome();


//Task 11 - Arrow Function
// let training = () => {
//     console.log("JavaScript Training");
// };

// training();


//Task 12 - Return Function
// function company() {
//     return "Stackly";
// }

// let name = company();

// console.log("Welcome " + name);


//Task 13 - Higher Order Function
// function dashboard() {
//     console.log("Dashboard Loaded");
// }

// function login(callback) {
//     console.log("Login Successful");
//     callback();
// }

// login(dashboard);


//Task 14 - Callback Function
// function order(callback) {
//     console.log("Order Received");
//     callback();
// }

// function prepare(callback) {
//     console.log("Preparing Food");
//     callback();
// }

// function deliver() {
//     console.log("Delivered");
// }

// order(function () {
//     prepare(deliver);
// });


//Task 15 - Generator Function
// function* coupons() {
//     yield "10% Discount";
//     yield "20% Discount";
//     yield "30% Discount";
//     yield "Better Luck Next Time";
// }

// let offer = coupons();

// console.log(offer.next().value);
// console.log(offer.next().value);
// console.log(offer.next().value);
// console.log(offer.next().value);


//Task 16 - Return + Generator
// function* fruits() {
//     yield "Apple";
//     yield "Orange";
//     yield "Banana";
// }

// let fruit = fruits();

// console.log(fruit.next().value);
// console.log(fruit.next().value);
// console.log(fruit.next().value);


//Task 17 - Currying
// function discount(price) {
//     return function (percent) {
//         let finalPrice = price - (price * percent / 100);
//         console.log("Final Price :", finalPrice);
//     };
// }

// discount(1000)(10);


//Task 18 - Company Salary
// function salary(salaryAmount) {
//     return function (bonus) {
//         return function (allowance) {
//             console.log(salaryAmount + bonus + allowance);
//         };
//     };
// }

// salary(30000)(5000)(2000);


//Task 19 - Real-Time Login System
// function enterUsername() {
//     console.log("Enter Username");
// }

// function verifyPassword() {
//     console.log("Verify Password");
// }

// function loginSuccess() {
//     console.log("Login Successful");
// }

// function loadDashboard() {
//     console.log("Load Dashboard");
// }

// enterUsername();
// verifyPassword();
// loginSuccess();
// loadDashboard();


// Mini Project - Employee Salary Management System

// Employee Object
// let employee = {
//     name: "Rihana",
//     id: 101,
//     department: "Developer",
//     salary: 30000
// };

// Arrow Function
// const welcome = () => {
//     console.log("Welcome to Employee Salary Management System");
// };
// welcome();

// Display Employee Details
// function displayEmployee() {
//     console.log("\nEmployee Details");
//     console.log("Name :", employee.name);
//     console.log("ID :", employee.id);
//     console.log("Department :", employee.department);
//     console.log("Salary :", employee.salary);
// }
// displayEmployee();

// Calculate Salary + Bonus
// function calculateSalary(salary, bonus) {
//     return salary + bonus;
// }

// let finalSalary = calculateSalary(employee.salary, 5000);

// console.log("\nFinal Salary :", finalSalary);

// Anonymous Function
// let department = function () {
//     console.log("\nDepartment :", employee.department);
// };
// department();

// Callback Function
// function dashboard() {
//     console.log("Employee Dashboard Loaded");
// }

// Higher-Order Function
// function login(callback) {
//     console.log("\nLogin Successful");
//     callback();
// }

// login(dashboard);

// Generator Function
// function* bonusCoupons() {
//     yield "₹500 Bonus Coupon";
//     yield "₹1000 Bonus Coupon";
//     yield "₹2000 Bonus Coupon";
// }

// let coupon = bonusCoupons();

// console.log("\nMonthly Bonus Coupons");
// console.log(coupon.next().value);
// console.log(coupon.next().value);
// console.log(coupon.next().value);

// Currying (Tax Calculation)
// function tax(salary) {
//     return function (taxPercent) {
//         let taxAmount = salary * taxPercent / 100;
//         let salaryAfterTax = salary - taxAmount;
//         return salaryAfterTax;
//     };
// }

// let salaryAfterTax = tax(finalSalary)(10);

// console.log("\nSalary After Tax :", salaryAfterTax);

// Final Employee Report
// console.log("\n------ Employee Report ------");
// console.log(`Employee Name : ${employee.name}`);
// console.log(`Employee ID : ${employee.id}`);
// console.log(`Department : ${employee.department}`);
// console.log(`Original Salary : ${employee.salary}`);
// console.log(`Salary + Bonus : ${finalSalary}`);
// console.log(`Salary After Tax : ${salaryAfterTax}`);