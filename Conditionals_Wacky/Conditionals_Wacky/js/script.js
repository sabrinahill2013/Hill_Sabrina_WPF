//Sabrina Hill Conditionals_Wacky August 22nd, 2013



//The following code will be calculating how many slices of pizza each person at a dinner party can have based on ordering 8

//var numberOfAttendees = prompt("How many people are coming to the pizza party?"); //The user will input how many people are coming to the party
//var numberOfPizzasBeingOrdered = prompt("How many pizzas are you ordering?");
//var numberOfSlicesInOnePie = prompt("How many slices come in a whole pizza");//The user will input how many slices are in one whole pizza
//var howMuchEachPersonCanHave = numberOfAttendees * numberOfSlicesInOnePie /5; //calculates how many slices each person at the party can have


//console.log(howMuchEachPersonCanHave); //Prints to the console how many slices each person can have

//alert("Each person can have this many slices: " +  howMuchEachPersonCanHave); //This will calculate how many slices each person at the pizza party can have

//var howMuchEachPersonCanHave = 8; //After taking the users input we found that each person at the pizza party can have 8 slices of pizza

//The following is a ternary example of the scenario including a relational operator

//(howMuchEachPersonCanHave > 5) ? console.log("This will be enough to fill each person up") : console.log("You may need to order some more pizzas")

//The following is an example of if and else also including a relational operator

//var numberOfSlicesInONePie = 8;
//var howMuchEachPersonCanHave = 6;


//if(howMuchEachPersonCanHave < numberOfSlicesInONePie){//code performed if condition is true
//console.log("You will have enough to feed everyone"); //this will print to the console if there will be enough food
//}else{console.log("You may need to order more pizza")}//condition performed if the there is more pizza that needs to be ordered

//The following is an example of the above scenario using Logical Operators
//I am calculating to see if there will be enough pizza to feed everyone in the pizza party

var numberOfPizzasBeingOrdered = 8
var howManySlicesInOnePie = 8
var howMuchEachPersonCanHave = 8

if(howManySlicesInOnePie <= howMuchEachPersonCanHave || numberOfPizzasBeingOrdered){
console.log("You will have enough food for the party")//Will print to the console if there will be enough food fo the pizza party
}else{console.log("People are still going to be hungry")};


