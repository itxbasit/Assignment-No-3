//                      Chapter No 5            


// Question No 1


// var num1 = +prompt("Enter an integer: ")
// var num2= +prompt("Enter an integer: ")
// document.write("Sum of " + num1 + " and " + num2 + " is " + (num1+num2))


// Question No 2

// var num1 = +prompt("Enter an integer: ")
// var num2= +prompt("Enter an integer: ")
// document.write("Sum of " + num1 + " and " + num2 + " is " + (num1+num2) + "<br>")
// document.write("Subtration of " + num1 + " and " + num2 + " is " + (num1-num2) + "<br>")
// document.write("Multiplication of " + num1 + " and " + num2 + " is " + (num1*num2) + "<br>")
// document.write("Division of " + num1 + " and " + num2 + " is " + (num1/num2))

// Question No 3

// var num1;
// document.write("Value after variable declaration is: " + num1 + "<br>")

// num1 = 3
// document.write("Initial value: " + num1 + "<br>")
// document.write("Value after increment is: " + ++num1 + "<br>")
// document.write("Value after addition is: " + (num1+7) + "<br>")
// document.write("Value after decrement is: " + --num1 + "<br>")
// document.write("The remainder is: " + (num1%3) + "<br>")

// Question No 4

// var cost = 600
// var num1 = +prompt("How many tickets you want: ")
// document.write("Total cost to buy " + num1 + " tickets is " + (cost*num1) + "PKR.")

// Question No 5

// var num1 = +prompt("Enter table No")
// document.write("Table of " + num1 + "<br><br>" + num1 + " X 1 = "  + (num1*1) + "<br>" + "<br>" + num1 + " X 2 = " + (num1*2) + "<br>"+ "<br>" + num1 + " X 3 = "  + (num1*3) + "<br>"+ "<br>" + num1 + " X 4 = " + (num1*4) + "<br>"+ "<br>" + num1 + " X 5 = " + (num1*5) + "<br>"+ "<br>" + num1 + " X 6 = " + (num1*6) + "<br>"+ "<br>" + num1 + " X 7 = " + (num1*7) + "<br>"+ "<br>" + num1 + " X 8 = " + (num1*8) + "<br>"+ "<br>" + num1 + " X 9 = " + (num1*9) + "<br>"+ "<br>" + num1 + " X 10 = " + (num1*10) + "<br>")

// Question No 6

// var C = +prompt("Enter current temprature in Celsius: ")
// document.write(C + "<sup>o</sup>C is " + ((C*9/5)+32) + "<sup>o</sup>F.<br>" )
// var F = +prompt("Enter current temprature in Fahrenheit: ")
// document.write(F + "<sup>o</sup>F is " + ((F-32)*(5/9)) + "<sup>o</sup>C.")

// Question No 7

// var item1 = +prompt("Enter Quantity of item1: ")
// var item2 = +prompt("Enter Quantity of item1: ")
// document.write("<h1>Shopping Cart</h1><br>Price of item 1 is 650 <br>Quantity of item1 is " + item1 + "<br>Price of item 2 is 100<br>Quantity of item 2 is " + item2  + "<br>Shipping charges is 100<br><br>Total cost of your order is " + ((item1*650)+(item2*100)+100))


// Question No 8

// var marks = +prompt("Enter total marks")
// var marksObt = +prompt("Enter marks obtained")
// document.write("<h1>Marks Sheet</h1><br>Total Marks: " + marks + "<br>Marks obtained: " + marksObt + "<br>Percentage: " + ((marksObt/marks)*100) + "%")


// Question No 9

// var dollar = +prompt("How many dollars you have")
// var riyal = +prompt("How many Saudi riyals you have")
// document.write("<h1>Currency in PKR</h1><br>Total Currency in PKR: " + ((dollar*104.80)+(riyal*28)))

// Question No 10

// var num = 5
// var result = num + 5 * 10 / 2
// document.write(result)


// Question No 11

