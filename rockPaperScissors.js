//Rock, Paper, or Scissors game
//using functions, logic, loops, and Math

var userChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();
while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
    var userChoice = prompt("That's not rock, paper, or scissors! Try again: Do you choose rock, paper or scissors?").toLowerCase();
};
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1,choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";   
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        } else
        {
            return "paper wins";
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else
        {
            return "scissors wins"; 
        }    
    } 
}; 

compare(userChoice,computerChoice);
