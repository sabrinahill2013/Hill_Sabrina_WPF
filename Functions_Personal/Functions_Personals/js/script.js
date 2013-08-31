//Hill_Sabrina Functions_Personal August 29, 2013


//The following code will be calculating how many showers is take in a month

//var numberOfShowersDaily = prompt("How many showers do you take in one day?"); //I will input how many showers I take a day
//var numberOfDaysInMonth = prompt("How many days are in the current month?");
//var numberOfShowersPerMonth = numberOfShowersDaily * numberOfDaysInMonth ; //calculates how many showers I will take this month


//console.log(numberOfShowersPerMonth); //Prints to the console how many showers I will take in this current month

//alert("You will have taken this many showers at the end of the month: " + numberOfShowersPerMonth); //This will calculate how many showers I will take in the current month

//The following is a regular "named" function example of the above scenario

//function numberOfShowersPerMonth(){
    //var numberOfShowersDaily = 2;
    //var numberOfDaysInMonth = 31;
    //var numberOfShowersPerMonth = numberOfShowersDaily * numberOfDaysInMonth;
    //console.log(numberOfShowersPerMonth)
//}
//numberOfShowersPerMonth();

//The following is an Anonymous Function

//var numberOfShowersPerMonth = function(numberOfShowersDaily, numberOfDaysInMonth){ //defining the function
    //var numberOfShowersPerMonth = numberOfShowersDaily * numberOfDaysInMonth;
    //return numberOfShowersPerMonth;
//}

//var a = numberOfShowersPerMonth(2, 31); //invoking or "calling out" the function

//console.log(a);

//The following is an ifElse including a logical operator based on if I have a goal of taking 62 showers in a 31 day month.

//var numberOfRequiredShowersDaily = 2;
//var numberOfRequiredShowersWeekly = 14;
//var numberOfShowersActuallyTakenWeekly = 13;


//if(numberOfShowersActuallyTakenWeekly < numberOfRequiredShowersWeekly && numberOfRequiredShowersDaily){//code performed if condition is true
//console.log("You may need to shower more often"); //this will print to the console if I need to shower more often
//}else{console.log("You take enough showers")}//condition performed if I take enough showers already


//The following is a ternary example of the scenario including a logical operator

//var numberOfShowersDaily = 1;

//(numberOfShowersDaily < 2) ? console.log("You must take more showers daily if you have a shower goal of 62 showers per month") : console.log("You are taking enough showers")

//In the following code I will be using an Arithmetic Operator to determine how many showers I need to take a week in a 30 day month based on if i want to take 56 showers a month

//var numberOfShowersDaily = 2;
//var numberOfDaysPerWeek = 7;
//var numberOfWeeksPerMonth = 4
//var showerGoal = numberOfShowersDaily * numberOfDaysPerWeek * numberOfWeeksPerMonth/4;
//console.log(showerGoal);

//The following is a function using three parameters and returning a value if I had a shower goal of 56 showers in a 30 day month.

var total = showerGoal(2, 7, 4);

function showerGoal(showersDaily, daysInWeek, weeksPerMonth){
    var showerGoal = showersDaily * daysInWeek * weeksPerMonth
    return showerGoal;
}
console.log(total);