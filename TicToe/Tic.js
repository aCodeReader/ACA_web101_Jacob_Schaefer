//choose player X & 0 
var plyr
var pPlayer

function selectX (){
    plyr = 'X'
    console.log('player:', plyr)
}
function selectO (){
    plyr = 'O'
}
function setValue(el){
    if (!plyr) {
        alert('select player')
    } else if (pPlayer === plyr) {
        alert('Pick New Player')
    } else{   
    el.innerText = plyr
    pPlayer = plyr
    }
}
//select location on board
//append x or o to location
//change player
console.log('hi')
console.log(plyrX)