const max = prompt("Enter the Max Number : ");
let guess = prompt("Guess the number : ");

const random = Math.floor(Math.random() * max) + 1;

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }
    if(guess == random){
        console.log("Game Win");
        break;
    }
    else if(guess > random){
        guess = prompt("Hint : your guess was too Large. please try again");
    }
    else{
        guess = prompt("Hint : your guess was too Small. please try again");
    }
  
}



