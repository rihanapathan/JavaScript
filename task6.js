//Task 1 - Employee Login (Scope)
// function employeeLogin() {

//     if (true) {
//         var companyName = "Stackly IT";
//         let employeeId = 101;
//         const password = "abc123";

//         console.log("Inside Block:");
//         console.log(employeeId);
//         console.log(password);
//     }

//     console.log("Outside Block:");
//     console.log(companyName);   //Access 

//     console.log(employeeId);    //Error
//     console.log(password);      //Error
// }

// employeeLogin();


//Task 2 - ATM Machine (Hoisting)
// var
// console.log(accountBalance);
// var accountBalance = 10000;

// let
// console.log(amount);
// let amount = 5000;

// const
// console.log(balance);
// const balance = 2000;


//Task 3 - Food Delivery App (Named Function)
// function orderFood(foodName) {
//     console.log("Order Placed :", foodName);
// }

// orderFood("Chicken Biryani");


//Task 4 - WhatsApp Status (Anonymous Function)
// let updateStatus = function (status) {
//     console.log("Status Updated :", status);
// };

// updateStatus("Busy in Meeting");


//Task 5 -  Weather App (Arrow Function)
// const weather = (city, temperature) => {
//     console.log(`${city} Temperature is ${temperature}°C`);
// };

// weather("Chennai", 36);


//Task 6 - Flipkart Offer (IIFE)
// (function () {
//     console.log("Today's Offer");
//     console.log("Flat 60% Discount");
// })();


//Task 7 - Online Payment (Higher Order + Callback)
// function paymentSuccess() {
//     console.log("Payment Successful");
// }

// function makePayment(callback) {
//     console.log("Payment Processing...");
//     callback();
// }

// makePayment(paymentSuccess);


//Task 8 - YouTube Playlist (Generator Function)
// function* playlist() {
//     yield "Video 1";
//     yield "Video 2";
//     yield "Video 3";
//     yield "Video 4";
//     return "Playlist Completed";
// }

// let play = playlist();

// console.log(play.next().value);
// console.log(play.next().value);
// console.log(play.next().value);
// console.log(play.next().value);
// console.log(play.next().value);


//Task 9 -  Student Result (Return)
// function calculateTotal() {
//     return 485;
// }

// let total = calculateTotal();

// console.log("Total Marks :", total);


//Task 10 - Shopping Cart (Return)
// function cartTotal(price1, price2, price3) {
//     return price1 + price2 + price3;
// }

// let total = cartTotal(500, 700, 800);

// console.log("Total Amount :", total);


//Task 11 -  Salary Calculator (Uncurrying)
// function salary(basic, hra, bonus) {
//     let total = basic + hra + bonus;
//     console.log("Total Salary :", total);
// }

// salary(40000, 10000, 8000);


//Task 12 - Food Bill (Currying)
// function foodBill(food) {
//     return function (drinks) {
//         return function (dessert) {
//             return food + drinks + dessert;
//         };
//     };
// }

// console.log(foodBill(200)(100)(80));


//Task 13 - E-commerce Coupon Generator
// function* coupons() {
//     yield "WELCOME10";
//     yield "SAVE20";
//     yield "SUPER30";
//     yield "MEGA50";
//     return "No More Coupons";
// }

// let coupon = coupons();

// console.log(coupon.next().value);
// console.log(coupon.next().value);
// console.log(coupon.next().value);
// console.log(coupon.next().value);
// console.log(coupon.next().value);


//Task 14 -  Bank Transaction (Higher Order + Callback)
// function success() {
//     console.log("Transaction Successful");
// }

// function withdraw(callback) {
//     console.log("Processing...");
//     callback();
// }

// withdraw(success);


//Task 15 - Employee Profile (Scope)
// function employeeProfile() {

//     if (true) {
//         var company = "Stackly";
//         let designation = "MERN Developer";
//         const salary = 50000;
//     }

//     console.log(company);      // Accessible
//     console.log(designation);  // Error
//     console.log(salary);       // Error
// }

// employeeProfile();

//Explanation (Scope)
// var company → Function scoped, so it is accessible outside the if block.
// let designation → Block scoped, so it is accessible only inside the if block.
// const salary → Block scoped, so it is accessible only inside the if block.