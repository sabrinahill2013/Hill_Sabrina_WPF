//Sabrina Hill Functions_Industry August 31, 2013


//The following code will be calculating the total amount of  fliers I will have to make for my clients assuming each client needs the same amount of fliers

var numberOfClients = prompt("How many clients do you have that need fliers?"); //I will input how many showers I take a day
var numberOfFliersRequested = prompt("How many fliers do each client need?");
var totalNumberOfFliersToMake = numberOfClients * numberOfFliersRequested ; //calculates how many showers I will take this month


console.log(totalNumberOfFliersToMake); //Prints to the console how many fliers I need to make

alert("You will need to make this many fliers: " + totalNumberOfFliersToMake); //This will calculate how many fliers I will need to make

