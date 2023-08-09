let score = JSON.parse(localStorage.getItem("score")) || {
    win: 0,
    lose: 0,
    tie: 0,
  };

  updateScore();

  function updateScore() {
    document.querySelector(
      ".js-score"
    ).innerHTML = `Wins : ${score.win} , Losses : ${score.lose} , Ties : ${score.tie}`;
  }

document.body.addEventListener('keydown',(Event => {
  if (Event.key === 'r'){
    PMove('rock');
  }
  else if (Event.key === 'p'){
    PMove('paper');
  }else if (Event.key === 's'){
    PMove('scissors');}
  
}))

let butText = document.querySelector('.auto-play');
  let AutoPlaying = false;
  let intervalID;

function autoPlay(){
if (!AutoPlaying){
  intervalID = setInterval(
  function(){
    let PlayerMove = CMove();
    PMove(PlayerMove);
  },1000)
  AutoPlaying= true;

  document.body.addEventListener('click',(Event=> {
  
    butText.innerText = "Stop"
  
}))

}
else{clearInterval(intervalID);
AutoPlaying = false;

document.body.addEventListener('click',(Event=> {
  
  butText.innerText = "Auto Play"

}))

}
}





  function PMove(PlayerMove) {
    let result = "";
    let CompMove = CMove();

    if (PlayerMove === "rock") {
      if (CompMove === "rock") {
        result = "Tie";
      } else if (CompMove === "paper") {
        result = "You Lose";
      } else if (CompMove === "scissors") {
        result = "You Win";
      }
    } else if (PlayerMove === "paper") {
      if (CompMove === "rock") {
        result = "You Win";
      } else if (CompMove === "paper") {
        result = "Tie";
      } else if (CompMove === "scissors") {
        result = "You Lose";
      }
    } else if (PlayerMove === "scissors") {
      if (CompMove === "rock") {
        result = "You Lose";
      } else if (CompMove === "paper") {
        result = "You Win";
      } else if (CompMove === "scissors") {
        result = "Tie";
      }
    }

    if (result === "You Win") {
      score.win++;
    } else if (result === "You Lose") {
      score.lose++;
    } else if (result === "Tie") {
      score.tie++;
    }

    if (result === "You Win"){
      result = "YOU WIN"
      document.querySelector(".js-result").style.color = "cyan";
      
    }else if (result === "You Lose"){
      result = "YOU LOSE"
      document.querySelector(".js-result").style.color = "red";
    }else{
      result = "T I E"
      document.querySelector(".js-result").style.color = "yellow";
    }

    localStorage.setItem("score", JSON.stringify(score));

    updateScore();

    document.querySelector(".js-result").innerHTML =  result;

    document.querySelector(
      ".js-moves"
    ).innerHTML = `Your Move <img src="${PlayerMove}.png" alt="" />  :  <img src="${CompMove}.png" alt="" /> Computer's Move`;
    }

    function CMove() {
      let MoveCount = Math.random();
      let CompMove = "";
      if (MoveCount >= 0 && MoveCount < 1 / 3) {
        CompMove = "rock";
      } else if (MoveCount >= 1 / 3 && MoveCount < 2 / 3) {
        CompMove = "paper";
      } else if (MoveCount >= 2 / 3 && MoveCount < 1) {
        CompMove = "scissors";
      }
      return CompMove;
    }
  