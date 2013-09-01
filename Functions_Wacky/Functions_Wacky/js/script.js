//Sabrina Hill Functions_Wacky September 1, 2013


//The following code will be calculating how many beers will be at the party if each person brings a case of 24 beers.

var numberOfPeople = prompt("How many people are coming to the party?"); // Will prompt the person to input how many people will be coming to the party
var numberOfCasesPerPerson = prompt("How many cases will each person bring?");
var numberOfBeersPerCase = prompt("How many beers are in each case?");
var totalNumberOfBeersAtParty = numberOfPeople * numberOfCasesPerPerson * numberOfBeersPerCase ; //calculates how many beers will be at the party


console.log(totalNumberOfBeersAtParty); //Prints to the console how many beers in total will be at the party

alert("There will be this many beers at the party: " + totalNumberOfBeersAtParty); //This will calculate how many total beers will be at the party
