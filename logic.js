//  currently userscore and computer score  is 0
let userScore =0;   
let computerScore = 0;

//  selecting rock paper and scissor
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const computerScorepara =document.querySelector("#computer-score");


// computerchoice
const gencompChoice = () => {
const options = ["rock" ,"paper" ,"scissor"]
 const randomIdx = Math.floor(Math.random()*3);
 return options[randomIdx];
}
//  Draw function
const draw =()=>{
    msg.innerText = "Draw";
    msg.style.backgroundColor = "blanchedalmond";
    msg.style.color ="brown";
}
const showWinner =(userWin, compchoice ,userChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText= `you win, ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color ="white";
    } else{
        computerScore++;
        computerScorepara.innerText = computerScore;
        msg.innerText=`you lose, ${compchoice} beats ${userChoice}`;
        msg.style.backgroundColor ="red";
        msg.style.color ="white";
    }
}


//  playgame is computer function which store  the userchoice in it
 const playGame  =(userChoice) => {

const compchoice = gencompChoice();

//  condition
if(userChoice === compchoice){
draw();
} else{
    let userWin = true;
    if(userChoice ==="rock"){
        //paper,scissor
        userWin = compchoice==="paper"? false:true
    } else if (userChoice==="paper"){
        // rock,scissor
        userWin = compchoice==="scissor"? false:true
    } else  {
        //  rock,paper
        userWin = compchoice==="paper"? false:true
    }
showWinner(userWin, compchoice, userChoice);
    }
};

// for each loop for selecting each choice and add eventlistener to it
choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        console.log("choice has taken" , userChoice);
        playGame(userChoice);
    });
});
