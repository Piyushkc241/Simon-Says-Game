let gameSeq = [];
let userSeq = [];
let highest=-1;

let btns = ["red", "green", "orange", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;
    levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");

  setTimeout(function () {
    btn.classList.remove("flash");
  }, 500);
}
function userFlash(btn) {
  btn.classList.add("userFlash");

  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 100);
}

function levelUp() {
    userSeq=[];
  level++;
  h2.innerText = `level ${level}`;
  
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  
  gameSeq.push(randColor);
  btnFlash(randBtn);

}

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp(),500 );
        }
    }
    else{
        let h2=document.querySelector('h2');
        if(level-1 >highest){
            highest=level-1;
            h2.innerHTML=`Game over ! Press any key to start .<b> Your points: ${level-1}</b>
            <br>
            HIghest Score: ${highest}`;
        }
        else{
            h2.innerHTML=`Game over ! Press any key to start .<b> Your points: ${level-1}</b>
            <br>
            HIghest Score: ${highest}`;

        }
        let b=document.querySelector('body');
        document.querySelector("body"). style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor='white';
            
        },200);


         reset();
    }
}


function btnPress() {
  let btn = this;
  userFlash(btn);

  let userColor=btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".box");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