// var birYear = +prompt("In which year you born?")
// document.write("<h1>Age Calculator</h1><br></br>Current Year: 2022<br>Birth Year: " + birYear + "<br>Your Age is: " + (2022 - birYear))


// Question No 12

// var radius = +prompt("Enter radius")
// var pi = 3.142
// document.write("<h1>The Geometrizer</h1><br></br>Radius of a circle: " + radius + "<br>The circumference is: " + (2*pi*radius) + "<br>The area is: " + ((pi)*(radius*radius)))


// Question No 13

// var favCho = prompt("What is your Favorite Snack?")
// var age = +prompt("What is your age?")
// var maxAge = +prompt("Enter estimated maximum age")
// var amo = +prompt("Enter amount of " + favCho + " you eat in a day")
// var result = (amo * 365) * (maxAge - age)
// document.write("<h1>The Lifetime Supply Calculator</h1><br>Favorite Snack: " + favCho + "<br>Current age: " + age + "<br>Estimated Maximum Age: " + maxAge + "<br>Amount of snake per day: " + amo + "<br>You will need " + result + " " + favCho +  " to last you until the ripe old age of " + maxAge)

//                      Chapter No 6 - 9            


// Question No 1


// a=+prompt("Enter an integer");
// document.writeln("RESULT");
// document.write("<br>");
// document.writeln("tHE value of a is "+a);
// document.write("<br>");
// document.write("a is "+(++a));
// document.write("<br>");

// document.writeln("tHE value of a is "+a);
// document.write("<br>");
// document.write("a is "+(a++));
// document.write("<br>");

// document.writeln("tHE value of a is "+a);
// document.write("<br>");
// document.write("a is "+(--a));
// document.write("<br>");

// document.writeln("tHE value of a is "+a);
// document.write("<br>");
// document.write("a is "+(a--));
 

// Question No 2

// var a =+prompt("Enter an integer");
// var b =+prompt("Enter an integer");
// document.writeln("a is "+a+" b is "+b);
// document.write("<br>");
// document.write("--a is"+(--a));
// document.write("<br>");
// document.write("--a - --b is "+(--a - --b));
// document.write("<br>");
// document.write("--a - --b + ++b is "+(--a - --b + ++b));
// document.write("<br>");
// document.write("--a - --b + ++b + b--; is "+(--a - --b + ++b + b--));
 

// Question No 3


// var str=prompt("Enter your name ");
// document.writeln("hy "+str);

 
// Question No 4


// var num1 = +prompt("Enter table No")
// document.write("Table of " + num1 + "<br><br>" + num1 + " X 1 = "  + (num1*1) + "<br>" + "<br>" + num1 + " X 2 = " + (num1*2) + "<br>"+ "<br>" + num1 + " X 3 = "  + (num1*3) + "<br>"+ "<br>" + num1 + " X 4 = " + (num1*4) + "<br>"+ "<br>" + num1 + " X 5 = " + (num1*5) + "<br>"+ "<br>" + num1 + " X 6 = " + (num1*6) + "<br>"+ "<br>" + num1 + " X 7 = " + (num1*7) + "<br>"+ "<br>" + num1 + " X 8 = " + (num1*8) + "<br>"+ "<br>" + num1 + " X 9 = " + (num1*9) + "<br>"+ "<br>" + num1 + " X 10 = " + (num1*10) + "<br>")

 

// Question No 5


// var sub1=prompt("Enter name of subject ");
// var sub2=prompt("Enter name of subject ");
// var sub3=prompt("Enter name of subject ");
// var total =100;
// var subobt1=+prompt("enter the "+sub1+" marks");
// var subobt2=+prompt("enter the "+sub2+" marks");
// var subobt3=+prompt("enter the "+sub3+" marks");
// document.writeln("your percentage in "+sub1+" is "+(((subobt1/total))*100)+"%");
// document.write("<br>");
// document.writeln("your percentage in "+sub2+" is "+(((subobt2/total))*100)+"%");
// document.write("<br>");
// document.writeln("your percentage in "+sub3+" is "+(((subobt3/total))*100)+"%");
// document.write("<br>");