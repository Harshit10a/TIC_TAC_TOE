let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgame = document.querySelector("#new-game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;
 const winPattern = [
    [0,1,2],
    [0,3,6],    
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
 ];
 const resetGame = () => {
    turnO=true;
    enableBTN();
    msgcontainer.classList.add("hide");
}

 boxes.forEach ( (box)=> {
    box.addEventListener("click",()=> {
        if(turnO){
            box.innerText="X";
             box.style.color = "red"
            turnO=false;
        }
        else {
            box.innerText="O";
            box.style.color = "navy";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
 });

 const enableBTN = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML ="";
        box.style.color = "";
    }
 }
 const disableBTN = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
 }
const showWinner = (WINNER) => {
    msg.innerHTML =`Congratulations ,Winner is ${WINNER}`;
    msgcontainer.classList.remove("hide");
    disableBTN();

}


 const checkWinner =() => {
    for( let pattern of winPattern){
        
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
            }
        }
    }
 } 
 newgame.addEventListener("click",resetGame);
 resetbtn.addEventListener("click",resetGame);                         
