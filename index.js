



let x = 0
let y = 0


document.getElementById("score1").textContent = x
document.getElementById("score2").textContent = y




function add12(){
    y+=1
    document.getElementById("score2").textContent = y
}
function add22(){
    y+=2
    document.getElementById("score2").textContent = y
}
function add32(){
    y+=3
    document.getElementById("score2").textContent = y
}


function add1(){
    x+=1
    document.getElementById("score1").textContent = x
}
function add2(){
    x+=2
    document.getElementById("score1").textContent = x
}
function add3(){
    x+=3
    document.getElementById("score1").textContent = x
}