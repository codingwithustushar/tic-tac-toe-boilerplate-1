// iteration-1decalres all the variables

const boxElements = document.querySelectorAll(".box");
// console.log(boxElements)

let winningCombination = 
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6]

]

const message = document.getElementById("message")
const Playagain = document.getElementById("button")
const Result = document.getElementById("result")

var click = 0;

let xattempts = [];
let oattempts = [];
let wonthegame = 0;

// iteration 2: onclick function
boxElements.forEach((el,i,arr)=>{


    el.addEventListener("click", ()=>{
        handleClick(event)
    })

})

function handleClick(e){
    console.log(e)
    console.log(e.target)
    console.log(typeof e.target.id)
    
    let i = e.target.id;

    let p = document.createElement("p")
    p.setAttribute("id","text");
    
    boxElements[i-1].append(p);

    // if my click is even or odd
    if(click%2==0){
        p.innerHTML = "X"
        p.style.color = "yellow"
        xattempts.push(parseInt(i-1)) 
        result(winningCombination,xattempts,"X")
    }

    else{
        p.innerHTML = "O"
        p.style.color = "red"
        oattempts.push(parseInt(i-1));
        result(winningCombination,oattempts,"O")
    }
    click++

    if(click == 9 && wonthegame==0){
        result.style.visibility = "visible";
        message.innerHTML = "Its a Tie"
    }
}

function result(winningCombination,attempts,players){
    let count = 0;
    let checker = [];

    for(let i=0; i<winningCombination.length;i++){
        if(Array.isArray(winningCombination[i])){
            result(winningCombination[i],attempts,players)
        }
        else{
            if(attempts.includes(winningCombination[i])){
                checker.push(true)
                count++
            }
            else{
                checker.push(false)
            }
        }
    }
    if(checker.every(el => el===true)&& count>2){
        Result.style.visibility = "visible";
        message.innerHTML = "The Winner is"+players +"!";
        wonthegame =1
    }
}
