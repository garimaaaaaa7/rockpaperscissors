let usercore=0
let compcore=0
const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")
const msgg=document.querySelector(".msgg")
const ucore=document.querySelector("#uscore")
const cscore=document.querySelector("#cscore")
const userresult=document.querySelector("#uchoice")
const cresult=document.querySelector("#cchoice")
const body=document.querySelector("body")

const draw=()=>
{
    console.log("its a draw")
        msg.innerText="its a draw...play again"
        msgg.style.backgroundColor="blue"
                msgg.style.color="white"


}
const winner=(uwin)=>
{
if (uwin) {
    console.log("congrats!you won")
    msg.innerText="congrats!you won"
            msgg.style.backgroundColor="green"
        msgg.style.color="white"
        usercore++;
        ucore.innerText=usercore
        

}else{
    console.log("upps!you lose")
        msg.innerText="upps!you lose"
        msgg.style.backgroundColor="red"
        msgg.style.color="white"
        compcore++;
        cscore.innerText=compcore;
       
}
}
    const cchoice=()=>{
    const options=["rock", "paper","scissors"]
    const rindex= Math.floor(Math.random()*3)
    return options[rindex]
}
    const playgame=(choiceid)=>{
    const uchoice=choiceid

    console.log("userchoice is",uchoice)
   
    const cochoice=cchoice()
        console.log("comp choice is",cochoice)
         cresult.innerText=cochoice
         userresult.innerText=uchoice

        if (choiceid===cochoice) {
draw()
        }
        else{
            let uwin=true;
            if (choiceid==="rock") {
                uwin=cochoice==="paper"?false:true;
            }else if (choiceid==="paper") {
                uwin=cochoice==="scissors"?false:true;
            }else{
                uwin=cochoice==="rock"?false:true;
            }
            winner(uwin);
        }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceid= choice.getAttribute("id")
        playgame(choiceid)
    })
})

let btn2=document.querySelector("#btn2")
let mode="light"

btn2.addEventListener("click",()=>{
    if (mode==="light") {
    mode="dark"
    body.style.backgroundColor="black"
    body.style.color="white"

}
else{
    mode="light"
      body.style.backgroundColor="white"
      body.style.color="black"
}
    console.log(mode)
})