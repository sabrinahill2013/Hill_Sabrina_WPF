//Sabrina Hill Conditionals_Personal

//var weeklySavings = prompt("How much money do you save a week?"); //The user will input how much they save a week
//var numberOfWeeksInMonth = prompt("How many weeks are in this month?");//The user will input how many weeks are in the current month
//var monthlySavings = weeklySavings * numberOfWeeksInMonth; //calculates how much I will save depending on how many weeks are in the month.
//console.log(monthlySavings); //Prints to the console

//alert("You will save " + monthlySavings); //This will calculate and tell me how much I will save for the month.

var monthlySavings = 250; //After taking the users input we found that they will save 250 for the month.

//The following is a ternary example of the scenario

//(monthlySavings > 200) ? console.log("You can take a trip") : console.log("You have to stay in town")

//The following is an example of if and else also including a relational operator

var monthlySavings = 250; //After taking the users input we found that they will save 250 for the month.
var tripCost = 175

//if(monthlySavings > tripCost){
    //code performed if condition is true
    //console.log("You can take a trip"); //this will print to the console if my trip cost is less than what I saved for the month
//}else{console.log("You need to save more money before you can take a trip")}//condition performed if the trip cost is more than what I save this month

//The following is an example of the above scenario using Logical Operators

//I am calculating to see if the trip i want to take will place a financial burden on me or will i have money left over after the trip

var amountAlreadySaved = 575

if(tripCost < monthlySavings && amountAlreadySaved> tripCost){
    console.log("You will have money left after the trip and you can take your trip!!")
}else{console.log("Save a little more money before you try to take a trip")};

