const changeButton = document.getElementById('change')
changeButton.addEventListener('click',function(){
    changeButton.innerText = 'Hello Everyone'
})
// console.log(changeButton);

function makeGreen(){
    document.body.style.backgroundColor = 'green';
}

const redButton = document.getElementById("make-red");
redButton.onclick = makeRed ;
function makeRed(){
    document.body.style.backgroundColor = 'pink';
}

const PurpleButton = document.getElementById('Purple');
// console.log(PurpleButton)
PurpleButton.onclick = function(){
    document.body.style.backgroundColor = 'Purple'
}

const blackButton = document.getElementById('black');
blackButton.addEventListener('click',function(){
    document.body.style.backgroundColor ='black'
})

document.getElementById("blue").addEventListener('click',function(){
    document.body.style.backgroundColor = 'blue'
})

document.getElementById('grey').addEventListener('dblclick',function(){
    document.body.style.backgroundColor = 'grey'
})