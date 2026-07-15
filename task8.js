//Task 1 - Task 1: Employee Salary Dashboard
// let employees = [
//   { name: "Rahul", salary: 45000 },
//   { name: "Anjali", salary: 55000 },
//   { name: "Rohan", salary: 120000 },
//   { name: "Priya", salary: 70000 }
// ];

// Display all employee names using map()
// let names = employees.map(emp => emp.name);
// console.log("Employee Names:", names);

// Employees with salary > 50000
// let highSalary = employees.filter(emp => emp.salary > 50000);
// console.log("Salary Greater than 50000:");
// console.log(highSalary);

// First employee with salary > 100000
// let firstEmployee = employees.find(emp => emp.salary > 100000);
// console.log("First Employee Above 100000:");
// console.log(firstEmployee);

// Total salary expense
// let totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);
// console.log("Total Salary Expense:", totalSalary);


//Task 2: E-Commerce Cart Management
// let cart1 = ["Laptop", "Mouse"];
// let cart2 = ["Keyboard", "Headphones"];

// Merge arrays
// let cart = [...cart1, ...cart2];
// console.log("Merged Cart:", cart);

// Add new product without changing original
// let newCart = [...cart, "Monitor"];
// console.log("New Cart:", newCart);

// Rest Operator
// function checkout(...products) {
//   console.log("Products:", products);
//   console.log("Total Products:", products.length);
// }

// checkout("Laptop", "Mouse", "Keyboard", "Monitor");


//Task 3 - Task 3: Student Report Card
// let student = {
//   name: "Rihana",
//   department: "CSE",
//   marks: [85, 90, 80, 95, 88]
// };

// Object Destructuring
// let { name, department, marks } = student;

// Array Destructuring
// let [sub1, sub2, sub3] = marks;

// let total = marks.reduce((sum, mark) => sum + mark, 0);
// let average = total / marks.length;

// console.log("Student Name:", name);
// console.log("Department:", department);
// console.log("First Three Marks:", sub1, sub2, sub3);
// console.log("Total Marks:", total);
// console.log("Average Marks:", average);


//Task 4 - Product Search System
// let search = "   LapTop   ";

// Remove spaces
// let text = search.trim();

// Convert to lowercase
// text = text.toLowerCase();

// let product = "gaming laptop";

// Check product
// console.log("Contains:", product.includes(text));

// Highlight searched word
// let result = product.replace(text, "[" + text + "]");
// console.log(result);


//Task 5 -  Movie Collection Manager
// let movies = ["Leo", "KGF", "Pushpa"];

// console.log("Original:", movies);

// push()
// movies.push("Jailer");
// console.log("After Push:", movies);

// pop()
// movies.pop();
// console.log("After Pop:", movies);

// shift()
// movies.shift();
// console.log("After Shift:", movies);

// unshift()
// movies.unshift("Bahubali");
// console.log("After Unshift:", movies);

// splice()
// movies.splice(1, 1, "RRR");
// console.log("After Splice:", movies);

// Ratings
// let ratings = [4.5, 3.8, 5.0, 4.2];
// ratings.sort((a, b) => b - a);
// console.log("Ratings:", ratings);

// includes()
// console.log("Movie Exists:", movies.includes("RRR"));


//Task 1 - Employee Age Calculator
// let dob = new Date("2002-05-15");

// let currentDate = new Date();

// let age = currentDate.getFullYear() - dob.getFullYear();

// console.log("Employee Age:", age, "Years");


//Task 2 - Online Appointment Scheduler
// let appointment = new Date();

// appointment.setFullYear(2027);
// appointment.setMonth(11); // December (0 = January)
// appointment.setDate(15);
// appointment.setHours(10);
// appointment.setMinutes(30);

// console.log("Updated Appointment:");
// console.log(appointment);


//Task 3 - Multi-Country Meeting Time
// let currentTime = new Date();

// console.log("India:");
// console.log(currentTime.toLocaleString("en-IN", {
//     timeZone: "Asia/Kolkata"
// }));

// console.log("New York:");
// console.log(currentTime.toLocaleString("en-US", {
//     timeZone: "America/New_York"
// }));

// console.log("Tokyo:");
// console.log(currentTime.toLocaleString("en-JP", {
//     timeZone: "Asia/Tokyo"
// }));


//Task 4 - Product Warranty Expiry
// let purchaseDate = new Date();

// let warrantyDate = new Date(purchaseDate);

// warrantyDate.setFullYear(warrantyDate.getFullYear() + 2);

// console.log("Purchase Date:", purchaseDate);
// console.log("Warranty Expiry:", warrantyDate);


//Task 5 -  Digital Clock
// setInterval(() => {
//     let time = new Date();
//     console.log(time.toLocaleTimeString());
// }, 1000);
