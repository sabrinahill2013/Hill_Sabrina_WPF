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

//var totalNumberOfBeersAtParty = function(numberOfPeople, numberOfCasesPerPerson, numberOfBeersPerCase){ //defining the function
//var totalNumberOfBeersAtParty = numberOfPeople * numberOfCasesPerPerson * numberOfBeersPerCase;
//return totalNumberOfBeersAtParty;
//}

//var a = totalNumberOfBeersAtParty(10, 1, 24); //invoking or "calling out" the function

//console.log(a);

//The following is an ifElse including a logical operator to see if I will have enough beers based on needed at least 120 beers but really wanting 240 beers to be at the party
//var numberOfPeople = 5;
//var casesPerPerson = 1;
//var numberOfBeerPerCase = 24;
//var totalBeersBoughtTOParty = 120;
//var totalBeerWantedAtParty = 240;

//if(totalBeersBoughtTOParty < totalBeerWantedAtParty && numberOfPeople * casesPerPerson * numberOfBeerPerCase){//code performed if condition is true
//console.log("Tell each person coming to bring two 24 cases instead of 1!"); //this will print to the console if I should tell each of the 5 people to bring one or two cases based on how many beers I want at the party
//}else{console.log("Look like you will have all the beers you want at the party. Have Fun!")}//condition performed if I will have enough beers at the party

//The following is an Else If statement

//var totalBeersBoughtToParty = 220;
//var totalBeersWantedAtParty = 240;
//var minimumNeededAtParty = 200;


//if(totalBeersBoughtToParty > totalBeersWantedAtParty){
  //  console.log("You should tell the people to bring more beers");
//}else if(totalBeersBoughtToParty > minimumNeededAtParty){
  //  console.log("You not have the amount you wanted but you will have the minimum amount needed");
//}else{
  //  console.log("Buy some more beers yourself")
//}

//The following is a ternary example of the scenario including a logical operator

//var totalBeersAtParty = 220;

//(totalBeersAtParty < 125) ? console.log("You need to go to the store and buy more beer") : console.log("You have enough beer. Have Fun and Party!!")

//In the following code I will be using 2 Arithmetic Operator to determine how many left over beers will be at the party after each person drinks the amount of beers they wanted.


//var numberOfPeople = 5
//var numberOfBeersPerCase = 24
//var numberOfBeerEachPersonWants= 10


//var leftOverBeers = numberOfPeople * numberOfBeersPerCase - numberOfPeople * numberOfBeerEachPersonWants
//console.log(leftOverBeers)

//The following is a function using three parameters and returning a value how many beers will be at the party of all five people bought 2 twelve packs

var total = totalNumberOfBeersAtParty (5, 2, 12);

function totalNumberOfBeersAtParty (numberOfPeople, packsBoughtPerPerson, beersPerPack){
  var totalNumberOfBeersAtParty = numberOfPeople * packsBoughtPerPerson * beersPerPack
return totalNumberOfBeersAtParty;
}
console.log(total)


