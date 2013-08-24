//Sabrina Hill Conditionals_Wacky  August 22nd, 2013


//The following code will be calculating how many slices of pizza each person at a dinner party can have based on ordering 8

var numberOfAttendees = prompt("How many people are coming to the pizza party?"); //The user will input how many people are coming to the party
var numberOfSlicesInOnePie = prompt("How many slices come in a whole pizza");//The user will input how many slices are in one whole pizza
var howMuchEachPersonCanHave = numberOfAttendees * numberOfSlicesInOnePie /5; //calculates how many slices each person at the party can have


console.log(howMuchEachPersonCanHave); //Prints to the console how many slices each person can have

alert("Each person can have this many slices: " +  howMuchEachPersonCanHave); //This will calculate how many slices each person at the pizza party can have

//var hourlyIncrease = 4; //After taking the users input we found that they will make an extra four dollars an hour if their raises are 50 cent


//The following is a ternary example of the scenario including a relational operator

//(hourlyIncrease >= 4) ? console.log("You are considered pay grade four") : console.log("You are still pay grade three")

//The following is an example of if and else also including a relational operator

//var hourlyIncrease = 4; //These number are representing dollars per hour
//var desiredIncrease = 6; //These numbers are representing dollars per hour


//if(hourlyIncrease > desiredIncrease){//code performed if condition is true
//console.log("You have received your desired hourly pay"); //this will print to the console if the person will be getting what they want to get an hour
//}else{console.log("You have to get a few more raises before you will have the desired hourly pay")}//condition performed if the desired hourly increase is less than what the person wants


//The following is an example of the above scenario using Logical Operators
//I am calculating to see if the person has reached their desired amount or not

//var currentlyHourlyRate = 9 //Representing nine dollars per hour
//var desiredRate = 13 //Representing thirteen dollars per hour
//var finalRate = 13 //Representing dollars per hour

//if(currentlyHourlyRate < desiredRate || finalRate){
//console.log("You have a few more raises to get before you reach your goal")
//}else{console.log("Congratulations!! You have reached your desired amount")};