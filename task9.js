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