let user0score=0;
let comp0score=0
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userscore=document.querySelector("#user-score")
let compscore=document.querySelector("#comp-score")
let myform = document.querySelector("#myForm");
let input = document.querySelector("#username");
let yourname=document.querySelector("#yourname");
let newgame=document.querySelector("#newgame")

newgame.addEventListener("click",()=>{
  myform.classList.remove("hide")
  msg.innerText=`Play your move`;
  msg.style.backgroundColor = "#081b31";
  yourname.innerText="you";
  user0score=0
  comp0score=0
  userscore.innerText=user0score;
  compscore.innerText=comp0score;
  input.value=""

})
myform.addEventListener("submit", (e) => {
  e.preventDefault();
  let name=input.value;
  yourname.innerText=name
  myform.classList.add("hide")
})

const compchoice=()=>{
  let array=["rock","paper","scissors"];
  let choosen=Math.floor(Math.random()*array.length);
  
  return array[choosen];
}

const gamewinner=(userchoice,computerchoice)=>{
  if(userchoice=== "rock" && computerchoice==="paper"||userchoice=== "paper" && computerchoice==="scissors"||userchoice=== "scissors" && computerchoice==="rock"){
    msg.innerText=`You lost. ${computerchoice} beats your ${userchoice}`;
    msg.style.setProperty("background-color", "red", "important");
    comp0score++;
    compscore.innerText = comp0score;
  }
  else if(userchoice===computerchoice){
    msg.style.backgroundColor = "#b3bf07ff";

    msg.innerText=`"Game was Draw. Play again.`;
    
  }else{
    msg.innerText=`You win! Your ${userchoice} beats ${computerchoice}`;
    msg.style.setProperty("background-color", "green", "important");
    user0score++;
    userscore.innerText = user0score;

  }
}

choices.forEach(choice => {
  choice.addEventListener("click",()=>{
    let userchoice=choice.id;
    let computerchoice=compchoice();
    gamewinner(userchoice,computerchoice);
})});





