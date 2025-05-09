//Access all the html attribiuts in js....
let btns=document.querySelectorAll(".btn");
let rest_btn=document.querySelector("#rest");
let player=true;
let msgcontainer=document.querySelector(".msg_container");
let new_button=document.querySelector("#new_btn");
let winningmsg=document.querySelector("#msg")
//  wininig codition for the game ....
let winning_partten=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],
];
//buttons clickable function...
btns.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button clicked");
//if player value is ture then print X.....
        if(player){
            box.innerText="X";
            box.style.color="red    ";
            player=false;
        }
//if player value is false then print O.....
        else{
            box.innerText="O";
            box.style.color="aqua";
            player=true;
        }
//aftter this work buttons are disabled.....
        box.disabled=true;
        check_winner();
    });
});
//if user want to  rest the game......
 const reset_game=()=>{
    player=true;
    enable();
    msgcontainer.classList.add("hide");
}
//here we creat a arrow function to enable the game ....
const enable=()=>{
    for(let dis of btns ){
        dis.disabled=false;
        dis.innerText="";
        
    }
}
//and here also create a function to disable all  buttons after wining.....
const disable=()=>{
    for(let dis of btns ){
        dis.disabled=true;
    }
}
const showwinner=(win)=>{
    winningmsg.innerText=`CONGRATULATIONS winner is ${win}`;
    msgcontainer.classList.remove("hide");
    disable();
}
//check winner to this game......
const check_winner=()=>{
    for(let partten of winning_partten){
        console.log(partten[0]);
        let position1= btns[partten[0]].innerText;
        console.log(position1);
        let position2= btns[partten[1]].innerText;
        console.log(position2);
        let position3= btns[partten[2]].innerText;
        console.log(position3);
        if(position1!=""&&position2!=""&&position3!=""){
            if(position1===position2&&position2===position3){
                showwinner(position1);
            }
        }
    }
}
//set a new button to start a new game ......
new_button.addEventListener("click",reset_game);
//set a reset button user can anytime reset the game....
rest_btn.addEventListener("click",reset_game);