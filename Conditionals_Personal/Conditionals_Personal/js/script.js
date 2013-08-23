//Sabrina Hill Conditionals Assignment

//var weeklySavings = prompt("How much money do you save a week?"); //The user will input how much they save a week
//var numberOfWeeksInMonth = prompt("How many weeks are in this month?");//The user will input how many weeks are in the current month
//var monthlySavings = weeklySavings * numberOfWeeksInMonth; //calculates how much I will save depending on how many weeks are in the month.
//console.log(monthlySavings); //Prints to the console

//alert("You will save " + monthlySavings); //This will calculate and tell me how much I will save for the month.

var monthlySavings = 250; //After taking the users input we found that they will save 250 for the month.

//(monthlySavings > 200) ? console.log("You can take a trip") : console.log("You have to stay in town") //This is a ternary example of the scenario


//The following is an example of if and else also including a relational operator

var monthlySavings = 250; //After taking the users input we found that they will save 250 for the month.
var tripCost = 350

if(monthlySavings > tripCost){
    //code performed if condition is true
    console.log("You can take a trip"); //this will print to the console if my trip cost is less than what I saved for the month
}else{console.log("You need to save more money before you can take a trip")}//condition performed if the trip cost is more than what I save this month

