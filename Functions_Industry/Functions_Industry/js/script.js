//Sabrina Hill Functions_Industry August 31, 2013


//The following code will be calculating the total amount of  fliers I will have to make for my clients assuming each client needs the same amount of fliers

//var numberOfClients = prompt("How many clients do you have that need fliers?"); //I will input how many showers I take a day
//var numberOfFliersRequested = prompt("How many fliers do each client need?");
//var totalNumberOfFliersToMake = numberOfClients * numberOfFliersRequested ; //calculates how many showers I will take this month


//console.log(totalNumberOfFliersToMake); //Prints to the console how many fliers I need to make

//alert("You will need to make this many fliers: " + totalNumberOfFliersToMake); //This will calculate how many fliers I will need to make

//The following is a regular "named" function example of the above scenario

//function totalNumberOfFliersToMake(){
//var numberOfClients = 5;
//var numberOfRequestedFliers = 100;
//var totalNumberOfFliersToMake = numberOfClients * numberOfRequestedFliers;
//console.log(totalNumberOfFliersToMake);
//}
//totalNumberOfFliersToMake();

//The following is an Anonymous Function

//var totalNumberOfFliersToMake = function(numberOfClients, numberOfRequestedFliers){ //defining the function
//var totalNumberOfFliersToMake = numberOfClients * numberOfRequestedFliers;
//return totalNumberOfFliersToMake;
//}

//var a = totalNumberOfFliersToMake(5, 100); //invoking or "calling out" the function

//console.log(a);

//The following is an ifElse including a logical operator to see if I have enough days to make all the fliers

//var estimatedCompletionRate = 125; //number is representing days, so an estimated number of 125 completed fliers per day
//var numberCompletedAlready = 100;
//var averageCompletionRate = 100; //100 fliers per day
//var deadline = 5 //number representing days, so I have 5 days to complete

//if(averageCompletionRate < estimatedCompletionRate || numberCompletedAlready){//code performed if condition is true
//console.log("You need to work a little faster!"); //this will print to the console if I need to speed up my work
//}else{console.log("You will complete the fliers by the deadline!")}//condition performed if I am completing enough fliers a day and will meet the deadline


//The following is an Else If statement

//var estimatedCompletionRate = 125;
//var numberCompletedAlready = 100;
//var averageCompletionRate = 100;
//var numberOfDayInDeadline = 5

//if(numberCompletedAlready > estimatedCompletionRate){
//    console.log("You are working at a good pace to meet the deadline");
//}else if(averageCompletionRate < estimatedCompletionRate){
//    console.log("You are working at a slower speed than what you estimated and you need to speed up");
//}else{
//    console.log("Your speed of work is just fine and you will finish within the deadline")
//}

//The following is a ternary example of the scenario including a logical operator

//var numberOfFliersCompletedDaily = 100;

//(numberOfFliersCompletedDaily < 125) ? console.log("You need to speed up your work") : console.log("You will finish within the deadline time")

//In the following code I will be using 2 Arithmetic Operator to determine how many fliers a day I should make to complete in the time allowed of 5 days

//var numberOfClients = 5
//var fliersRequestedPerClient = 100
//var daysToComplete = 5

//var completionRate = numberOfClients * fliersRequestedPerClient / daysToComplete
//console.log(completionRate)

//The following is a function using three parameters and returning a value how many fliers I will made based on my clients needed 100 fliers made a month.

var total = fliersMadeInSixMonths (5, 100, 6);

function fliersMadeInSixMonths (numberOfClients, fliersPerClientAMonth, numberOfMonths){
  var fliersMadeInSixMonths = numberOfClients * fliersPerClientAMonth * numberOfMonths
return fliersMadeInSixMonths;
}
console.log(total);
