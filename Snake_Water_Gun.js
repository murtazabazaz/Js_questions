const prompt = require("prompt-sync")();
const alert = require("alert-sync")();
let input1 = prompt("Player 1 Choose between snake(s), water(w) and gun(g)");

let ans = Math.floor(Math.random()*3)+1;
console.log(ans);
let ans1 =["s", "w", "g"][ans-1]

const match = (ans1, input1)=>{
  if(ans1 === input1){
    return "Draw";
  }
  else if(ans1 === "s" && input1 === "w"){
    return "Computer wins";
  }
  else if(ans1 === "s" && input1 === "g"){
    return "Player wins";
  }
  else if(ans1 === "w" && input1 === "s"){
    return "Player wins";
  }
  else if(ans1 === "w" && input1 === "g"){
    return "Computer wins";
  }
  else if(ans1 === "g" && input1 === "s"){
    return "Computer wins";
  }
  else if(ans1 === "g" && input1 === "w"){
    return "Player wins";
  }
  
}

alert(match(ans1, input1));



















/*
if(input1 == 1 && ans == 2){
  alert("Player1 wins🎉");
}
else if(input1 == 2 && input2 == 1){
  alert("Player2 wins🎉");
}
else if(input1 == 2 && input2 == 3){
  alert("Player1 wins🎉");
}
else if(input1 == 3 && input2 == 2){
  alert("Player2 wins🎉");
}
else if(input1 == 3 && input2 == 1){
  alert("Player1 wins🎉");
}
else if(input1 == 1 && input2 == 3){
  alert("Player2 wins🎉");
}
else{
  alert("Draw");
}
*/
