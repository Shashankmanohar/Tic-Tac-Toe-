let boxes = document.querySelectorAll(".box");
let resetbtnn = document.querySelectorAll(".resetbtn")[0];
let turnX = true;
let status = document.getElementsByClassName("status");
const winpattern =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
        ];
boxes.forEach((box) => {
    box.addEventListener( "click", ()=>{
        if(turnX){
            box.innerText = 'X';
            turnX =  false;
            status[0].textContent="Turn: O";
        }else{
            box.innerText = 'O';
            turnX = true;
            status[0].textContent= "Turn: X" ;
        }
        box.disabled =  true;
         checkWin();
         draw();
    });
});
let checkWin =()=>{
    for(let pattern of  winpattern ){
       let a= boxes[pattern[0]].innerText;
       let b= boxes[pattern[1]].innerText;
       let c= boxes[pattern[2]].innerText;
       if(a != '' && a ==b != '' && a==c !=''){
        let status = document.getElementsByClassName("status");
           status[0].innerHTML="Player "+a+" Wins!";
           disableBoxes();
        
       }
   }
}
function disableBoxes(){
    for(box of boxes){
        box.disabled = true;
    }
}

function restgame(){
        turnX =true;
        for(box  of boxes){
            box.disabled =false;
            box.innerText =" ";
            status[0].textContent="Turn: X";
        }
}
resetbtnn.addEventListener('click',restgame);
let draw = () => {
    let emptybox =0;
    for (box of boxes) {if(box.innerText==""){emptybox++;}}
     if(emptybox==0){
         status[0].innerHTML="It's a Draw!"
         disableBoxes();
     }
}