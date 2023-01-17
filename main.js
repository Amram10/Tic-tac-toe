let turn= true //true=O
let Clickbtn=0
let btns = document.querySelectorAll(".btn")

btns.forEach(btn=>{
    btn.addEventListener('click', btnClick)
})

function btnClick() {
    if(this.textContent!="") return
    Clickbtn+=1
    if(turn) this.textContent='X'
    else this.textContent='O'
    turn=!turn
    let obj=CheckWin()

    //chack the winner
    if (obj.win)
    {
        let btns = document.querySelectorAll(".btn")
        btns[obj.pos[0]].style.color="red"
        btns[obj.pos[1]].style.color="red"
        btns[obj.pos[2]].style.color="red"

        setTimeout(() => {
             alert(this.textContent + "  win!")
             reset()
        }, 200);    
    }
            else if(obj.tie)
        {
        setTimeout(() => {
        alert("Is a tie!!")
        reset()
        }, 200); 
        }

    function reset()
    {
     let btns = document.querySelectorAll(".btn")
     Clickbtn=0
btns.forEach(btn=>{
     turn=!turn
    btn.textContent=""
    btn.style.color=""
})   
    }

    function CheckWin()
    {
      let btns = document.querySelectorAll(".btn")
      let obj  = {win:false, tie:false, pos:[]}
      if (btns[0].textContent==btns[1].textContent&&btns[1].textContent==btns[2].textContent&&btns[2].textContent!="")
      obj =  {win:true, tie:false, pos:[0,1,2]}
            else if (btns[3].textContent==btns[4].textContent&&btns[4].textContent==btns[5].textContent&&btns[5].textContent!="") 
      obj = {win:true, tie:false, pos:[3,4,5]}
            else if (btns[6].textContent==btns[7].textContent&&btns[7].textContent==btns[8].textContent&&btns[8].textContent!="") 
      obj = {win:true, tie:false, pos:[6,7,8]}
            else if (btns[0].textContent==btns[3].textContent&&btns[3].textContent==btns[6].textContent&&btns[6].textContent!="") 
      obj =  {win:true, tie:false, pos:[0,3,6]}
            else if (btns[1].textContent==btns[4].textContent&&btns[4].textContent==btns[7].textContent&&btns[7].textContent!="") 
      obj =  {win:true, tie:false, pos:[1,4,7]}
            else if (btns[2].textContent==btns[5].textContent&&btns[5].textContent==btns[8].textContent&&btns[8].textContent!="") 
      obj =  {win:true, tie:false, pos:[2,5,8]}
            else if (btns[0].textContent==btns[4].textContent&&btns[4].textContent==btns[8].textContent&&btns[8].textContent!="") 
      obj =  {win:true, tie:false, pos:[0,4,8]}
            else if (btns[2].textContent==btns[4].textContent&&btns[4].textContent==btns[6].textContent&&btns[6].textContent!="") 
      obj =  {win:true, tie:false, pos:[2,4,6]}
      else if (Clickbtn==9)
       obj = {win: false, tie: true, pos:[]}
    return obj
    }
    
}