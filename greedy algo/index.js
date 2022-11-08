const prompt = require("prompt-sync")({ sigint: true });

let userInput = prompt("Enter Amount ");
let count=0
for(i=0 ; i=userInput ; i++)
{
    if(userInput>=25){
        userInput = userInput-25
        count++;
    }
    else if(userInput<25 && userInput>=10){
        userInput = userInput-10
        count++;
    }
    else if(userInput<10 && userInput>=5){
        userInput = userInput-5
        count++;
    }
    else if(userInput<5 && userInput>=1){
        userInput = userInput-1
        count++;
    }
}
console.log(`Coins :  ${count}.`);