//Q1.
// for (var i = 0; i < 6; i++) {
//   document.write("Hello World " + "<br>");
// }

//Q2.

// for (var i =1; i<11; i++){
//     document.write(i +"<br>")
// }

//Q3.

// var number = parseInt(prompt("Enter a number to print its multiplication table: "))
// var length = parseInt(prompt("Enter length of multiplication table: "))

// document.write("Multiplication table of: " + " "+ number)
// document.write("<br>")
// document.write("Length: " + " "+ length)
// document.write("<br>")
// document.write("<br>")

// for (var i =1; i<length+1; i++){
//     var result = number * i
//     document.write(number + " " + "*" + i + " " + "=" + " "+ result)
//     document.write("<br>")

// }

//Q4.

// var ary = ["Nokia", "Samsung" ,"Apple", "Sony", "Huawei"]

// for (var i =0; i<ary.length; i++ ){
//     document.write(ary[i] + "<br>")
// }


//Q5.

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// for (i=0; i<fruits.length; i++){
//     document.write(fruits[i] + "<br>")
// }
// document.write("<br>")
// document.write("<br>")

// for (i=0; i<fruits.length; i++){
//     document.write("Element at index " + "" + i + " " +"is"+ " "+ fruits[i] + "<br>")
// }


//Q6.

// var num = parseInt(prompt("Enter number of items: "));
// var items = [];

// for (var i = 0; i < num; i++) {
//     var item = prompt("Enter value for index " + i);
//     items[i] = item;
// }

// document.write("Number of items: " + num);
// document.write("<br>");
// document.write("Items:");
// document.write("<br>");
// document.write("<br>");

// for (var i = 0; i < items.length; i++) {
//     document.write(items[i] + "<br>");
// }


//Q7.
// document.write("Counting: ");
// for (var i = 1; i <= 15; i++) {
//     document.write(i);
//     if (i < 15) {
//         document.write(", ");
//     }
// }
// document.write("<br>");

// document.write("b. Reverse counting: ");
// for (var i = 10; i >= 1; i--) {
//     document.write(i);
//     if (i > 1) {
//         document.write(", ");
//     }
// }
// document.write("<br>");

// document.write("c. Even: ");
// for (var i = 0; i <= 20; i += 2) {
//     document.write(i);
//     if (i < 20) {
//         document.write(", ");
//     }
// }
// document.write("<br>");

// document.write("d. Odd: ");
// for (var i = 1; i <= 19; i += 2) {
//     document.write(i);
//     if (i < 19) {
//         document.write(", ");
//     }
// }
// document.write("<br>");

// document.write("e. Series: ");
// for (var i = 2; i <= 20; i += 2) {
//     document.write(i + "k");
//     if (i < 20) {
//         document.write(", ");
//     }
// }

//Q8.
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var flag = false;

// var user = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// for (var i = 0; i < A.length; i++) {
//     if (A[i] == user) {
//         document.write(user + " " + "is available at index " + i + " in our bakery");
//         flag = true;
//     }
// }

// if (flag==false) {
//     document.write("We are sorry, " + user + " is not available in our bakery");
// }


//Q9.
// var A = [24, 53, 78, 91, 12];

// document.write("Array items: " + A);
// document.write("<br>");
// document.write("<br>");

// var largest = A[0]; // Assume the first element is the largest

// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }

// document.write("The largest number is " + largest);


//Q10.
// var A = [24, 53, 78, 91, 12];

// document.write("Array items: " + A);
// document.write("<br>");
// document.write("<br>");

// var smallest = A[0]; 

// for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i]; 
//     }
// }

// document.write("The smallest number is " + smallest);

//Q11.
// var A = [24, 53, 78, 91, 12];
// document.write("Array items: " + A);
// document.write("<br>");
// document.write("<br>");
// var largest = A[0];
// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }
// document.write("The largest number is " + largest);
// document.write("<br>");
// var smallest = A[0]; 

// for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i]; 
//     }
// }

// document.write("The smallest number is " + smallest);

//Q12.

// for (var i = 5; i <= 100; i+=5) {
//     document.write(i + ",");
// }

//Q13.

// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];
// var table = document.createElement("table");

// // Create table headers
// var headerRow = document.createElement("tr");
// headerRow.innerHTML = "<th>Student</th><th>Score</th>";
// table.appendChild(headerRow);

// // Populate table with student names and scores
// for (var i = 0; i < students.length; i++) {
//     var row = document.createElement("tr");
//     row.innerHTML = "<td>" + students[i] + "</td><td>" + scores[i] + "</td>";
//     table.appendChild(row);
// }

// document.body.appendChild(table);


//Q14
// var scores = [12, 45, 3, 22, 34, 50];
// var stopValue = parseInt(prompt("Enter the stop value:"));

// if (!isNaN(stopValue)) {
//     for (var i = 0; i <= stopValue; i++) {
//           document.write(scores[i] + "<br>");
//         } 
// }
// else {
//    document.write("Invalid input. Please enter a valid number.");
// }

//Q15.
// var A = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  
//   for (var i = 0; i < A.length; i++) {
//     var row = '';
//     for (var j = 0; j < A[i].length; j++) {
//       row += A[i][j] +"" + " ";
//     }
//     document.write(row + "<br>");
//   }
  
//