//Sabrina Hill Functions_Wacky September 1, 2013


//The following code will be calculating how many beers will be at the party if each person brings a case of 24 beers.

//var numberOfPeople = prompt("How many people are coming to the party?"); // Will prompt the person to input how many people will be coming to the party
//var numberOfCasesPerPerson = prompt("How many cases will each person bring?");
//var numberOfBeersPerCase = prompt("How many beers are in each case?");
//var totalNumberOfBeersAtParty = numberOfPeople * numberOfCasesPerPerson * numberOfBeersPerCase ; //calculates how many beers will be at the party


//console.log(totalNumberOfBeersAtParty); //Prints to the console how many beers in total will be at the party

//alert("There will be this many beers at the party: " + totalNumberOfBeersAtParty); //This will calculate how many total beers will be at the party

//The following is a regular "named" function example of the above scenario

//function totalNumberOfBeersAtParty(){
//var numberOfPeople = 10;
//var numberOfCasesPerPerson = 1;
//var numberOfBeersPerCase = 24;
//var totalNumberOfBeersAtParty = numberOfPeople * numberOfCasesPerPerson * numberOfBeersPerCase;
//console.log(totalNumberOfBeersAtParty);
//}
//totalNumberOfBeersAtParty();

//The following is an Anonymous Function using the given scenario

var totalNumberOfBeersAtParty = function(numberOfPeople, numberOfCasesPerPerson, numberOfBeersPerCase){ //defining the function
var totalNumberOfBeersAtParty = numberOfPeople * numberOfCasesPerPerson * numberOfBeersPerCase;
return totalNumberOfBeersAtParty;
}

var a = totalNumberOfBeersAtParty(10, 1, 24); //invoking or "calling out" the function

console.log(a);

